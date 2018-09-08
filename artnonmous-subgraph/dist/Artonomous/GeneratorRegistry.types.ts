class RegistryEntryEvent extends EthereumEvent {
  get params(): RegistryEntryEventParams {
    return new RegistryEntryEventParams(this);
  }
}

class RegistryEntryEventParams {
  _event: RegistryEntryEvent;

  constructor(event: RegistryEntryEvent) {
    this._event = event;
  }

  get registryEntry(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get eventType(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }
}

class GeneratorRegistry extends SmartContract {
  static bind(address: Address, blockHash: H256): GeneratorRegistry {
    return new GeneratorRegistry("GeneratorRegistry", address, blockHash);
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
