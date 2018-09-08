pragma solidity ^0.4.24;

import "zos-lib/contracts/migrations/Initializable.sol";

import "./tokens/GeneratorToken.sol";
import "./GeneratorRegistry.sol";

contract Generator is Initializable {
  GeneratorRegistry public registry;
  string public name;
  address public creator;
  string public sourceUri;
  GeneratorToken public token;

  function initialize(
    GeneratorRegistry _registry,
    string _name,
    address _creator,
    string _sourceUri
  ) isInitializer public {
    name = _name;
    registry = _registry;
    creator = _creator;
    sourceUri = _sourceUri;

    token = new GeneratorToken(name, "", 18, registry.getToken(), 666666, 20000000000);
    registry.fireRegistryEvent("constructed");
  }

  function getGenerator() public view returns (string, address, string, GeneratorToken) {
    return (
      name,
      creator,
      sourceUri,
      token
    );
  }
}
