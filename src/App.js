import React from "react";
import { Root, Routes } from "react-static";
import { Router, Match } from "@reach/router";

import Menu from "./components/Menu";

import "./App.css";

function App() {
  return (
    <Root>
      <React.Suspense fallback={<em>Loading...</em>}>
        <Match path="/">{props => !props.match && <Menu />}</Match>
        <main>
          <Router>
            <Routes path="*" />
          </Router>
        </main>
      </React.Suspense>
    </Root>
  );
}

export default App;
