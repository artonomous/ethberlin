import ReduxSagaWeb3EthContract from "redux-saga-web3-eth-contract";
import artifact from "../artifacts/AuctionHouse.json";

ReduxSagaWeb3EthContract.setProvider(window.web3.currentProvider);

const instance = new ReduxSagaWeb3EthContract("AuctionHouse", artifact.abi);

const { contract, types, actions, reducer, selectors, saga } = instance;
export { contract, types, actions, reducer, selectors, saga };
