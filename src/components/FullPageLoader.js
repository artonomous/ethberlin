import React from "react";

import LoadingLogo from "./LoadingLogo";

import "./FullPageLoader.css";

export default () => (
  <div className="full-page-loader">
    <LoadingLogo width={250} height={250} />
    <div>Artonomous</div>
  </div>
);
