import React from "react";
import complement_img from '../assets/img/complemento_chrome.png';
import complement_img1 from '../assets/img/complemento_chrome1.png';
import crmplugin from '../assets/img/call_plugin.jpeg';
import calculator from '../assets/img/calculator.png';
import mobile_1 from '../assets/img/mobile_example_1.bmp';
import mobile_2 from '../assets/img/mobile_example_2.png';
import social_media from '../assets/img/social_media.png';

function Projects(){
    return(
    <div>
    <section id='desarrollos'>
          <h1>Desarrollos en Syncstark</h1>
        </section>
        <section>         
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <a href='https://chromewebstore.google.com/detail/data-autofiller/jlaffmkhengmgkdgkpnnllkmhmjjinig' target='new'>
              <img src={complement_img} alt="Miniatura del Sitio Web 1" style={{ maxWidth: '200px' }} />
            </a>
            <a href='https://github.com/Ferdinand77Raw/dataautofiller' target='new'>
              <img src={complement_img1} alt="Miniatura del Sitio Web 2" style={{ maxWidth: '200px' }} ></img>
            </a>
            <p>Data Autoffiler</p>
          <a href='https://github.com/Ferdinand77Raw/plugin-search-mycrm' target='new'>
            <img src={crmplugin} alt='crm-plugin' style={{ maxWidth: '300px' }}></img>
          </a>
            <a href='https://play.google.com/apps/internaltest/4700219812889066269' target='new'>
              <img src={mobile_1} alt="Captura de la Aplicación Móvil 1" style={{ maxWidth: '200px' }} />
            </a>
            <img src={mobile_2} alt="Captura de la Aplicación Móvil 2" style={{ maxWidth: '200px' }} />
          </div>
        </section>
        <hr></hr>
        <section id='otros'>
          <h2>Otros desarrollos</h2>
        </section>
        <section>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <a href="https://presupuestoapk.firebaseapp.com/" target='new'>
              <img src={calculator} alt='calculator' style={{ maxWidth: '300px' }}></img>
            </a>
            <a href='https://instagramfake-b88c9.web.app/' target='new'>
              <img src={social_media} alt='social_media' style={{ maxWidth: '300px' }}></img>
            </a>
          </div>
        </section>
    </div>
    );
}

export default Projects;