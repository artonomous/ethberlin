import React from 'react';
import Blockies from 'react-blockies';
import ReactModal from 'react-modal';
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

  handleModalSoulOpen = () => {
    this.setState({ showSoulModal: true });
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
                <span className="address">30x054188d35...e2a4a15913504ecfc15a9</span>
                <span className="network">Network: Mainnet</span>
              </div>
            </div>
          </div>
          <div className="right">
            <span className="ether">0.2 ETH</span>
            <span
              className="button buy-ether"
              onClick={this.handleModalEthOpen}>
              Buy/Sell ETH
            </span>
            <ReactModal 
              isOpen={this.state.showEthModal}
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
