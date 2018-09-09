import React from "react";
import PropTypes from "prop-types";
import P5Sandbox from "./P5Sandbox";
import * as fsapi from "../fsapi";

export default class RenderArtModal extends React.Component {
  static propTypes = {
    url: PropTypes.string
  };
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
          hash={this.props.hash}
          code={this.state.code}
        />
      );
      return <pre>{this.state.code}</pre>;
    }
    return <div>loading from ipfs...</div>;
  }
}
