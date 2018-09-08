import React from "react";
import { compose } from "recompose";
import { connect } from "react-redux";

import Header from "../components/Header";

const mapStateToProps = state => ({
  accounts: state.get("accounts"),
  router: state.get("router")
});
// 
// const mapDispatchToProps = dispatch => ({
//   getAccounts: () => dispatch(actions.accounts.getRequest()),
//   getLatestBlock: () => dispatch(actions.blocks.getBlockHeader("latest"))
// });

export default compose(
  connect(
    mapStateToProps,
  )
)(Header);
