pragma solidity ^0.4.18;

import "./EthBondingCurve.sol";

contract SoulToken is EthBondingCurve {
  constructor(uint32 _reserveRatio, uint256 _gasPrice) {
    reserveRatio = _reserveRatio;
    gasPrice = _gasPrice;
  }
}
