import { combineReducers } from "redux-immutable";
import { reducers as web3Reducers } from "redux-saga-web3";

import { reducer as ArtonomousReducer } from "../contracts/Artonomous";
import { reducer as SoulTokenReducer } from "../contracts/SoulToken";
import { reducer as AuctionHouseReducer } from "../contracts/AuctionHouse";
import { reducer as GeneratorRegistryReducer } from "../contracts/GeneratorRegistry";

const reducers = combineReducers({
  ...web3Reducers,
  ...ArtonomousReducer,
  ...SoulTokenReducer,
  ...AuctionHouseReducer,
  ...GeneratorRegistryReducer
});

export default reducers;
