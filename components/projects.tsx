"use client";

import React from "react";

import { projectsData } from "@/lib/data";

import ProjectCard from "./project-card";
import { useSectionInView } from "@/lib/hooks";

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.75);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28">
      <div className="flex flex-col gap-y-4 sm:gap-y-8">
        <h1 className="sm:text-2xl text-xl font-bold text-center">
          My Projects
        </h1>
        <div className="flex flex-col gap-y-4 sm:gap-y-6">
          {projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <ProjectCard
                index={index}
                title={project.title}
                description={project.description}
                tags={Array.from(project.tags)}
                imageUrl={project.imageUrl}
                gitRepo={project.gitRepo}
                live={project.live}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
