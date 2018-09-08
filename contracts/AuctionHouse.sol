pragma solidity ^0.4.24;

import "openzeppelin-solidity/contracts/math/SafeMath.sol";

import "./tokens/ArtPieceToken.sol";

contract AuctionHouse {
  using SafeMath for uint256;

  event Started(uint256 tokenId, uint256 startingPrice, uint256 endTime);
  event Sold(address indexed buyer, uint256 tokenId, uint256 price);

  struct Auction {
    uint256 tokenId;
    uint256 startingPrice;
    uint256 endTime;
  }

  uint public constant AUCTION_LENGTH = 86400; // 24 hours
  Auction public auction;
  ArtPieceToken public pieceToken;

  // verifies that an auction is not already in progress
  modifier canStart() {
    require(auction.endTime == 0, "Auction is already in progress");
    _;
  }

  // verifies that an auction is already in progress
  modifier canBuy() {
    require(auction.endTime != 0, "No auction in progress");
    require(auction.endTime > now, "Auction is already over"); // solhint-disable-line not-rely-on-time
    require(msg.value >= getCurrentPrice(), "Not enough funds sent to purchase");
    _;
  }

  constructor(address _pieceToken) {
    pieceToken = ArtPieceToken(_pieceToken);
  }

  function buy() external canBuy payable {
    uint256 price = getCurrentPrice();

    pieceToken.transferFrom(this, msg.sender, auction.tokenId);
    delete auction;

    uint256 remainder = msg.value - price;

     // refund extra value
    if (remainder > 0) {
      msg.sender.transfer(remainder);
    }

    emit Sold(msg.sender, auction.tokenId, price);
  }

  function start() external canStart {
    uint256 tokenId = pieceToken.mint(this, "");
    uint256 endTime = now + AUCTION_LENGTH;
    uint256 startingPrice = getStartingPrice();

    auction = Auction({
      tokenId: tokenId,
      endTime: endTime, // solhint-disable-line not-rely-on-time
      startingPrice: startingPrice
    });

    emit Started(tokenId, startingPrice, endTime);
  }

  function getStartingPrice() public pure returns (uint256) {
    return 1000000000000;
  }

  function getCurrentPrice() public view returns (uint256) {
    // Price decays linearly, reaching 0 at endTime
    return getStartingPrice().sub(getStartingPrice().mul(now.div(auction.endTime)));
  }

  function getAuction() public view returns (uint256, uint256, uint256) {
    return (
      auction.tokenId,
      auction.startingPrice,
      auction.endTime
    );
  }
}
