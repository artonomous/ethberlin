import React, { Component } from "react";
import Countdown from "react-countdown-now";
import { actions } from "redux-saga-web3";
import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";

import CountdownRenderer from "./CountdownRenderer";
import LoadingLogo from "./LoadingLogo";

import "./Home.css";

class Home extends Component {
  createAuction() {}

  render() {
    //const tokenId = this.props.auction && this.props.auction.get("value") && this.props.auction.get("value")[0]
    const currentPrice =
      this.props.auction &&
      this.props.auction.get("value") &&
      this.props.auction.get("value")[1];
    //const endTime = this.props.auction && this.props.auction.get("value") && this.props.auction.get("value")[2]
    const tokenId = 1;
    const endTime = 1536595438;
    const generator = this.props.generator;
    const generatorAddress = generator && generator.getIn(["0", "value"]);

    if (tokenId === "0") {
      return <button onClick={this.createAuction}>Create Auction</button>;
    } else {
      return (
        <div className="root">
          <div className="art-root">
            <LoadingLogo className="art-piece" />
            <div className="art-info">
              <div className="generator">{generatorAddress}</div>
              <div className="last-bidder">Last bidder</div>
              <div className="timeleft">
                <Countdown
                  date={new Date(endTime * 1000)}
                  renderer={CountdownRenderer}
                />
              </div>
              <div className="price">{currentPrice} ETH</div>
              <div className="button bid-button background-color-soul">Buy</div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Home;
