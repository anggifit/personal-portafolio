import React from "react";
import { useTranslation } from 'react-i18next';
import ProjectCard from "./ProjectCard";
import { handleClickNav } from "../utils/handleClickNav";

const Projects = () => {
  const { t } = useTranslation();
  const projects = t('projects', { returnObjects: true });

  return (
    <div className="bg-purple-400 w-full h-full min-h-screen" id="projects">
      <section className="h-full px-8 py-8">
        <div className="flex justify-between items-center py-4 px-6">
          <a onClick={handleClickNav("home")} aria-label="Go to home section">
            <span className="cursor-pointer material-symbols-outlined text-3xl hover:text-pink-400">
              home
            </span>
          </a>
          <h2 className="text-white text-end">
            {t('projectsSection')}
          </h2>
        </div>
        <div className="grid grid-cols-12 gap-0 m-5">
          {projects.map((project) => (
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
