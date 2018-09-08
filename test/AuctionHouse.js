const time = require("./helpers/increaseTime");

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
      let auction = await auctionHouse.getAuction.call();
      console.log(auction);
      assert.equal("0", auction[0].toString());

      time.increaseTime(86400)

      auction = await auctionHouse.getAuction.call();
      console.log(auction);

      await auctionHouse.buy({
        value: 0
      });

      await auctionHouse.start();

      assert.isTrue(false)
    });
  });
});
