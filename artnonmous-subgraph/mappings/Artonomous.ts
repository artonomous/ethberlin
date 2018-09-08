export function handleAuctionStarted(event: AuctionStarted): void {
  let artonomousContract = Artonomous.bind(event.address, event.blockHash);
  let tokenId = event.params.tokenId;

  let artPieceTokenAddress = artonomousContract.artPieceToken();
  // let artPieceTokenContract = ArtPieceToken.bind(
  //   artPieceTokenAddress,
  //   event.blockHash
  // );

  // let artPieceGenerator = artPieceTokenContract.getGenerator();
  //
  // artPieceTokenContract

  let auctionEntity = new Entity();
  auctionEntity.setString("id", artPieceTokenAddress.toHex());
  auctionEntity.setU256("tokenId", tokenId);
  store.set("Auction", event.address.toHex(), auctionEntity);
}
