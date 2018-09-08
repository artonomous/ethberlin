const GeneratorFactory = artifacts.require("GeneratorFactory");

module.exports = async function(callback) {
  const generatorFactory = await GeneratorFactory.deployed();
  generatorFactory.createGenerator("Geneator!", "Geneator_uri");
  callback();
};
