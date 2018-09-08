import React, { Component } from "react";
import { actions } from "redux-saga-web3";
import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";
import { Route } from "react-router-dom";

import {
  actions as artonomousActions,
  selectors as artonomousSelectors
} from "./contracts/Artonomous";

import HeaderContainer from "./containers/HeaderContainer";
import Footer from "./components/Footer";
import CreateGenerator from "./CreateGenerator";
import AboutContent from "./components/AboutContent";
import Generators from "./Generators";
import HomeContainer from "./containers/HomeContainer";
import HistoricalPieces from "./components/HistoricalPieces";

import withMainLoading from "./utils/withMainLoading";

class App extends Component {
  render() {
    const { artonomousInfo } = this.props;
    const value = artonomousInfo.get("value");
    const auctionHouse = value[0];
    const generatorRegistry = value[1];
    const artPieceToken = value[2];
    const soulToken = value[3];

    return (
      <div className="wrapper">
        <HeaderContainer soulToken={soulToken} />
        <Route
          exact
          path="/"
          render={() => <HomeContainer
                          artPieceToken={artPieceToken}
                          auctionHouse={auctionHouse} />}
        />
        <Route
          exact
          path="/generators"
          component={Generators}
          generatorRegistry={generatorRegistry}
        />
        <Route exact path="/generators/create" component={CreateGenerator} />
        <Route exact path="/about" component={AboutContent} />
        <Route
          exact
          path="/historical"
          component={HistoricalPieces}
        />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  artonomousInfo: artonomousSelectors.methods.getInfo()(state),
  accounts: state.get("accounts"),
  router: state.get("router")
});

const mapDispatchToProps = dispatch => ({
  getAccounts: () => dispatch(actions.accounts.getRequest()),
  getLatestBlock: () => dispatch(actions.blocks.getBlockHeader("latest")),
  getArtonomous: () => dispatch(artonomousActions.methods.getInfo().call())
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
      this.props.getArtonomous();
    }
  }),
  withMainLoading(({ accounts, artonomousInfo }) => {
    return !accounts || !accounts.get("items") || !artonomousInfo.get("value");
  })
)(App);
