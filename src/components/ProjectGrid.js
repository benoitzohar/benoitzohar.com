import React from "react";

import ProjectCard from "./ProjectCard";

export default function ProjectGrid({ projects }) {
  return (
    <div className="project-grid">
      {projects.map((project) => (
        <ProjectCard
          key={project.name}
          name={project.name}
          icon={project.icon}
          href={project.href}
        />
      ))}
    </div>
  );
}
