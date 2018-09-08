class Constructed extends EthereumEvent {
  get params(): ConstructedParams {
    return new ConstructedParams(this);
  }
}

class ConstructedParams {
  _event: Constructed;

  constructor(event: Constructed) {
    this._event = event;
  }

  get creator(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

class AuctionStarted extends EthereumEvent {
  get params(): AuctionStartedParams {
    return new AuctionStartedParams(this);
  }
}

class AuctionStartedParams {
  _event: AuctionStarted;

  constructor(event: AuctionStarted) {
    this._event = event;
  }

  get tokenId(): U256 {
    return this._event.parameters[0].value.toU256();
  }

  get generator(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

class Artonomous extends SmartContract {
  static bind(address: Address, blockHash: H256): Artonomous {
    return new Artonomous("Artonomous", address, blockHash);
  }

  soulToken(): Address {
    let result = super.call("soulToken", []);
    return result[0].toAddress();
  }

  generatorRegistry(): Address {
    let result = super.call("generatorRegistry", []);
    return result[0].toAddress();
  }

  artPieceToken(): Address {
    let result = super.call("artPieceToken", []);
    return result[0].toAddress();
  }

  auctionHouse(): Address {
    let result = super.call("auctionHouse", []);
    return result[0].toAddress();
  }
}
