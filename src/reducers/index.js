import { combineReducers } from "redux-immutable";
import { reducers as web3Reducers } from "redux-saga-web3";

console.log(web3Reducers);
const reducers = combineReducers({
  ...web3Reducers
});

export default reducers;
