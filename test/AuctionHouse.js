const ArtPieceToken = artifacts.require("ArtPieceToken");
const AuctionHouse = artifacts.require("AuctionHouse");

contract("AuctionHouse", accounts => {
  let artPieceToken, auctionHouse;

  beforeEach(async () => {
    artPieceToken = await ArtPieceToken.new("ArtPieceToken", "ART");
    auctionHouse = await AuctionHouse.new(artPieceToken.address);
    await artPieceToken.transferOwnership(auctionHouse.address);
  });

  describe("start()", () => {
    it("successfully starts an auction", async () => {
      await auctionHouse.start();
      const auction = await auctionHouse.getAuction.call();
      assert.equal("0", auction[0].toString());

      // await auctionHouse.start();

      await auctionHouse.buy({
        value: auction[1]
      });

      assert.isTrue(false)
    });
  });
});
