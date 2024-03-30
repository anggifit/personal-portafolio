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
            <h1 className="text-black text-3xl md:text-6xl font-bold">About Me</h1>
            <a onClick={handleClickNav("home")}>
              <span className="material-symbols-outlined text-3xl text-black hover:text-pink-400">
                home
              </span>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6 px-8 py-8 ml-6">
          <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-5 xxl:col-span-5 flex justify-center items-center text-center md:text-left">
            <div className="py-4 flex flex-col">
              <p className="text-md text-black leading-9">{data.aboutMe}</p>
              <br/>
              <p className="text-md text-black leading-9">{data.aboutMe2}</p>
              <br />
              <p className="text-md text-black leading-9">{data.aboutMe3}</p>
              <br />
              <p className="text-md text-black leading-9">{data.aboutMe4}</p>
              <br />
              <p className="text-md text-black leading-9">{data.aboutMe5}</p>
            </div>
          </div>
          <div className="col-span-10 sm:col-span-12 md:col-span-7 lg:col-span-7 xxl:col-span-7 flex justify-center">
            <img
              src={aboutMeImg}
              width={450}
              className="rounded-3xl object-cover mx-auto relative z-10 transform -rotate-3"
            />
          </div>
        </div>
        <SkillsDisplay />
      </section>
    </div>
  );
};

export default AboutMe;
