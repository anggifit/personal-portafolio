import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { handleClickNav } from "../utils/handleClickNav";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col bg-black">
        <div className="flex mt-6 mb-6 flex-row justify-around font-semibold text-lg">
          <a
            onClick={handleClickNav("home")}
            className="inline md:block cursor-pointer text-gray-600 hover:text-white"
          >
            Home
          </a>
          <a
            onClick={handleClickNav("about-me")}
            className="hidden md:block cursor-pointer text-gray-600 hover:text-white"
          >
            About Me
          </a>
          <a
            onClick={handleClickNav("projects")}
            className="hidden md:block cursor-pointer text-gray-600 hover:text-white"
          >
            DevVentures
          </a>
          <a
            onClick={handleClickNav("contact")}
            className="hidden md:block cursor-pointer text-gray-600 hover:text-white"
          >
            Get in Touch
          </a>{" "}
          <div className="flex flex-row space-x-8 items-center justify-between">
            <a
              href="https://github.com/anggifit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-md px-1 sm:px-2 text-gray-600"
            >
              <FontAwesomeIcon icon={faSquareGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/angelynbonaldy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-md px-1 sm:px-2 text-gray-600"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
        <hr className="border-gray-600" />
        <p className="w-full text-center my-8 text-gray-600">
          Copyright © 2024 Created with love by anggifit
        </p>
      </div>
    </div>
  );
};

export default Footer;
