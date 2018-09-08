pragma solidity ^0.4.24;

import "openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

import "./GeneratorFactory.sol";

contract GeneratorRegistry {
  event RegistryEntryEvent(address indexed registryEntry, bytes32 indexed eventType);

  GeneratorFactory public factory;
  StandardToken public token;
  address[] generators;

  constructor(StandardToken _token) public {
    token = _token;
  }

  function addGenerator(address _generator) public {
    generators.push(_generator);
  }

  function setFactory(GeneratorFactory _factory) public {
    factory = _factory;
  }

  function fireRegistryEvent(bytes32 _eventType) public {
    emit RegistryEntryEvent(msg.sender, _eventType);
  }

  function getToken() public view returns (address) {
    return token;
  }
}
