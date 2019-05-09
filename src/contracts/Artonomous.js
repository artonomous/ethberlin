import ReduxSagaWeb3EthContract from "redux-saga-web3-eth-contract";
import artifact from "../artifacts/Artonomous.json";

ReduxSagaWeb3EthContract.setProvider(window.web3.currentProvider);

console.log('address at : ', artifact.networks["4"].address);

// const info = new window.web3.eth.contract(artifact.abi).at(artifact.networks["4"].address);
// console.log(info.getInfo((err, res) => console.log(err, res)));
// debugger

const instance = new ReduxSagaWeb3EthContract("Artonomous", artifact.abi, {
  at: artifact.networks["4"].address
});


const { contract, types, actions, reducer, selectors, saga } = instance;
export { contract, types, actions, reducer, selectors, saga };
