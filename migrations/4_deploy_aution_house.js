const AuctionHouse = artifacts.require("./AuctionHouse.sol");
const ArtPieceToken = artifacts.require("./ArtPieceToken.sol");

module.exports = async function(deployer) {
  const artPieceToken = await ArtPieceToken.deployed();
  deployer.deploy(AuctionHouse, artPieceToken.address);
};
