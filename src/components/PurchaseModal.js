import React from 'react';
import PropTypes from 'prop-types'
import './PurchaseModal.css'

class PurchaseModal extends React.Component {

  state = {
    buy: true
  };

  setBuy = () => {
    this.setState({ buy: true });
  }

  setSell = () => {
    this.setState({ buy: false });
  }

  render() {
    return (
      <div className="modal">
        <div className="purchase-dialog">
          <span onClick={this.setBuy} className="buy">
            Buy
          </span>
          <span onClick={this.setSell} className="sell">
            Sell
          </span>
        </div>
        <div className="purchase-info">
          I want to {this.state.buy ? "buy" : "sell"}
          <input type="number" placeholder="0.00"/> 
          {this.props.token}
        </div>
        <div className="button purchase-button-modal">{this.state.buy ? "Buy": "Sell"}</div>
      </div>
    );
  }
}

PurchaseModal.propTypes = {
  token: PropTypes.string
}

export default PurchaseModal;
