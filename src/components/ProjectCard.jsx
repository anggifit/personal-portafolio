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
    <div className="rounded-3xl col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xxl:col-span-6 bg-purple-400 hover:bg-slate-600 h-full px-8 sm:px-16 py-6 flex flex-col sm:flex-row items-center">
      <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
        <img
          src={image}
          className="w-full h-auto object-contain"
          alt="Project Image"
          loading="lazy"
        />
      </div>
      <div className="w-full sm:w-1/2 sm:ml-6 ">
        <h2 className="text-white font-semibold text-center md:text-left text-xl sm:text-2xl mb-2 sm:mb-4">
          {nameProject}
        </h2>
        <p className="text-white text-center md:text-left mb-4">{description}</p>
        <div className="flex flex-wrap items-center mb-4">
          {techs &&
            techs.map((tech, index) => (
              <img
                key={index}
                src={skillsImage(tech.name)}
                alt={tech.name}
                className="h-6 mr-2 mb-2"
              />
            ))}
        </div>
        <div className="flex justify-center sm:justify-start">
          {/* <a href={link} target="_blank" rel="noopener noreferrer">
            <button className="bg-pink-400 text-white font-bold py-2 px-4 rounded-lg hover:bg-white hover:text-pink-600 text-sm shadow-xl mb-2 sm:mb-0 mr-2">
              Demo
            </button>
          </a> */}
          <a href={github} target="_blank" rel="noopener noreferrer">
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
