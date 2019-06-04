import React, { Component } from "react";
import Helmet from "react-helmet";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";

import Home from "./Home/Home";
import BlogList from "./Blog/BlogList";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Helmet title="Benoit Zohar" />

          <Route path="/" exact component={Home} />
          <Route path="/blog/" component={BlogList} />
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
