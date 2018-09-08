import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
        <div className='header'>
          <div className="left">
            <span>Here could be the account picture</span>
            <span className="address">30x054188d35...e2a4a15913504ecfc15a9</span>
            <span className="network">Network: Mainnet</span>
          </div>
          <div className="right">
            <span className="ether">0.2 ETH</span>
            <button className="buy-ether">Purchase ETH</button>
            <span className="soul">0.2 SOUL</span>
            <button className="buy-soul">Purchase SOUL</button>
          </div>
        </div>
    );
  }
}

export default Header;
