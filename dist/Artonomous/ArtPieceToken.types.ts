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

class Transfer extends EthereumEvent {
  get params(): TransferParams {
    return new TransferParams(this);
  }
}

class TransferParams {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get _from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _tokenId(): U256 {
    return this._event.parameters[2].value.toU256();
  }
}

class Approval extends EthereumEvent {
  get params(): ApprovalParams {
    return new ApprovalParams(this);
  }
}

class ApprovalParams {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get _owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _approved(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _tokenId(): U256 {
    return this._event.parameters[2].value.toU256();
  }
}

class ApprovalForAll extends EthereumEvent {
  get params(): ApprovalForAllParams {
    return new ApprovalForAllParams(this);
  }
}

class ApprovalForAllParams {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get _owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

class ArtPieceToken extends SmartContract {
  static bind(address: Address, blockHash: H256): ArtPieceToken {
    return new ArtPieceToken("ArtPieceToken", address, blockHash);
  }

  supportsInterface(_interfaceId: Bytes): boolean {
    let result = super.call("supportsInterface", [
      EthereumValue.fromBytes(_interfaceId)
    ]);
    return result[0].toBoolean();
  }

  name(): string {
    let result = super.call("name", []);
    return result[0].toString();
  }

  getApproved(_tokenId: U256): Address {
    let result = super.call("getApproved", [EthereumValue.fromU256(_tokenId)]);
    return result[0].toAddress();
  }

  totalSupply(): U256 {
    let result = super.call("totalSupply", []);
    return result[0].toU256();
  }

  InterfaceId_ERC165(): Bytes {
    let result = super.call("InterfaceId_ERC165", []);
    return result[0].toBytes();
  }

  tokenOfOwnerByIndex(_owner: Address, _index: U256): U256 {
    let result = super.call("tokenOfOwnerByIndex", [
      EthereumValue.fromAddress(_owner),
      EthereumValue.fromU256(_index)
    ]);
    return result[0].toU256();
  }

  exists(_tokenId: U256): boolean {
    let result = super.call("exists", [EthereumValue.fromU256(_tokenId)]);
    return result[0].toBoolean();
  }

  tokenByIndex(_index: U256): U256 {
    let result = super.call("tokenByIndex", [EthereumValue.fromU256(_index)]);
    return result[0].toU256();
  }

  ownerOf(_tokenId: U256): Address {
    let result = super.call("ownerOf", [EthereumValue.fromU256(_tokenId)]);
    return result[0].toAddress();
  }

  balanceOf(_owner: Address): U256 {
    let result = super.call("balanceOf", [EthereumValue.fromAddress(_owner)]);
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

  tokenURI(_tokenId: U256): string {
    let result = super.call("tokenURI", [EthereumValue.fromU256(_tokenId)]);
    return result[0].toString();
  }

  isApprovedForAll(_owner: Address, _operator: Address): boolean {
    let result = super.call("isApprovedForAll", [
      EthereumValue.fromAddress(_owner),
      EthereumValue.fromAddress(_operator)
    ]);
    return result[0].toBoolean();
  }
}
