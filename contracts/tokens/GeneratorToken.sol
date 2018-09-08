pragma solidity ^0.4.24;

import "openzeppelin-solidity/contracts/token/ERC20/DetailedERC20.sol";
import "openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

import "./TokenBondingCurve.sol";

contract GeneratorToken is TokenBondingCurve, DetailedERC20 {
  constructor(
    string name,
    string symbol,
    uint8 decimals,
    address _reserveToken,
    uint32 _reserveRatio,
    uint256 _gasPrice
  ) DetailedERC20(name, symbol, decimals) public {
    reserveToken = StandardToken(_reserveToken);
    reserveRatio = _reserveRatio;
    gasPrice = _gasPrice;
  }
}
