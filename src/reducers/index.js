import { combineReducers } from "redux-immutable";
import { reducers as web3Reducers } from "redux-saga-web3";

import { reducer as artonomousReducer } from "../contracts/Artonomous";

const reducers = combineReducers({
  ...web3Reducers,
  ...artonomousReducer
});

export default reducers;
