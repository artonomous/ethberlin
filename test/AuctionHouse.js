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
      const auction = await auctionHouse.getAuction.call();
      console.log(auction);
      assert.equal("0", auction[0].toString());

      // await auctionHouse.start();

      // await auctionHouse.buy({
      //   value: auction[1]
      // });

      time.increaseTime(86400)

      const auction2 = await auctionHouse.getAuction.call();
      console.log("yeah")
      console.log(auction2);

      assert.isTrue(false)
    });
  });
});
