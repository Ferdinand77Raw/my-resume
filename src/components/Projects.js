import React from "react";
import complement_img from '../assets/img/complemento_chrome.png';
import complement_img1 from '../assets/img/complemento_chrome1.png';
import crmplugin from '../assets/img/call_plugin.jpeg';
import calculator from '../assets/img/calculator.png';
import mobile_1 from '../assets/img/mobile_example_1.bmp';
import mobile_2 from '../assets/img/mobile_example_2.png';
import mobile_3 from '../assets/img/mobile_example_3.png';
import social_media from '../assets/img/social_media.png';
import room_chat from '../assets/img/RoomChat.png';

function Projects() {
  return (
    <div>
      <section id='desarrollos'>
        <h1>Desarrollos en Syncstark</h1>
      </section>

      <section>
        <a href="https://github.com/Ferdinand77Raw/Rooms" target="new">
          <img src={room_chat} alt="Miniatura chat" style={{width: '300px', borderRadius: '15px'}}/>
        </a>
        <p>Chat en tiempo real basado en el plugin de websocket de Ratchet</p>
      </section>
      <hr></hr>
      <section>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <a href='https://chromewebstore.google.com/detail/data-autofiller/jlaffmkhengmgkdgkpnnllkmhmjjinig' target='new' style={{ marginRight: '10px' }}>
            <img src={complement_img} alt="Miniatura del Sitio Web 1" style={{ maxWidth: '250px', borderRadius: '15px' }} />
          </a>
          <a href='https://github.com/Ferdinand77Raw/dataautofiller' target='new' style={{ marginRight: '10px' }}>
            <img src={complement_img1} alt="Miniatura del Sitio Web 2" style={{ maxWidth: '250px', borderRadius: '15px' }} />
          </a>
        </div>
        <p>Herramienta de autocompletado para formularios específicos</p>
      </section>
      <hr></hr>
      <section>
          <a href='https://github.com/Ferdinand77Raw/plugin-search-mycrm' target='new' style={{ marginLeft: '20px', marginRight: '20px' }}>
            <img src={crmplugin} alt='crm-plugin' style={{ maxWidth: '300px', borderRadius: '15px' }} />
          </a>
          <p>Herramienta para búsqueda inversa de personas a través del teléfono</p>
      <section>
      </section>
      <hr></hr>
      </section>
      <section>
          <a href='https://play.google.com/apps/internaltest/4700219812889066269' target='new' style={{ marginRight: '10px' }}>
            <img src={mobile_1} alt="Captura de la Aplicación Móvil 1" style={{ maxWidth: '200px' }} />
          </a>
          <img src={mobile_2} alt="Captura de la Aplicación Móvil 2" style={{ maxWidth: '200px', marginLeft: '10px' }} />
          <img src={mobile_3} alt="Captura de la aplicacion Movil 3" style={{ maxWidth: '200px', marginLeft: '10px' }} />
          <p>Aplicacion móvil tanto para Android como iOS para confirmar la visita de los técnicos por orden de trabajo</p>
      </section>
      
      <hr></hr>
      
      <section id='otros'>
        <h2>Otros desarrollos</h2>
      </section>
      <section>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <a href="https://presupuestoapk.firebaseapp.com/" target='new' style={{ marginRight: '20px' }}>
            <img src={calculator} alt='calculator' style={{ maxWidth: '300px' }} />
          </a>
          <a href='https://instagramfake-b88c9.web.app/' target='new' style={{ marginLeft: '20px' }}>
            <img src={social_media} alt='social_media' style={{ maxWidth: '300px' }} />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Projects;
