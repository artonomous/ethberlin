import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import createHistory from "history/createBrowserHistory";
import { ConnectedRouter } from "connected-react-router/immutable";
import { ApolloProvider } from "react-apollo";
import { client } from "./apollo";

import createStore from "./store";
import App from "./App";
import Footer from "./components/Footer";

import "./index.css";

// Create a history
const history = createHistory();
const store = createStore(history);

ReactDOM.render(
  <ApolloProvider client={client}>
    <ReduxProvider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <App />
          <Footer />
        </div>
      </ConnectedRouter>
    </ReduxProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
