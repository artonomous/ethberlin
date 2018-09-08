import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import createHistory from "history/createBrowserHistory";
import { ConnectedRouter } from "connected-react-router/immutable";
import { Route } from "react-router-dom";

import createStore from "./store";

import Header from "./components/Header";
import "./index.css";
import App from "./App";
import Generators from "./Generators";

// Create a history
const history = createHistory();
const store = createStore(history);

ReactDOM.render(
  <ReduxProvider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Header />
        <Route exact path="/" component={App} />
        <Route exact path="/generators" component={Generators} />
      </div>
    </ConnectedRouter>
  </ReduxProvider>,
  document.getElementById("root")
);
