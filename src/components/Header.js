import React from "react";
import Blockies from "react-blockies";
import ReactModal from "react-modal";
import { Link } from "react-router-dom";
import web3 from "web3";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import "./Header.css";

import PurchaseModalContainer from "../containers/PurchaseModalContainer";
import getWeb3 from "../utils/getWeb3";

class Header extends React.Component {
  state = {
    showPurchaseModal: false,
    network: "Loading",
    address: "Loading",
    balance: "Loading"
  };

  handleModalSoulOpen = () => this.setState({ showPurchaseModal: true });

  handleModalSoulClose = () => this.setState({ showPurchaseModal: false });

  render() {
    const { accounts, soulToken, soulTokenBalance } = this.props;

    const customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-30%",
        transform: "translate(-50%, -50%)",
        height: "60%",
        width: "50%"
      }
    };
    console.log(soulTokenBalance && typeof soulTokenBalance.get("value"))

    return (
      <div className="header color-text">
        <div className="left">
          <div className="blockies-container">
            {/* <div className="blockies">
              <Blockies
                seed={accounts.getIn(["items", 0])}
                size={10}
                scale={3}
              />
            </div> */}
            <div className="network-info">
              <Link className="color-soul" to="/">
                Home
              </Link>
              <Link className="color-soul" to="/about">
                About
              </Link>
              <Link className="color-soul" to="/generators">
                Generators
              </Link>
              <Link className="color-soul" to="/historical">
                History
              </Link>
            </div>
          </div>
        </div>
        <div className="right">
          <span className="soul">
            {" "}
            {soulTokenBalance && soulTokenBalance.get("value") && web3.utils.fromWei(soulTokenBalance.get("value"))} 
            SOUL
          </span>
          <span
            className="button buy-soul background-color-soul"
            onClick={this.handleModalSoulOpen}
          >
            Buy/Sell SOUL
          </span>
          <ReactModal
            isOpen={this.state.showPurchaseModal}
            onRequestClose={this.handleModalSoulClose}
            style={customStyles}
          >
            <PurchaseModalContainer token="SOUL" soulToken={soulToken} />
          </ReactModal>
        </div>
      </div>
    );
  }
}

export default Header;
