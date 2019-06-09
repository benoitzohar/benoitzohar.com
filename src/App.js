import React from "react";
import { Root, Routes } from "react-static";
import { Router } from "@reach/router";

import Menu from "./components/Menu";

import "./App.css";

function App() {
  return (
    <Root>
      <React.Suspense fallback={<em>Loading...</em>}>
        <main>
          <Menu />
          <Router>
            <Routes path="*" />
          </Router>
        </main>
      </React.Suspense>
    </Root>
  );
}

export default App;
