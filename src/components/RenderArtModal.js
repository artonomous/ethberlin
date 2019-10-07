import React from "react";
import PropTypes from "prop-types";
import P5Sandbox from "./P5Sandbox";
import * as fsapi from "../fsapi";


const codeCache = {};

export default class RenderArtModal extends React.Component {
  static propTypes = {
    url: PropTypes.string
  };
  state = {
    code: null
  };

  componentDidMount() {
    this.updateData();
  }

  updateData() {
    if (this.props.url in codeCache) {
      this.setState({code: codeCache[this.props.url]});
      return;
    }
    fsapi.getTextFileFromPath(this.props.url.split("/")[0]).then(code => {
      codeCache[this.props.url] = code;
      this.setState({ code });
    });
  }

  componentDidUpdate(prevProps) {
    console.log('update?');
    if (prevProps.url !== this.props.url) {
      this.updateData();
    }
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
