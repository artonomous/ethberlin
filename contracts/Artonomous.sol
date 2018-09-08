pragma solidity ^0.4.24;

import "./tokens/SoulToken.sol";
import "./tokens/ArtPieceToken.sol";
import "./GeneratorRegistry.sol";

contract Artonomous {
  GeneratorRegistry public generatorRegistry;
  ArtPieceToken public artPieceToken;
  SoulToken public soulToken;

  constructor(GeneratorRegistry _generatorRegistry, ArtPieceToken _artPieceToken, SoulToken _soulToken) public {
    generatorRegistry = _generatorRegistry;
    artPieceToken = _artPieceToken;
    soulToken = _soulToken;
  }
}
