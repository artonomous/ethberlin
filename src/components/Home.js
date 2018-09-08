import React, { Component } from "react";
import { actions } from "redux-saga-web3";
import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";

import LoadingLogo from "./LoadingLogo";

import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="root">
        <div className="art-root">
          <LoadingLogo className="art-piece" />
          {/* <img
            className="art-piece"
            src="https://images.unsplash.com/photo-1536314360972-f52b0947329e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f6dd135053c008197d7ed1943586f88f&auto=format&fit=crop&w=1650&q=80"
          /> */}
          <div className="art-info">
            <div className="price">20 ETH</div>
            <div className="timeleft">23 h 50 min 3 sec</div>
            <div className="generator">Awesome hash</div>
          </div>
          <div className="button bid-button background-color-soul">Bid</div>
        </div>
      </div>
    );
  }
}

export default Home;
