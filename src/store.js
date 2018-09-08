import {
  connectRouter,
  routerMiddleware
} from "connected-react-router/immutable";
import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import Web3 from "web3";

import reducers from "./reducers";
import sagas from "./sagas";

// Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const web3 = new Web3();
web3.setProvider(window.web3.currentProvider);

export default history => {
  const sagaMiddleware = createSagaMiddleware({
    context: {
      web3
    }
  });
  const middlewares = [routerMiddleware(history), sagaMiddleware];
  const store = createStore(
    connectRouter(history)(reducers),
    composeEnhancers(applyMiddleware(...middlewares))
  );

  sagaMiddleware.run(sagas);

  return store;
};
