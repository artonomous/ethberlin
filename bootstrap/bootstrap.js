const GeneratorFactory = artifacts.require("GeneratorFactory");
const GeneratorRegistry = artifacts.require("GeneratorRegistry");

module.exports = async function(callback) {
  const generatorFactory = await GeneratorFactory.deployed();
  const generatorRegistry = await GeneratorRegistry.deployed();
  await generatorFactory.createGenerator("Geneator!", "Geneator_uri");

  const res = await generatorRegistry.getActiveGenerator.call();
  console.log(res);
  callback();
};
