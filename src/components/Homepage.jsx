import React from "react";
import NavBar from "./NavBar";
import Title from "./Title";
import { handleClickNav } from "../utils/handleClickNav";

const Homepage = () => {
  return (
    <div
      className="h-screen bg-gradient-to-r from-violet-200 to-pink-200 w-full"
      id="home"
    >
      <NavBar />
      <Title />
      <div className="flex justify-center">
        <a onClick={handleClickNav('about-me')}>
          <span className="material-symbols-outlined text-5xl hover:text-pink-400 hidden sm:inline">
            keyboard_arrow_down
          </span>
        </a>
        </div>
    </div>
  );
};

export default Homepage;
