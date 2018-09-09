import React from "react";
import { compose, lifecycle } from "recompose";
import { connect } from "react-redux";

import Header from "../components/Header";

import {
  actions as soulTokenActions,
  selectors as soulTokenSelectors
} from "../contracts/SoulToken";

const mapStateToProps = (state, props) => ({
  accounts: state.get("accounts"),
  router: state.get("router"),
  soulTokenBalance: soulTokenSelectors.methods.balanceOf({
    at: props.soulToken
  })(state, state.getIn(["accounts", "items", 0]))
});

const mapDispatchToProps = (dispatch, props) => ({
  getBalanceOf: address => {
    console.log(props)
    dispatch(
      soulTokenActions.methods.balanceOf({ at: props.soulToken }).call(address)
    )
  }
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  lifecycle({
    componentDidMount() {
      this.props.getBalanceOf(this.props.accounts.getIn(["items", 0]));
    }
  })
)(Header);
