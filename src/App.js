import React, { Component } from "react";
import { actions } from "redux-saga-web3";
import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";
import { Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Generators from "./Generators";
import Home from "./Home";

import withLoading from "./utils/withLoading";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/generators" component={Generators} />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  accounts: state.get("accounts"),
  router: state.get("router")
});

const mapDispatchToProps = dispatch => ({
  getAccounts: () => dispatch(actions.accounts.getRequest()),
  getLatestBlock: () => dispatch(actions.blocks.getBlockHeader("latest"))
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  lifecycle({
    componentDidMount() {
      this.props.getAccounts();
      this.props.getLatestBlock();
    }
  }),
  withLoading(() => true)
)(App);
