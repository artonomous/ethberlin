pragma solidity ^0.4.24;

import "openzeppelin-solidity/contracts/token/ERC721/ERC721Token.sol";
import "openzeppelin-solidity/contracts/ownership/Ownable.sol";

contract ArtPieceToken is ERC721Token, Ownable {
  constructor(string _name, string _symbol) ERC721Token(_name, _symbol) public {
    name_ = _name;
    symbol_ = _symbol;
  }

  function mint(address _to, string _tokenURI) onlyOwner public returns (uint){
    uint256 tokenId = allTokens.length;
    _mint(_to, tokenId);
    _setTokenURI(tokenId, _tokenURI);

    return tokenId;
  }
}
