import React from 'react';
import PropTypes from 'prop-types';

class BondingModal extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>{this.props.generator}</div>
    )
  }
}

BondingModal.propTypes = {
  generator: PropTypes.string
}

export default BondingModal;
