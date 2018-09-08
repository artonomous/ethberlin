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
