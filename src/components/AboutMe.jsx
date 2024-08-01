import React from "react";
import data from "../data.json";
import SkillsDisplay from "./SkillsDisplay";
import { handleClickNav } from "../utils/handleClickNav";
import aboutMeImg from "/homepageAnggi.webp";

const AboutMe = () => {
  return (
    <div id="about-me" className="h-full">
      <section className="min-h-screen bg-gradient-to-b from-fuchsia-50 to-pink-200">
        <div className="relative px-8 py-8">
          <div className="flex justify-between items-center py-4 px-6">
            <h2 className="text-black">About Me</h2>
            <a onClick={handleClickNav("home")} aria-label="Go to home section">
              <span className="cursor-pointer material-symbols-outlined text-3xl text-black hover:text-pink-400">
                home
              </span>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6 px-8 py-8 ml-6">
          <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-5 xxl:col-span-5 flex justify-center items-center text-center md:text-left">
            <div className="py-4 flex flex-col text-black leading-9">
              <p>{data.aboutMe}</p>
              <br />
              <p>{data.aboutMe2}</p>
              <br />
              <p>{data.aboutMe3}</p>
              <br />
              <p>{data.aboutMe4}</p>
              <br />
              <p>{data.aboutMe5}</p>
            </div>
          </div>
          <div className="col-span-10 sm:col-span-12 md:col-span-7 lg:col-span-7 xxl:col-span-7 flex justify-center">
            <img
              src={aboutMeImg}
              width={450}
              className="rounded-3xl object-cover mx-auto relative z-10 transform -rotate-3"
              alt='Foto de Angelyn Bonaldy'
            />
          </div>
        </div>
        <SkillsDisplay />
      </section>
    </div>
  );
};

export default AboutMe;
