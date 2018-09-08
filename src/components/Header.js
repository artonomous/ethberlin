import React from 'react';
import Blockies from 'react-blockies';
import './Header.css';

class Header extends React.Component {
  render() {
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
            <span className="button buy-ether">Purchase ETH</span>
            <span className="soul">0.2 SOUL</span>
            <span className="button buy-soul">Purchase SOUL</span>
          </div>
        </div>
    );
  }
}

export default Header;
