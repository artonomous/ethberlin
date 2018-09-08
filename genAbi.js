const glob = require("glob");
const fs = require("fs");
const path = require("path");
const _ = require("lodash");

try {
  fs.rmdirSync("build/abis");
  fs.mkdirSync("build/abis");
} catch (e) {}

const rootContracts = glob.GlobSync("contracts/*.sol").found;
const allContracts = _.map(
  _.without(
    _.concat(rootContracts, glob.GlobSync("contracts/tokens/*.sol").found),
    "contracts/Migrations.sol",
    "contracts/tokens/BancorFormula.sol",
    "contracts/tokens/BondingCurve.sol",
    "contracts/tokens/TokenBondingCurve.sol",
    "contracts/tokens/EthBondingCurve.sol"
  ),
  r => path.basename(r)
);

console.log(
  "has contracts",
  allContracts,
  _.concat(rootContracts, glob.GlobSync("build/contracts/tokens/*.json").found)
);

function processContract(contract) {
  const builtPath =
    "build/contracts/" + path.basename(contract.replace(".sol", ".json"));
  console.log("has builtpath", builtPath);
  if (fs.existsSync(builtPath)) {
    fs.readFile(builtPath, (err, data) => {
      console.log("has data", data, builtPath);
      const dataJson = JSON.parse(data);
      console.log("writing abi for " + contract, builtPath);
      fs.writeFileSync(
        builtPath
          .replace("build/", "src/")
          .replace("/contracts/", "/artifacts/"),
        JSON.stringify(dataJson, null, 2)
      );
      fs.writeFileSync(
        builtPath
          .replace("build/", "artnonmous-subgraph/")
          .replace("/contracts/", "/abis/"),
        JSON.stringify(dataJson["abi"], null, 2)
      );
    });
  }
}

allContracts.forEach(contract => {
  processContract(contract);
});
