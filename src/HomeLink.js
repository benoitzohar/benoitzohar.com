import React from "react";
import "./HomeLink.css";

export default props => {
  return (
    <a href={props.link} className="home-link">
      <img className="icon" src={props.icon} alt={`${props.title} icon`} />
      {props.title}
    </a>
  );
};
