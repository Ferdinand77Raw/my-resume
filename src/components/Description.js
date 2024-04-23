import React from "react";
import { useLanguage } from "../context/LanguageContext";

function Description(){
    const { texts } = useLanguage();

    return(
        <div>
            <h1>Fernando Gastón Pavón</h1>
            <h2>{texts.position}</h2>
            <h4>
                {texts.description}
            </h4>
            <h2>{texts.skills}</h2>
        </div>
    )
}
export default Description;