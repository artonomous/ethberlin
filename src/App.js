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
import CreateGenerator from "./CreateGenerator";
import AboutContent from "./components/AboutContent";
import Generators from "./Generators";
import HomeContainer from "./containers/HomeContainer";
import HistoricalPieces from "./components/HistoricalPieces";
import Demo from './Demo';

import withMainLoading from "./utils/withMainLoading";

class App extends Component {
  render() {
    const { artonomousInfo } = this.props;
    const chainInfo = {
      auctionHouse: null,
      generatorRegistry: null,
      artPieceToken: null,
      soulToken: null,
      offline: true
    };

    // const value = artonomousInfo.get("value");
    let value = [0, 0, 0, 0, 0];
    chainInfo.auctionHouse = value[0];
    chainInfo.generatorRegistry = value[1];
    chainInfo.artPieceToken = value[2];
    chainInfo.soulToken = value[3];
    chainInfo.auctionHouse = value[4];
    chainInfo.offline = false;

    return (
      <div style={{background:'#222', color:'#eee'}} className="wrapper">
        <HeaderContainer soulToken={chainInfo.soulToken} />
        <Route
          exact
          path="/"
          render={() => (
            <HomeContainer
              artPieceToken={chainInfo.artPieceToken}
              auctionHouse={chainInfo.auctionHouse}
            />
          )}
        />
        <Route
          exact
          path="/generators"
          component={Generators}
          generatorRegistry={chainInfo.generatorRegistry}
        />
        <Route exact path="/demo" component={Demo} />
        <Route exact path="/generators/create" component={CreateGenerator} />
        <Route exact path="/about" component={AboutContent} />
        <Route exact path="/historical" component={HistoricalPieces} />
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
    return !accounts || !accounts.get("items") //|| !artonomousInfo || !artonomousInfo.get("value");
  })
)(App);
