var ArtPieceToken = artifacts.require("./ArtPieceToken.sol");

module.exports = function(deployer) {
  deployer.deploy(ArtPieceToken, "ArtPieceToken", "ART");
};
