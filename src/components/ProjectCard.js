import React from "react";

export default function ProjectCard({ name, icon, href }) {
  return (
    <a href={href} className="project-card" target="_blank" rel="noopener noreferrer">
      <img className="project-card-icon" src={icon} alt={`${name} icon`} />
      <span className="project-card-name">{name}</span>
    </a>
  );
}
