import React from "react";
import { compose, lifecycle } from "recompose";
import { connect } from "react-redux";
import withLoading from "../utils/withLoading";

import {
  actions as auctionHouseActions,
  selectors as auctionHouseSelectors
} from "../contracts/AuctionHouse";

import { actions as artonomousActions } from "../contracts/Artonomous";

import {
  actions as artPieceTokenActions,
  selectors as artPieceTokenSelectors
} from "../contracts/ArtPieceToken";

import {
  actions as generatorActions,
  selectors as generatorSelectors
} from "../contracts/Generator";

import Home from "../components/Home";

const mapStateToProps = (state, { auctionHouse, artPieceToken }) => ({
  auction: auctionHouseSelectors.methods.getAuction({ at: auctionHouse })(
    state
  ),
  router: state.get("router"),
  generator: artPieceTokenSelectors.methods.getGenerator({ at: artPieceToken })(
    state
  )
});

const mapDispatchToProps = (dispatch, { auctionHouse, artPieceToken }) => ({
  getAuction: () => {
    dispatch(
      auctionHouseActions.methods.getAuction({ at: auctionHouse }).call()
    );
  },
  startAuction: () => {
    dispatch(artonomousActions.methods.startAuction().send());
  },
  buyPiece: value => {
    dispatch(
      artonomousActions.methods
        .buyPiece({
          value
        })
        .send()
    );
  },
  getGenerator: tokenId => {
    dispatch(
      artPieceTokenActions.methods
        .getGenerator({ at: artPieceToken })
        .call(tokenId)
    );
  },
  getGeneratorMetadata: address => {
    dispatch(generatorActions.methods.getGenerator({ at: address }).call());
  }
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
  }),
  withLoading(({ auction }) => {
    return !auction || !auction.get("value") || !auction.get("value")[0];
  }),
  lifecycle({
    componentDidMount() {
      this.props.getGenerator(this.props.auction.get("value")[0]);
    }
  }),
  withLoading(({ auction, generator }) => {
    const tokenId = auction.get("value")[0];
    return !generator || !generator.getIn([tokenId, "value"]);
  }),
  lifecycle({
    componentDidMount() {
      this.props.getGeneratorMetadata(
        this.props.generator.getIn([
          this.props.auction.get("value")[0],
          "value"
        ])
      );
    }
  }),
  connect((state, props) => {
    const generatorAddresss = props.generator.getIn([
      props.auction.get("value")[0],
      "value"
    ]);

    return {
      generatorMetadata: generatorSelectors.methods.getGenerator({
        at: generatorAddresss
      })(state)
    };
  }),
  withLoading(({ generatorMetadata }) => {
    return !generatorMetadata || !generatorMetadata.get("value");
  })
)(Home);
