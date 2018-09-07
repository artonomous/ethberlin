pragma solidity ^0.4.24;

import "./tokens/ArtPieceToken.sol";

contract AuctionHouse {
    event Started(uint256 token);
    event Sold(address indexed buyer, uint256 price);

    struct Auction {
      uint256 tokenId;
      uint256 startingPrice;
      uint256 endTime;
    }

    uint public constant AUCTION_LENGTH = 86400; // 24 hours
    Auction public current;
    ArtPieceToken public pieceToken;

    // verifies that an auction is not already in progress
    modifier canStart() {
      require(current.endTime == 0, "Auction is already in progress");
      _;
    }

    // verifies that an auction is already in progress
    modifier canBuy() {
      require(current.endTime != 0, "No auction in progress");
      require(current.endTime > now, "Auction is already over"); // solhint-disable-line not-rely-on-time
      require(msg.value >= getCurrentPrice(), "Not enough funds sent to purchase");
      _;
    }

    constructor(address _pieceToken) {
      pieceToken = ArtPieceToken(_pieceToken);
    }

    function buy() external canBuy payable {
      uint price = getCurrentPrice();

      pieceToken.transferFrom(this, msg.sender, current.tokenId);
      delete current;

      uint remainder = msg.value - price;

       // refund extra value
      if (remainder > 0) {
        msg.sender.transfer(remainder);
      }
    }

    function start() internal canStart {
      uint256 tokenId = pieceToken.mint(this, "");
      current = Auction({
        tokenId: tokenId,
        endTime: now + AUCTION_LENGTH, // solhint-disable-line not-rely-on-time
        startingPrice: getStartingPrice()
      });
    }

    function getStartingPrice() internal pure returns (uint) {
      return 1000000000000;
    }

    function getCurrentPrice() internal pure returns (uint) {
      return getStartingPrice();
    }
}
