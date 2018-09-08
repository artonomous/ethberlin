import React from "react";
import { compose, lifecycle } from "recompose";
import { connect } from "react-redux";
import web3 from "web3";

import PurchaseModal from "../components/PurchaseModal";

import {
  actions as soulTokenActions,
  selectors as soulTokenSelectors
} from "../contracts/SoulToken";

const mapStateToProps = (state, props) => ({});

const mapDispatchToProps = (dispatch, props) => ({
  buy: value =>
    dispatch(
      soulTokenActions.methods
        .buy({ at: props.soulToken, value: web3.utils.toWei(value) })
        .send()
    ),
  sell: amount =>
    dispatch(
      soulTokenActions.methods
        .sell({ at: props.soulToken })
        .send(web3.utils.toWei(amount))
    )
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(PurchaseModal);
