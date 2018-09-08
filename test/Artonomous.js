const SoulToken = artifacts.require("SoulToken");
const ArtPieceToken = artifacts.require("ArtPieceToken");
const AuctionHouse = artifacts.require("AuctionHouse");
const GeneratorRegistry = artifacts.require("GeneratorRegistry");
const GeneratorFactory = artifacts.require("GeneratorFactory");
const GeneratorContract = artifacts.require("Generator");

contract("Artonomous", accounts => {
  let soulToken,
    artPieceToken,
    auctionHouse,
    generator,
    generatorRegistry,
    generatorFactory;

  beforeEach(async () => {
    const token = await Artonomous.new();

    const AMOUNT = 50000000000000000000000;
    await Promise.all(
      accounts.map(account => {
        console.log("Minting token " + token.address + " for " + account);
        return token.mint(account, AMOUNT);
      })
    );
    db = await EternalDb.new();
    registry = await MemberRegistry.new();
    staking = await Staking.new(token.address);
    await registry.initialize(db.address, staking.address);

    regEntryFac = await MemberEntryFactory.new(registry.address);
  });

  describe("createRegistryEntry(bytes _data, uint256 deposit)", () => {
    it("successfully creates and challenges entry", async () => {});
  });
});
