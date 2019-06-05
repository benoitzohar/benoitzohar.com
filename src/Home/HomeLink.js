import React, { Fragment } from "react";
import { Link } from "react-navi";

import "./HomeLink.css";

export default props => {
  const linkContent = (
    <Fragment>
      <img className="icon" src={props.icon} alt={`${props.title} icon`} />
      {props.title}
    </Fragment>
  );
  return props.external ? (
    // TODO: get rid of `external` with navi?
    <a href={props.link} className="home-link">
      {linkContent}
    </a>
  ) : (
    <Link href={props.link} className="home-link">
      {linkContent}
    </Link>
  );
};
