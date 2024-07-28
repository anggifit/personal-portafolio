import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import data from "../data.json";
import CustomButton from "./CustomButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Title = () => {
  const [showCustomButton, setShowCustomButton] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setShowCustomButton(true);
      } else {
        setShowCustomButton(false);
      }
    };
  
    // Ejecutar la función de manejo de cambio de tamaño al principio y suscribirse al evento de cambio de tamaño
    handleResize();
    window.addEventListener("resize", handleResize);
  
    // Limpiar el evento de cambio de tamaño al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  

  return (
    <div>
      <section className="h-[850px] px-12 sm:px-24 flex items-center relative">
        <div className="grid grid-cols-12 gap-6 ">
          <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xxl:col-span-12">
            <div className="w-full flex flex-col ">
              <h1 className="text-3xl sm:text-6xl lg:text-7xl xl:text-8xl text-white font-bold my-4 sm:my-8 leading-10">
                {data.name}
              </h1>
              <h1 className="text-white font-bold sm:my-8 leading-10 text-3xl sm:text-6xl lg:text-7xl xl:text-8xl">
                I'm
                <span className="text-black">
                  <Typewriter
                    options={{
                      strings: [`${data.title1}`, `${data.title2}`],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </h1>
              <div className="place-self-start flex flex-row items-center flex-wrap gap-2 sm:gap-3">
              {showCustomButton && (
                <a href="/CV QA Angelyn Bonaldy (es).pdf" download>
                  <CustomButton text="Download CV" />
                </a>
              )}
                <a
                  href="https://github.com/anggifit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl sm:text-4xl px-1 sm:px-2 text-purple-400 hover:text-purple-600 shadow-lg rounded-lg"
                >
                  <FontAwesomeIcon icon={faSquareGithub} />
                </a>
                <a
                  href="https://www.linkedin.com/in/angelynbonaldy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl sm:text-4xl px-1 sm:px-2  text-purple-400 hover:text-purple-600 shadow-lg rounded-lg"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Title;
