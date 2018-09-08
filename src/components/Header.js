import React from "react";
import Blockies from "react-blockies";
import ReactModal from "react-modal";
import { Link } from "react-router-dom";
import "./Header.css";

import PurchaseModal from "./PurchaseModal";
import getWeb3 from "../utils/getWeb3";

class Header extends React.Component {
  state = {
    showEthModal: false,
    showSoulModal: false,
    network: "Loading",
    address: "Loading",
    balance: "Loading"
  };

  componentDidMount() {
    this.getNetwork();
    this.getBalance();
  }

  handleModalEthOpen = () => {
    this.setState({ showEthModal: true });
  };

  handleModalEthClose = () => {
    this.setState({ showEthModal: false });
  };

  handleModalSoulOpen = () => {
    this.setState({ showSoulModal: true });
  };

  handleModalSoulClose = () => {
    this.setState({ showSoulModal: false });
  };

  getNetwork() {
    getWeb3()
      .then(web3 => {
        return web3.eth.net.getNetworkType();
      })
      .then(network => {
        if (network === "main") {
          this.setState({ network: "Mainnet" });
        } else {
          this.setState({ network });
        }
      });
  }

  getBalance() {
    getWeb3().then(web3 => {
      web3.eth
        .getAccounts()
        .then(accounts => {
          return web3.eth.getBalance(accounts[0]);
        })
        .then(balance => {
          balance = (balance / 1000000000000000000).toFixed(2);
          this.setState({ balance });
        });
    });
  }

  render() {
    const { accounts } = this.props;

    const customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-30%",
        transform: "translate(-50%, -50%)",
        height: "60%",
        width: "40%"
      }
    };

    return (
      <div className="header color-text">
        <div className="left">
          <div className="blockies-container">
            <div className="blockies">
              <Blockies seed={accounts.getIn(["items", 0])} size={10} scale={3} />
            </div>
            <div className="network-info">
              <Link className="color-soul" to="/">
                Home
              </Link>
              <Link className="color-soul" to="/generators">
                Generators
              </Link>
            </div>
          </div>
        </div>
        <div className="right">
          {/* <span className="network">Network: {this.state.network}</span>
          <span className="ether">{this.state.balance} ETH</span> */}
          <span className="button buy-ether" onClick={this.handleModalEthOpen}>
            Buy/Sell ETH
          </span>
          <ReactModal
            isOpen={this.state.showEthModal}
            onRequestClose={this.handleModalEthClose}
            style={customStyles}
          >
            <PurchaseModal token="ETH" />
          </ReactModal>
          <span className="soul"> {this.props.soulTokenBalance && this.props.soulTokenBalance.get("value")} SOUL</span>
          <span
            className="button buy-soul background-color-soul"
            onClick={this.handleModalSoulOpen}
          >
            Buy/Sell SOUL
          </span>
          <ReactModal
            isOpen={this.state.showSoulModal}
            onRequestClose={this.handleModalSoulClose}
            style={customStyles}
          >
            <PurchaseModal token="SOUL" />
          </ReactModal>
        </div>
      </div>
    );
  }
}

export default Header;
