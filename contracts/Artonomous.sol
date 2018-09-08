pragma solidity ^0.4.24;

import "./tokens/SoulToken.sol";
import "./tokens/ArtPieceToken.sol";
import "./AuctionHouse.sol";
import "./GeneratorRegistry.sol";

contract Artonomous {
  AuctionHouse public auctionHouse;
  GeneratorRegistry public generatorRegistry;
  ArtPieceToken public artPieceToken;
  SoulToken public soulToken;

  constructor(AuctionHouse _auctionHouse, GeneratorRegistry _generatorRegistry, ArtPieceToken _artPieceToken, SoulToken _soulToken) public {
    auctionHouse = _auctionHouse;
    generatorRegistry = _generatorRegistry;
    artPieceToken = _artPieceToken;
    soulToken = _soulToken;
  }
}
