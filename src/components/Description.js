import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { styled } from "@mui/material/styles";

function Description(){
    const H1Component = styled('h1')({
        '@media screen and (max-width: 768px)': {
            flexDirection: 'column', // Cambiar a columna en pantallas pequeñas
            textAlign: 'center', // Centrar los elementos en pantallas pequeñas
            fontSize: '3em',
        },
    });

    const H2Component = styled('h2')({
        '@media screen and (max-width: 768px)': {
            flexDirection: 'column', // Cambiar a columna en pantallas pequeñas
            textAlign: 'center', // Centrar los elementos en pantallas pequeñas
            fontSize: '2em',
        },
    });

    const H4Component = styled('h4')({
        '@media screen and (max-width: 768px)': {
            flexDirection: 'column', // Cambiar a columna en pantallas pequeñas
            textAlign: 'center', // Centrar los elementos en pantallas pequeñas
            fontSize: '1.5em',
        },
    });

    const { texts } = useLanguage();

    return(
        <div>
            <H1Component>Fernando Gastón Pavón</H1Component>
            <H2Component>{texts.position}</H2Component>
            <H4Component>
                {texts.description}
            </H4Component>
            <H2Component>{texts.skills}</H2Component>
        </div>
    )
}
export default Description;