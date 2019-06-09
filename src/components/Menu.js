import React from "react";
import { Link } from "@reach/router";

export default function Menu() {
  return (
    <div className="menu">
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
    </div>
  );
}
