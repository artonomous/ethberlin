import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import createHistory from "history/createBrowserHistory";
import { ConnectedRouter } from "connected-react-router/immutable";

import createStore from "./store";
import App from "./App";

import "./index.css";

// Create a history
const history = createHistory();
const store = createStore(history);

ReactDOM.render(
  <ReduxProvider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </ReduxProvider>,
  document.getElementById("root")
);
