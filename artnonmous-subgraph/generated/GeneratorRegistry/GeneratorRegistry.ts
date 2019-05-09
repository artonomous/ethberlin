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

export class RegistryEntryEVT extends EthereumEvent {
  get params(): RegistryEntryEVT__Params {
    return new RegistryEntryEVT__Params(this);
  }
}

export class RegistryEntryEVT__Params {
  _event: RegistryEntryEVT;

  constructor(event: RegistryEntryEVT) {
    this._event = event;
  }

  get context(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get registryEntry(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get eventType(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class GeneratorRegistry extends SmartContract {
  static bind(address: Address): GeneratorRegistry {
    return new GeneratorRegistry("GeneratorRegistry", address);
  }

  factory(): Address {
    let result = super.call("factory", []);
    return result[0].toAddress();
  }

  token(): Address {
    let result = super.call("token", []);
    return result[0].toAddress();
  }

  getActiveGenerator(): Address {
    let result = super.call("getActiveGenerator", []);
    return result[0].toAddress();
  }

  getToken(): Address {
    let result = super.call("getToken", []);
    return result[0].toAddress();
  }
}
