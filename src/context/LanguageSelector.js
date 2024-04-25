import React from "react";
import { useLanguage } from "./LanguageContext.js";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { styled } from '@mui/material/styles';

const Button = styled('button')({
  marginRight: '5px',
  marginLeft: '5px',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
});

const LanguageSelector = () => {
  const { setLanguage } = useLanguage();

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '15px' }}>
      <Button onClick={() => setLanguage("es")}>
        <span className="fi fi-es"></span>
      </Button>
      <Button onClick={() => setLanguage("en")}>
        <span className="fi fi-gb"></span>
      </Button>
    </div>
  );
};

export default LanguageSelector;
