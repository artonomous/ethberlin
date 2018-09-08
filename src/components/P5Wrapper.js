import React, { Component } from "react";
import p5 from "p5";

class P5Wrapper extends Component {
  componentDidMount() {
    this.canvas = new p5(this.props.sketch, this.wrapper);
    if (this.canvas.myCustomRedrawAccordingToNewPropsHandler) {
      this.canvas.myCustomRedrawAccordingToNewPropsHandler(this.props);
    }
  }

  componentWillReceiveProps(newprops) {
    if (this.canvas.myCustomRedrawAccordingToNewPropsHandler) {
      this.canvas.myCustomRedrawAccordingToNewPropsHandler(newprops);
    }
  }

  takePhoto() {
    return new Promise(resolve => {
      this.canvas.toBlob(blob => {
        resolve(blob);
      }, "image/png");
    });
  }

  componentWillUnmount() {
    this.canvas.remove();
  }

  render() {
    return <div ref={wrapper => (this.wrapper = wrapper)} />;
  }
}

export default P5Wrapper;
