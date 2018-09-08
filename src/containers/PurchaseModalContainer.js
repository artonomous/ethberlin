import React from "react";
import { compose, lifecycle } from "recompose";
import { connect } from "react-redux";

import PurchaseModal from "../components/PurchaseModal";

import {
  actions as soulTokenActions,
  selectors as soulTokenSelectors
} from "../contracts/SoulToken";

const mapStateToProps = (state, props) => ({});

const mapDispatchToProps = (dispatch, props) => ({
  buy: value =>
    dispatch(
      soulTokenActions.methods.buy({ at: props.soulToken, value }).send()
    ),
  sell: amount =>
    dispatch(
      soulTokenActions.methods.sell({ at: props.soulToken }).send(amount)
    )
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(PurchaseModal);
