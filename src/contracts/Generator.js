import ReduxSagaWeb3EthContract from "redux-saga-web3-eth-contract";
import artifact from "../artifacts/Generator.json";

// ReduxSagaWeb3EthContract.setProvider(window.web3.currentProvider);

const instance = new ReduxSagaWeb3EthContract("Generator", artifact.abi, {
  at: artifact.networks["4"].address
});

const { contract, types, actions, reducer, selectors, saga } = instance;
export { contract, types, actions, reducer, selectors, saga };
