import React, { createContext, useState, useContext } from "react";
import es from "../translations/es.json";
import en from "../translations/en.json";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("es");
  const languages = { en, es };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, texts: languages[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);