import React from "react";
import frontEnd from '../assets/img/front_end.png';
import backEnd from '../assets/img/back_end.png';
import basesDeDatos from '../assets/img/basesdedatos.png';
import sistemasOperativos from '../assets/img/SOs.png';
import mobileView from '../assets/img/mobile.png';
import extraTools from '../assets/img/otras_herramientas.png';
import { styled } from '@mui/material/styles';
import { useLanguage } from "../context/LanguageContext";

function SkillsSector()
{
  const { texts } = useLanguage();

    const SkillsContainer = styled('div')({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: '10px', // Ajusta según sea necesario
      });
    
      const SkillsList = styled('ul')({
        listStyle: 'none',
        padding: 0,
        margin: 0,
        textAlign: 'left',
        marginRight: '50px', // Ajusta según sea necesario
        '@media (max-width: 768px)': {
          marginRight: '0', // Reduce el margen en pantallas pequeñas
        },
      });
    
      const SkillsListItem = styled('li')({
        marginBottom: '5px', // Ajusta según sea necesario
        '@media (max-width: 768px)': {
          marginBottom: '10px', // Ajusta el margen inferior en pantallas pequeñas
        },
      });

      const Image = styled('img')({
        width: '70%',
        '@media (max-width: 768px)': {
          width: '100%', // Hace que la imagen ocupe todo el ancho en pantallas pequeñas
        },
      });

    return(
      <div id="skills">
        <SkillsContainer>
          <SkillsList>
            <SkillsListItem><b>Front End</b></SkillsListItem>
            <SkillsListItem><Image src={frontEnd} width='70%' alt='Front End Stack'></Image></SkillsListItem>
          </SkillsList>
          <SkillsList>
            <SkillsListItem><b>Back End</b></SkillsListItem>
            <SkillsListItem><Image src={backEnd} width='70%' alt='Back End Stack'></Image></SkillsListItem>
          </SkillsList>
          <SkillsList>
            <SkillsListItem><b>{texts.bbdd}</b></SkillsListItem>
            <SkillsListItem><Image src={basesDeDatos} width='70%' alt='Database stack'></Image></SkillsListItem>
          </SkillsList>
          <SkillsList>
            <SkillsListItem><b>{texts.os}</b></SkillsListItem>
            <SkillsListItem><Image src={sistemasOperativos} width='70%' alt='SO stack'></Image></SkillsListItem>
          </SkillsList>
          <SkillsList>
            <SkillsListItem><b>Mobile</b></SkillsListItem>
            <SkillsListItem><Image src={mobileView} width='70%' alt='Mobile Stack'></Image></SkillsListItem>
          </SkillsList>
          <SkillsList>
            <SkillsListItem><b>{texts.other_tools}</b></SkillsListItem>
            <SkillsListItem><Image src={extraTools} width='70%' alt='Extra tools'></Image></SkillsListItem>
          </SkillsList>
        </SkillsContainer>
      </div>
    );
}

export default SkillsSector;