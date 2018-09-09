
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
          hello
        </div>
      </div>
    );
  }
}

BondModal.propTypes = {
  token: PropTypes.string
};

export default BondModal
