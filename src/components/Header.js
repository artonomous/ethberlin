import React from 'react';
import Blockies from 'react-blockies';
import ReactModal from 'react-modal';
import { Link } from 'react-router-dom';
import './Header.css';

import PurchaseModal from './PurchaseModal';


class Header extends React.Component {
  state = {
    showEthModal: false,
    showSoulModal: false
  };

  handleModalEthOpen = () => {
    this.setState({ showEthModal: true });
  }

  handleModalEthClose = () => {
    this.setState({ showEthModal: false });
  }

  handleModalSoulOpen = () => {
    this.setState({ showSoulModal: true });
  }

  handleModalSoulClose = () => {
    this.setState({ showSoulModal: false });
  }

  render() {
    const customStyles = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-30%',
        transform             : 'translate(-50%, -50%)',
        height                : '60%',
        width                 : '40%',
      }
    };

    return (
        <div className='header'>
          <div className="left">
            <div className="blockies-container">
              <div className="blockies">
                <Blockies
                  seed="Address goes here"
                  size={10}
                  scale={3}
                  color="#dfe"
                  bgColor="#ffe"
                  spotColor="#abc"
                />
              </div>
              <div className="network-info">
                <Link to="/">Home</Link>
                <Link to="/generators">Generators</Link>
              </div>
            </div>
          </div>
          <div className="right">
            <span className="network">Network: Mainnet</span>
            <span className="ether">0.2 ETH</span>
            <span
              className="button buy-ether"
              onClick={this.handleModalEthOpen}>
              Buy/Sell ETH
            </span>
            <ReactModal 
              isOpen={this.state.showEthModal}
              onRequestClose={this.handleModalEthClose}
              style={customStyles}
            >
              <PurchaseModal token="ETH" /> 
            </ReactModal>
            <span className="soul">0.2 SOUL</span>
            <span
              className="button buy-soul"
              onClick={this.handleModalSoulOpen}>
              Buy/Sell SOUL</span>
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
