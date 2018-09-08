class Started extends EthereumEvent {
  get params(): StartedParams {
    return new StartedParams(this);
  }
}

class StartedParams {
  _event: Started;

  constructor(event: Started) {
    this._event = event;
  }

  get tokenId(): U256 {
    return this._event.parameters[0].value.toU256();
  }

  get startingPrice(): U256 {
    return this._event.parameters[1].value.toU256();
  }

  get endTime(): U256 {
    return this._event.parameters[2].value.toU256();
  }
}

class Ended extends EthereumEvent {
  get params(): EndedParams {
    return new EndedParams(this);
  }
}

class EndedParams {
  _event: Ended;

  constructor(event: Ended) {
    this._event = event;
  }

  get tokenId(): U256 {
    return this._event.parameters[0].value.toU256();
  }

  get price(): U256 {
    return this._event.parameters[1].value.toU256();
  }

  get endTime(): U256 {
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

  constructor(event: OwnershipRenounced) {
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

class AuctionHouse__auctionResult {
  value0: U256;
  value1: U256;
  value2: U256;

  constructor(value0: U256, value1: U256, value2: U256) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromU256(this.value0));
    map.set("value1", EthereumValue.fromU256(this.value1));
    map.set("value2", EthereumValue.fromU256(this.value2));
    return map;
  }
}

class AuctionHouse__getAuctionResult {
  value0: U256;
  value1: U256;
  value2: U256;

  constructor(value0: U256, value1: U256, value2: U256) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromU256(this.value0));
    map.set("value1", EthereumValue.fromU256(this.value1));
    map.set("value2", EthereumValue.fromU256(this.value2));
    return map;
  }
}

class AuctionHouse extends SmartContract {
  static bind(address: Address, blockHash: H256): AuctionHouse {
    return new AuctionHouse("AuctionHouse", address, blockHash);
  }

  AUCTION_LENGTH(): U256 {
    let result = super.call("AUCTION_LENGTH", []);
    return result[0].toU256();
  }

  auction(): AuctionHouse__auctionResult {
    let result = super.call("auction", []);
    return new AuctionHouse__auctionResult(
      result[0].toU256(),
      result[1].toU256(),
      result[2].toU256()
    );
  }

  owner(): Address {
    let result = super.call("owner", []);
    return result[0].toAddress();
  }

  getStartingPrice(): U256 {
    let result = super.call("getStartingPrice", []);
    return result[0].toU256();
  }

  getCurrentPrice(): U256 {
    let result = super.call("getCurrentPrice", []);
    return result[0].toU256();
  }

  getAuction(): AuctionHouse__getAuctionResult {
    let result = super.call("getAuction", []);
    return new AuctionHouse__getAuctionResult(
      result[0].toU256(),
      result[1].toU256(),
      result[2].toU256()
    );
  }
}
