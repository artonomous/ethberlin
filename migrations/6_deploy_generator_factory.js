const GeneratorRegistry = artifacts.require("./GeneratorRegistry.sol");
const GeneratorContract = artifacts.require("./Generator.sol");
const GeneratorFactory = artifacts.require("./GeneratorFactory.sol");

module.exports = async function(deployer) {
  const registry = await GeneratorRegistry.deployed();
  deployer.deploy(GeneratorContract);
  const generator = await GeneratorContract.deployed();
  deployer.deploy(GeneratorFactory, registry.address, generator.address);
};
