import React from "react";
import { useLanguage } from '../context/LanguageContext.js';
import { styled } from "@mui/material/styles";

function NavBar() {

    const NavUl = styled('ul')({
        display: 'flex',
        margin: 0,
        padding: 0,
        listStyleType: 'none',
        flexDirection: 'row',
        alignItems: 'center',
        '@media screen and (max-width: 768px)': {
            flexDirection: 'column', // Cambiar a columna en pantallas pequeñas
            textAlign: 'center', // Centrar los elementos en pantallas pequeñas
        },
    });

    const NavLi = styled('li')({
        marginRight: 30,
        '@media screen and (max-width: 768px)': {
            flexDirection: 'column', // Cambiar a columna en pantallas pequeñas
            textAlign: 'center', // Centrar los elementos en pantallas pequeñas
        },
    });

    // Estilo para el componente de enlace
    const NavA = styled('a')(({ theme }) => ({
        color: theme.palette.text.primary, // Usar el color de texto del tema
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline', // Subrayar al pasar el mouse
        },
    }));

    const { texts } = useLanguage();

    return (
        <div>
            <NavUl>
                <NavLi><NavA href="#profile">{texts.navbar}</NavA></NavLi>
                <NavLi><NavA href="#skills">{texts.navbar1}</NavA></NavLi>
                <NavLi><NavA href="#projects">{texts.navbar2}</NavA></NavLi>
                <NavLi><NavA href="#otros">{texts.navbar3}</NavA></NavLi>
            </NavUl>
        </div>
    );
}

export default NavBar;