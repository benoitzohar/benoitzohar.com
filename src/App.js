import React, { Component, Suspense } from "react";
import Helmet from "react-helmet";
import { mount, route, lazy } from "navi";
import { Router, View } from "react-navi";

import Home from "./Home/Home";

import "./App.css";

const routes = mount({
  "/": route({
    view: <Home />
  }),
  "/blog": lazy(() => import("./Blog/BlogList"))
});

class App extends Component {
  render() {
    return (
      <Router routes={routes}>
        <main>
          <Helmet title="Benoit Zohar" />
          <Suspense fallback={null}>
            <View />
          </Suspense>
        </main>
      </Router>
    );
  }
}

export default App;
