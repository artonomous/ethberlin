import {
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class LogMint extends EthereumEvent {
  get params(): LogMint__Params {
    return new LogMint__Params(this);
  }
}

export class LogMint__Params {
  _event: LogMint;

  constructor(event: LogMint) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amountMinted(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get totalCost(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class LogWithdraw extends EthereumEvent {
  get params(): LogWithdraw__Params {
    return new LogWithdraw__Params(this);
  }
}

export class LogWithdraw__Params {
  _event: LogWithdraw;

  constructor(event: LogWithdraw) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amountWithdrawn(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get reward(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class LogBondingCurve extends EthereumEvent {
  get params(): LogBondingCurve__Params {
    return new LogBondingCurve__Params(this);
  }
}

export class LogBondingCurve__Params {
  _event: LogBondingCurve;

  constructor(event: LogBondingCurve) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get logString(): string {
    return this._event.parameters[1].value.toString();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class OwnershipRenounced extends EthereumEvent {
  get params(): OwnershipRenounced__Params {
    return new OwnershipRenounced__Params(this);
  }
}

export class OwnershipRenounced__Params {
  _event: OwnershipRenounced;

  constructor(event: OwnershipRenounced) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class OwnershipTransferred extends EthereumEvent {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Approval extends EthereumEvent {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get spender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Transfer extends EthereumEvent {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class SoulToken extends SmartContract {
  static bind(address: Address): SoulToken {
    return new SoulToken("SoulToken", address);
  }

  name(): string {
    let result = super.call("name", []);
    return result[0].toString();
  }

  reserveRatio(): BigInt {
    let result = super.call("reserveRatio", []);
    return result[0].toBigInt();
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", []);
    return result[0].toBigInt();
  }

  INITAL_BALANCE(): BigInt {
    let result = super.call("INITAL_BALANCE", []);
    return result[0].toBigInt();
  }

  calculatePurchaseReturn(
    _supply: BigInt,
    _connectorBalance: BigInt,
    _connectorWeight: BigInt,
    _depositAmount: BigInt
  ): BigInt {
    let result = super.call("calculatePurchaseReturn", [
      EthereumValue.fromUnsignedBigInt(_supply),
      EthereumValue.fromUnsignedBigInt(_connectorBalance),
      EthereumValue.fromUnsignedBigInt(_connectorWeight),
      EthereumValue.fromUnsignedBigInt(_depositAmount)
    ]);
    return result[0].toBigInt();
  }

  INITIAL_SUPPLY(): BigInt {
    let result = super.call("INITIAL_SUPPLY", []);
    return result[0].toBigInt();
  }

  decimals(): i32 {
    let result = super.call("decimals", []);
    return result[0].toI32();
  }

  calculateSaleReturn(
    _supply: BigInt,
    _connectorBalance: BigInt,
    _connectorWeight: BigInt,
    _sellAmount: BigInt
  ): BigInt {
    let result = super.call("calculateSaleReturn", [
      EthereumValue.fromUnsignedBigInt(_supply),
      EthereumValue.fromUnsignedBigInt(_connectorBalance),
      EthereumValue.fromUnsignedBigInt(_connectorWeight),
      EthereumValue.fromUnsignedBigInt(_sellAmount)
    ]);
    return result[0].toBigInt();
  }

  version(): string {
    let result = super.call("version", []);
    return result[0].toString();
  }

  balanceOf(_owner: Address): BigInt {
    let result = super.call("balanceOf", [EthereumValue.fromAddress(_owner)]);
    return result[0].toBigInt();
  }

  INITIAL_PRICE(): BigInt {
    let result = super.call("INITIAL_PRICE", []);
    return result[0].toBigInt();
  }

  owner(): Address {
    let result = super.call("owner", []);
    return result[0].toAddress();
  }

  symbol(): string {
    let result = super.call("symbol", []);
    return result[0].toString();
  }

  poolBalance(): BigInt {
    let result = super.call("poolBalance", []);
    return result[0].toBigInt();
  }

  CURVE_RATIO(): BigInt {
    let result = super.call("CURVE_RATIO", []);
    return result[0].toBigInt();
  }

  allowance(_owner: Address, _spender: Address): BigInt {
    let result = super.call("allowance", [
      EthereumValue.fromAddress(_owner),
      EthereumValue.fromAddress(_spender)
    ]);
    return result[0].toBigInt();
  }

  gasPrice(): BigInt {
    let result = super.call("gasPrice", []);
    return result[0].toBigInt();
  }
}
