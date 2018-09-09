import React from "react";
import PropTypes from "prop-types";
import P5Sandbox from "./P5Sandbox";
import * as fsapi from "../fsapi";

class BondingModal extends React.Component {
  state = {
    code: null
  };

  componentDidMount() {
    fsapi.getTextFileFromPath(this.props.url.split("/")[0]).then(code => {
      this.setState({ code });
    });
  }
  render() {
    if (this.state.code) {
      return (
        <P5Sandbox
          isPlaying={true}
          width="100%"
          height="100%"
          code={this.state.code}
        />
      );
      return <pre>{this.state.code}</pre>;
    }
    return <div>loading from ipfs...</div>;
  }
}

BondingModal.propTypes = {
  url: PropTypes.string
};

export default BondingModal;
