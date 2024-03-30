import React from "react";
import { skillsImage } from "../utils/skillsImage";

const ProjectCard = ({
  image,
  nameProject,
  description,
  link,
  github,
  techs,
}) => {
  return (
    <div className="rounded-3xl col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xxl:col-span-6 bg-purple-400 hover:bg-slate-600 h-full px-16 py-6 flex items-center">
      <div className="w-1/2">
        <img
          src={image}
          className="w-full h-auto object-contain"
          alt="Project Image"
        />
      </div>
      <div className="ml-6 w-1/2">
        <h2 className="text-white font-semibold text-2xl mb-4">
          {nameProject}
        </h2>
        <p className="text-white mb-4">{description}</p>
        <div className="flex py-5 items-start">
          {techs
            ? techs.map((tech, index) => (
                <img
                  key={index}
                  src={skillsImage(tech.name)}
                  alt={tech.name}
                  className="h-6 mr-2"
                />
              ))
            : null}
        </div>
        <div className="flex">
          <a href={link} target="_blank">
            <button className="bg-pink-400 text-white font-bold py-2 px-4 mx-4 rounded-lg hover:bg-white hover:text-pink-600 text-sm shadow-xl">
              Demo
            </button>
          </a>
          <a href={github} target="_blank">
            <button className="bg-pink-400 text-white font-bold py-2 px-4 rounded-lg hover:bg-white hover:text-pink-600 text-sm shadow-xl">
              Go to GitHub
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
