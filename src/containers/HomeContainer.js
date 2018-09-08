import React from "react";
import { compose, lifecycle } from "recompose";
import { connect } from "react-redux";

import {
  actions as auctionHouseActions,
  selectors as auctionHouseSelectors
} from "../contracts/AuctionHouse";

import Home from "../components/Home";

const mapStateToProps = (state, { auctionHouse }) => ({
  auction: auctionHouseSelectors.methods.getAuction({ at: auctionHouse })(
    state
  ),
  router: state.get("router")
});

const mapDispatchToProps = (dispatch, { auctionHouse }) => ({
  getAuction: () =>
    dispatch(
      auctionHouseActions.methods.getAuction({ at: auctionHouse }).call()
    )
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  lifecycle({
    componentDidMount() {
      this.props.getAuction();
    }
  })
)(Home);
