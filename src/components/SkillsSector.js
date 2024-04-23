import React from "react";
import frontEnd from '../assets/img/front_end.png';
import frontEnd2 from '../assets/img/front_end2.png';
import backEnd from '../assets/img/back_end.png';
import basesDeDatos from '../assets/img/basesdedatos.png';
import sistemasOperativos from '../assets/img/SOs.png';
import mobileView from '../assets/img/mobile.png';
import extraTools from '../assets/img/otras_herramientas.png';
import { css, styled } from '@mui/material/styles';

function SkillsSector()
{
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
      });
    
      const SkillsListItem = styled('li')({
        marginBottom: '5px', // Ajusta según sea necesario
      });

    return(
      <div id="skills">
        <SkillsContainer>
          <SkillsList>
            <SkillsListItem><b>Front End</b></SkillsListItem>
            <SkillsListItem><img src={frontEnd} width='70%' alt='Front End Stack'></img></SkillsListItem>
          </SkillsList>
          <SkillsList>
            <SkillsListItem><b>Back End</b></SkillsListItem>
            <SkillsListItem><img src={backEnd} width='70%' alt='Back End Stack'></img></SkillsListItem>
          </SkillsList>
          <SkillsList>
            <SkillsListItem><b>Bases de Datos</b></SkillsListItem>
            <SkillsListItem><img src={basesDeDatos} width='70%' alt='Database stack'></img></SkillsListItem>
          </SkillsList>
          <SkillsList>
            <SkillsListItem><b>Sistemas Operativos</b></SkillsListItem>
            <SkillsListItem><img src={sistemasOperativos} width='70%' alt='SO stack'></img></SkillsListItem>
          </SkillsList>
          <SkillsList>
            <SkillsListItem><b>Mobile</b></SkillsListItem>
            <SkillsListItem><img src={mobileView} width='70%' alt='Mobile Stack'></img></SkillsListItem>
          </SkillsList>
          <SkillsList>
            <SkillsListItem><b>Otras herramientas</b></SkillsListItem>
            <SkillsListItem><img src={extraTools} width='70%' alt='Extra tools'></img></SkillsListItem>
          </SkillsList>
        </SkillsContainer>
      </div>
    );
}

export default SkillsSector;