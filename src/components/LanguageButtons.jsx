import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng);
  };

  return (
    <div>
      <button
        onClick={() => changeLanguage("en")}
        className={`px-2 mx-2 rounded-full text-xs font-bold ${
          selectedLanguage === "en"
            ? "bg-purple-600 text-white"
            : "bg-purple-300 text-white hover:bg-white hover:text-purple-600"
        }`}
      >
        En
      </button>
      <button
        onClick={() => changeLanguage("es")}
        className={`px-2 mx-2 rounded-full text-xs font-bold ${
          selectedLanguage === "es"
            ? "bg-purple-600 text-white"
            : "bg-purple-300 text-white hover:bg-white hover:text-purple-600"
        }`}
      >
        Es
      </button>
    </div>
  );
}

export default LanguageSwitcher;
