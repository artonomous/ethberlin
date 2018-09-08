import React from "react";
import { branch, renderComponent } from "recompose";

import FullPageLoader from "../components/FullPageLoader";

const withMainLoading = isLoading => {
  const Indicator = () => <FullPageLoader />;
  return branch(isLoading, renderComponent(Indicator));
};

export default withMainLoading;
