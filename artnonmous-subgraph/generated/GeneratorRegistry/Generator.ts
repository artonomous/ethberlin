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

export class Generator__getGeneratorResult {
  value0: string;
  value1: Address;
  value2: string;
  value3: Address;

  constructor(
    value0: string,
    value1: Address,
    value2: string,
    value3: Address
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromString(this.value0));
    map.set("value1", EthereumValue.fromAddress(this.value1));
    map.set("value2", EthereumValue.fromString(this.value2));
    map.set("value3", EthereumValue.fromAddress(this.value3));
    return map;
  }
}

export class Generator extends SmartContract {
  static bind(address: Address): Generator {
    return new Generator("Generator", address);
  }

  creator(): Address {
    let result = super.call("creator", []);
    return result[0].toAddress();
  }

  name(): string {
    let result = super.call("name", []);
    return result[0].toString();
  }

  initialized(): boolean {
    let result = super.call("initialized", []);
    return result[0].toBoolean();
  }

  sourceUri(): string {
    let result = super.call("sourceUri", []);
    return result[0].toString();
  }

  registry(): Address {
    let result = super.call("registry", []);
    return result[0].toAddress();
  }

  token(): Address {
    let result = super.call("token", []);
    return result[0].toAddress();
  }

  getGenerator(): Generator__getGeneratorResult {
    let result = super.call("getGenerator", []);
    return new Generator__getGeneratorResult(
      result[0].toString(),
      result[1].toAddress(),
      result[2].toString(),
      result[3].toAddress()
    );
  }
}
