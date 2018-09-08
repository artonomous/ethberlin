const GeneratorRegistry = artifacts.require("./GeneratorRegistry.sol");
const SoulToken = artifacts.require("./SoulToken.sol");

module.exports = async function(deployer) {
  const soulToken = await SoulToken.deployed();
  deployer.deploy(GeneratorRegistry, soulToken.address);
};
