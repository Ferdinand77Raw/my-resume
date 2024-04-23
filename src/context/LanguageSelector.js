import React from "react";
import { useLanguage } from "./LanguageContext.js";

const LanguageSelector = () => {
  const { setLanguage } = useLanguage();

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 15 }}>
      <button onClick={() => setLanguage("es")} style={{ marginRight: 5}}>
        Español
      </button>
      <button onClick={() => setLanguage("en")} style={{ marginLeft: 5}}>
        English
      </button>
    </div>
  );
};

export default LanguageSelector;
