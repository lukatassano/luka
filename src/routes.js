import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";
import Cv from "./pages/Cv";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/cv" component={Cv} />
    </BrowserRouter>
  );
}

export default Routes;
