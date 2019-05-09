class LogMint extends EthereumEvent {
  get params(): LogMintParams {
    return new LogMintParams(this);
  }
}

class LogMintParams {
  _event: LogMint;

  constructor(event: LogMint): void {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amountMinted(): U256 {
    return this._event.parameters[1].value.toU256();
  }

  get totalCost(): U256 {
    return this._event.parameters[2].value.toU256();
  }
}

class LogWithdraw extends EthereumEvent {
  get params(): LogWithdrawParams {
    return new LogWithdrawParams(this);
  }
}

class LogWithdrawParams {
  _event: LogWithdraw;

  constructor(event: LogWithdraw): void {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amountWithdrawn(): U256 {
    return this._event.parameters[1].value.toU256();
  }

  get reward(): U256 {
    return this._event.parameters[2].value.toU256();
  }
}

class LogBondingCurve extends EthereumEvent {
  get params(): LogBondingCurveParams {
    return new LogBondingCurveParams(this);
  }
}

class LogBondingCurveParams {
  _event: LogBondingCurve;

  constructor(event: LogBondingCurve): void {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get logString(): string {
    return this._event.parameters[1].value.toString();
  }

  get value(): U256 {
    return this._event.parameters[2].value.toU256();
  }
}

class OwnershipRenounced extends EthereumEvent {
  get params(): OwnershipRenouncedParams {
    return new OwnershipRenouncedParams(this);
  }
}

class OwnershipRenouncedParams {
  _event: OwnershipRenounced;

  constructor(event: OwnershipRenounced): void {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

class OwnershipTransferred extends EthereumEvent {
  get params(): OwnershipTransferredParams {
    return new OwnershipTransferredParams(this);
  }
}

class OwnershipTransferredParams {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred): void {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

class Approval extends EthereumEvent {
  get params(): ApprovalParams {
    return new ApprovalParams(this);
  }
}

class ApprovalParams {
  _event: Approval;

  constructor(event: Approval): void {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get spender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): U256 {
    return this._event.parameters[2].value.toU256();
  }
}

class Transfer extends EthereumEvent {
  get params(): TransferParams {
    return new TransferParams(this);
  }
}

class TransferParams {
  _event: Transfer;

  constructor(event: Transfer): void {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): U256 {
    return this._event.parameters[2].value.toU256();
  }
}

class SoulToken extends SmartContract {
  static bind(address: Address, blockHash: H256): SoulToken {
    return new SoulToken("SoulToken", address, blockHash);
  }

  name(): string {
    let result = super.call("name", []);
    return result[0].toString();
  }

  reserveRatio(): u32 {
    let result = super.call("reserveRatio", []);
    return result[0].toU32();
  }

  totalSupply(): U256 {
    let result = super.call("totalSupply", []);
    return result[0].toU256();
  }

  INITAL_BALANCE(): U256 {
    let result = super.call("INITAL_BALANCE", []);
    return result[0].toU256();
  }

  calculatePurchaseReturn(
    _supply: U256,
    _connectorBalance: U256,
    _connectorWeight: u32,
    _depositAmount: U256
  ): U256 {
    let result = super.call("calculatePurchaseReturn", [
      EthereumValue.fromU256(_supply),
      EthereumValue.fromU256(_connectorBalance),
      EthereumValue.fromU32(_connectorWeight),
      EthereumValue.fromU256(_depositAmount)
    ]);
    return result[0].toU256();
  }

  INITIAL_SUPPLY(): U256 {
    let result = super.call("INITIAL_SUPPLY", []);
    return result[0].toU256();
  }

  decimals(): u8 {
    let result = super.call("decimals", []);
    return result[0].toU8();
  }

  calculateSaleReturn(
    _supply: U256,
    _connectorBalance: U256,
    _connectorWeight: u32,
    _sellAmount: U256
  ): U256 {
    let result = super.call("calculateSaleReturn", [
      EthereumValue.fromU256(_supply),
      EthereumValue.fromU256(_connectorBalance),
      EthereumValue.fromU32(_connectorWeight),
      EthereumValue.fromU256(_sellAmount)
    ]);
    return result[0].toU256();
  }

  version(): string {
    let result = super.call("version", []);
    return result[0].toString();
  }

  balanceOf(_owner: Address): U256 {
    let result = super.call("balanceOf", [EthereumValue.fromAddress(_owner)]);
    return result[0].toU256();
  }

  INITIAL_PRICE(): U256 {
    let result = super.call("INITIAL_PRICE", []);
    return result[0].toU256();
  }

  owner(): Address {
    let result = super.call("owner", []);
    return result[0].toAddress();
  }

  symbol(): string {
    let result = super.call("symbol", []);
    return result[0].toString();
  }

  poolBalance(): U256 {
    let result = super.call("poolBalance", []);
    return result[0].toU256();
  }

  CURVE_RATIO(): u32 {
    let result = super.call("CURVE_RATIO", []);
    return result[0].toU32();
  }

  allowance(_owner: Address, _spender: Address): U256 {
    let result = super.call("allowance", [
      EthereumValue.fromAddress(_owner),
      EthereumValue.fromAddress(_spender)
    ]);
    return result[0].toU256();
  }

  gasPrice(): U256 {
    let result = super.call("gasPrice", []);
    return result[0].toU256();
  }
}
