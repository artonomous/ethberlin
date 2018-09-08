const Artonomous = artifacts.require("Artonomous");

module.exports = async function(callback) {
  const artonomous = await Artonomous.deployed()
  console.log("here");
  console.log(artonomous.address);
  artonomous.startAuction({
    from: "0x627306090abab3a6e1400e9345bc60c78a8bef57"
  });
  console.log("bingo")
    // .then(res => {
    //
    //   console.log(JSON.stringify(res, null, 2));
    //
    //   // const res = await generatorRegistry.getActiveGenerator.call();
    //   // console.log(res);
    //   callback();
    // });
};
