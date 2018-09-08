import React, { Component } from "react";
import P5Wrapper from "./P5Wrapper";
import sketch from "../sketches/logo";

export default ({ width = 200, height = 200 }) => (
  <P5Wrapper sketch={sketch(width, height)} />
);
