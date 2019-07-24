import React from "react";
import { Link, Match } from "@reach/router";

import Avatar from "../assets/avatar-round.svg";
import BlogIcon from "../assets/icons/blog.svg";

export default function Menu() {
  return (
    <nav className="menu">
      <Link to="/">
        <img src={Avatar} alt={`Home icon`} /> Home
      </Link>
      <Match path="/blog">
        {props => (
          <Link to="/blog" className={props.match ? "active" : ""}>
            <img src={BlogIcon} alt={`Blog icon`} /> Blog
          </Link>
        )}
      </Match>
    </nav>
  );
}
