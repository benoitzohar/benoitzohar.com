import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import "./HomeLink.css";

export default props => {
  const linkContent = (
    <Fragment>
      <img className="icon" src={props.icon} alt={`${props.title} icon`} />
      {props.title}
    </Fragment>
  );
  return props.external ? (
    <a href={props.link} className="home-link">
      {linkContent}
    </a>
  ) : (
    <Link to={props.link} className="home-link">
      {linkContent}
    </Link>
  );
};
