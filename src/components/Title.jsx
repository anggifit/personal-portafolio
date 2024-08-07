import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import { useTranslation } from 'react-i18next';
import CustomButton from "./CustomButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Title = () => {
  const { t } = useTranslation();

  const [showCustomButton, setShowCustomButton] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setShowCustomButton(true);
      } else {
        setShowCustomButton(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="h-[850px] px-12 sm:px-24 flex items-center relative">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xxl:col-span-12">
          <div className="w-full flex flex-col">
            <h1 className="text-white my-2 sm:my-4">
              {t('name')} <br />
              {t('title3')}
              <span className="text-black">
                <Typewriter
                  options={{
                    strings: [`${t('title1')}`, `${t('title2')}`],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h1>
            <div className="place-self-start flex flex-row items-center flex-wrap gap-2 sm:gap-3">
              {showCustomButton && (
                <a
                  href="/CV QA Angelyn Bonaldy (es).pdf"
                  aria-label="Download CV"
                  download
                >
                  <CustomButton text={t('downloadButton')} />
                </a>
              )}
              <a
                href="https://github.com/anggifit"
                aria-label="Go to Angelyn's GitHub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl sm:text-4xl px-1 sm:px-2 text-purple-400 hover:text-purple-600 shadow-lg rounded-lg"
              >
                <FontAwesomeIcon icon={faSquareGithub} />
              </a>
              <a
                href="https://www.linkedin.com/in/angelynbonaldy"
                aria-label="Go to Angelyn's LinkedIn"
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
  );
};

export default Title;
