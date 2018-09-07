pragma solidity ^0.4.18;

import "./EthBondingCurve.sol";

contract SoulToken is EthBondingCurve {
  string public constant name = "SoulToken";
  string public constant symbol = "SOL";
  uint8 public constant decimals = 18;

  constructor(uint32 _reserveRatio, uint256 _gasPrice) public {
    reserveRatio = _reserveRatio;
    gasPrice = _gasPrice;
  }
}
