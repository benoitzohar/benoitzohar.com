import React, { Fragment } from "react";
import { Link } from "@reach/router";

export default function HomeLink({ title, icon, link, external }) {
  const linkContent = (
    <Fragment>
      <img className="icon" src={icon} alt={`${title} icon`} />
      {title}
    </Fragment>
  );
  return external ? (
    <a href={link} className="home-link">
      {linkContent}
    </a>
  ) : (
    <Link to={link} className="home-link">
      {linkContent}
    </Link>
  );
}
