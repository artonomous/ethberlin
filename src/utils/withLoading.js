import React from "react";
import { branch, renderComponent } from "recompose";

import Spinner from "react-spinkit";

const withLoading = (isLoading, props = { color: "#000", width: 20 }) => {
  const Indicator = () => <Spinner name="folding-cube" {...props} />;
  return branch(isLoading, renderComponent(Indicator));
};

export default withLoading;
