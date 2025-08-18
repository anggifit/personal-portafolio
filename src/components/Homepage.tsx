import NavBar from "./NavBar.js";
import Title from "./Title.js";
import { handleClickNav } from "../utils/handleClickNav.js";

const Homepage = () => {
  return (
    <div
      className="h-screen bg-gradient-to-r from-violet-200 to-pink-200 w-full"
      id="home"
    >
      <NavBar />
      <Title />
      <div className="flex justify-center">
        <a
          onClick={handleClickNav("about-me")}
          aria-label="Go to About Me section"
        >
          <span className="material-symbols-outlined text-5xl hover:text-pink-400 hidden sm:inline cursor-pointer">
            keyboard_arrow_down
          </span>
        </a>
      </div>
    </div>
  );
};

export default Homepage;
