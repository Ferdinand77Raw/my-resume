import React from "react";
import { useLanguage } from "./LanguageContext.js";

const LanguageSelector = () => {
  const { setLanguage } = useLanguage();

  return (
    <div>
      <button onClick={() => setLanguage("es")}>Español</button>
      <button onClick={() => setLanguage("en")}>English</button>
    </div>
  );
};

export default LanguageSelector;