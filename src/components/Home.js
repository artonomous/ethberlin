import React, { Component } from "react";
import Countdown from 'react-countdown-now';
import { actions } from "redux-saga-web3";
import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";

import CountdownRenderer from './CountdownRenderer';

import "./Home.css";

class Home extends Component {

  createAuction() {

  }

  render() {
    //const tokenId = this.props.auction && this.props.auction.get("value") && this.props.auction.get("value")[0]
    const currentPrice = this.props.auction && this.props.auction.get("value") && this.props.auction.get("value")[1]
    //const endTime = this.props.auction && this.props.auction.get("value") && this.props.auction.get("value")[2]
    const tokenId = 1
    const endTime = 1536595438
    const generator = this.props.generator;
    const generatorAddress = generator && generator.getIn(['0', 'value'])

    if (tokenId === '0') {
      return (
        <button onClick={this.createAuction}>Create Auction</button>
      );
    } else {
      return (
        <div className="root">
          <div className="art-root">
            <img
              className="art-piece"
              src="https://images.unsplash.com/photo-1536314360972-f52b0947329e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f6dd135053c008197d7ed1943586f88f&auto=format&fit=crop&w=1650&q=80"
            />
            <div className="art-info">
              <p className="price">{currentPrice} ETH</p>
              <p className="timeleft">
                <Countdown
                  date={new Date(endTime * 1000)} 
                  renderer={CountdownRenderer}
                />
              </p>
              <p className="generator">{generatorAddress}</p>
              <p className="last-bidder">Last bidder</p>
              <input type="number" placeholder="0.00" />
              <span className="price-unit">ETH</span>
              <div className="button bid-button background-color-soul">Bid</div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Home;
