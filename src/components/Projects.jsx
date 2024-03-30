import React from "react";
import ProjectCard from "./ProjectCard";
import { handleClickNav } from "../utils/handleClickNav";
import data from "../data.json";

const Projects = () => {
  return (
    <div className="bg-purple-400 w-full h-full min-h-screen" id="projects">
      <section className="h-full px-8 py-8">
        <div className="flex justify-between items-center py-4 px-6">
          <a onClick={handleClickNav("home")}>
            <span className="material-symbols-outlined text-3xl hover:text-pink-400">
              home
            </span>
          </a>
          <div className="text-white text-3xl md:text-6xl font-bold text-end">
            DevVentures
          </div>
        </div>
        <div className="grid grid-cols-12 gap-0 m-5">
          {data.projects.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              nameProject={project.name}
              description={project.description}
              link={project.link}
              github={project.github}
              techs={project.techs}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
