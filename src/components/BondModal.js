
import React from "react";
import PropTypes from "prop-types";

import "./PurchaseModal.css";

class BondModal extends React.Component {
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
        </div>
        <div className="purchase-info">
          I want to bond
          <input
            type="number"
            placeholder="0.00"
            value={value}
            onChange={this.setValue}
          />
          worth of SOUL
        </div>
        <div
          className="button purchase-button-modal background-color-soul"
          onClick={this.state.buy ? () => buy(value) : () => sell(value)}
        >
          Bond
        </div>
      </div>
    );
  }
}

BondModal.propTypes = {
  token: PropTypes.string
};

export default BondModal
