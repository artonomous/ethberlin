import React, { Component } from "react";
import Countdown from "react-countdown-now";
import { actions } from "redux-saga-web3";
import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";
import web3 from "web3";

import CountdownRenderer from "./CountdownRenderer";
import LoadingLogo from "./LoadingLogo";
import RenderArtModal from "./RenderArtModal";

import "./Home.css";
import EmojiHashRenderer from "./EmojiHashRenderer";

class Home extends Component {
  createAuction() {}

  render() {
    const {
      auction,
      generator,
      generatorMetadata,
      startAuction,
      buyPiece
    } = this.props;
    const tokenId = auction.get("value")[0];
    const currentPrice = auction.get("value")[1];
    const endTime = auction.get("value")[2];
    const generatorAddress = generator && generator.getIn([tokenId, "value"]);
    const generatorUri = generatorMetadata.get("value")[2];
    console.log(generatorUri);
    return (
      <div className="root">
        {tokenId === "0" ? (
          <div className="art-root">
            <button onClick={startAuction}>Create Auction</button>
          </div>
        ) : (
          <div className="art-root">
            <div className="piece-container">
              <RenderArtModal url={generatorUri} hash={tokenId} />
              {/* <LoadingLogo className="art-piece" /> */}
            </div>
            <div className="art-info">
              <div className="generator">
                <EmojiHashRenderer hash={generatorAddress} />
              </div>
              <div className="timeleft">
                <Countdown
                  date={new Date(endTime * 1000)}
                  renderer={CountdownRenderer}
                />
              </div>
              <div className="price">
                {currentPrice && web3.utils.fromWei(currentPrice)} ETH
              </div>
              <div
                className="button bid-button background-color-soul"
                onClick={() => buyPiece(currentPrice)}
              >
                Buy
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
