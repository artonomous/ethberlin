import React from "react";
import PropTypes from "prop-types";

import "./PurchaseModal.css";

class PurchaseModal extends React.Component {
  state = {
    buy: true,
    value: ""
  };

  setBuy = () => {
    this.setState({ buy: true, value: "" });
  };

  setSell = () => {
    this.setState({ buy: false, value: "" });
  };

  setValue = ({ target: { value } }) => this.setState({ value });

  render() {
    const { buy, sell } = this.props;
    const { value } = this.state;

    return (
      <div className="modal">
        <div className="purchase-dialog">
          <span 
            onClick={this.setBuy}
            className="buy"
            style={{'backgroundColor': this.state.buy ? "black" : "white",
                    'color': this.state.buy ? "white" : "black"}}
          >
            Buy
          </span>
          <span
            onClick={this.setSell}
            className="sell"
            style={{'backgroundColor': !this.state.buy ? "black" : "white",
                    'color': !this.state.buy ? "white" : "black"}}
          >
            Sell
          </span>
        </div>
        <div className="purchase-info">
          I want to {this.state.buy ? "buy" : "sell"}
          <input
            type="number"
            placeholder="0.00"
            value={value}
            onChange={this.setValue}
          />
          {this.state.buy ? "ETH worth of SOUL" : "SOUL for ETH"}
        </div>
        <div
          className="button purchase-button-modal background-color-soul"
          onClick={this.state.buy ? () => buy(value) : () => sell(value)}
        >
          {this.state.buy ? "Buy" : "Sell"}
        </div>
      </div>
    );
  }
}

PurchaseModal.propTypes = {
  token: PropTypes.string
};

export default PurchaseModal;
