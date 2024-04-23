import React from "react";
import complement_img from '../assets/img/complemento_chrome.png';
import complement_img1 from '../assets/img/complemento_chrome1.png';
import crmplugin from '../assets/img/call_plugin.jpeg';
import calculator from '../assets/img/calculator.png';
import calculator2 from '../assets/img/calculadora2.png';
import mobile_1 from '../assets/img/mobile_example_1.bmp';
import mobile_2 from '../assets/img/mobile_example_2.png';
import mobile_3 from '../assets/img/mobile_example_3.png';
import social_media from '../assets/img/social_media.png';
import room_chat from '../assets/img/RoomChat.png';
import chat_room from '../assets/img/ChatRoom.png';
import chat_room2 from '../assets/img/ChatRoom2.png';
import metrics from '../assets/img/MetricsHub.png';
import metrics2 from '../assets/img/MetricsHub2.png';
import metrics3 from '../assets/img/MetricsHub3.png';
import { useLanguage } from "../context/LanguageContext";

function Projects() {
  const { texts } = useLanguage();

  return (
    <div id="projects">
      <section id='desarrollos'>
        <h1>{texts.project0}</h1>
      </section>

      <section>
        <a href="https://github.com/Ferdinand77Raw/Rooms" target="new">
          <img src={room_chat} alt="Miniatura chat" style={{ width: '300px', borderRadius: '15px' }} />
        </a>
        <p>{texts.project1}</p>
      </section>

      <div style={{ width: '50%', margin: '0 auto' }}>
        <hr style={{ borderTop: '1px solid black' }} />
      </div>

      <section>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <a href='https://chromewebstore.google.com/detail/data-autofiller/jlaffmkhengmgkdgkpnnllkmhmjjinig' target='new' style={{ marginRight: '10px' }}>
            <img src={complement_img} alt="Miniatura del Sitio Web 1" style={{ maxWidth: '250px', borderRadius: '15px' }} />
          </a>
          <a href='https://github.com/Ferdinand77Raw/dataautofiller' target='new' style={{ marginRight: '10px' }}>
            <img src={complement_img1} alt="Miniatura del Sitio Web 2" style={{ maxWidth: '250px', borderRadius: '15px' }} />
          </a>
        </div>
        <p>{texts.project2}</p>
      </section>

      <div style={{ width: '50%', margin: '0 auto' }}>
        <hr style={{ borderTop: '1px solid black' }} />
      </div>

      <section>
        <a href='https://github.com/Ferdinand77Raw/plugin-search-mycrm' target='new' style={{ marginLeft: '20px', marginRight: '20px' }}>
          <img src={crmplugin} alt='crm-plugin' style={{ maxWidth: '300px', borderRadius: '15px' }} />
        </a>
        <p>{texts.project3}</p>
        <section>
        </section>

        <div style={{ width: '50%', margin: '0 auto' }}>
          <hr style={{ borderTop: '1px solid black' }} />
        </div>

      </section>
      <section>
        <a href='https://play.google.com/apps/internaltest/4700219812889066269' target='new' style={{ marginRight: '10px' }}>
          <img src={mobile_1} alt="Captura de la Aplicación Móvil 1" style={{ maxWidth: '200px' }} />
        </a>
        <img src={mobile_2} alt="Captura de la Aplicación Móvil 2" style={{ maxWidth: '200px', marginLeft: '10px' }} />
        <img src={mobile_3} alt="Captura de la aplicacion Movil 3" style={{ maxWidth: '200px', marginLeft: '10px' }} />
        <p>{texts.project4}</p>
      </section>

      <div style={{ width: '80%', margin: '0 auto' }}>
        <hr style={{ borderTop: '1px solid black' }} />
      </div>

      <div id="otros">

        <section id='otros'>
          <h2>{texts.oth_dev}</h2>
        </section>

        <section>
          <a href="https://github.com/Ferdinand77Raw/chatroom" target="new">
            <img src={chat_room} alt="Chat" style={{ maxWidth: 300, marginRight: 10, borderRadius: 15 }} />
          </a>
          <a href="https://github.com/Ferdinand77Raw/chatroom" target="new">
            <img src={chat_room2} alt="Chat" style={{ maxWidth: 300, marginLeft: 10, borderRadius: 15 }} />
          </a>
          <p>{texts.project5}</p>
        </section>

        <div style={{ width: '50%', margin: '0 auto' }}>
          <hr style={{ borderTop: '1px solid black' }} />
        </div>

        <section>
          <a href="https://github.com/Ferdinand77Raw/metricshub/tree/main" target="new">
            <img src={metrics} width={300} style={{ maxWidth: 350, marginRight: 10, borderRadius: 15 }} />
          </a>
          <a>
            <img src={metrics2} width={300} style={{ maxWidth: 350, marginLeft: 10, borderRadius: 15 }} />
          </a>
          <a>
            <img src={metrics3} width={300} style={{ maxWidth: 350, marginLeft: 10, borderRadius: 15 }} />
          </a>
          <p>{texts.project6}</p>
        </section>

        <div style={{ width: '50%', margin: '0 auto' }}>
          <hr style={{ borderTop: '1px solid black' }} />
        </div>

        <section>
          <a href="https://presupuestoapk.firebaseapp.com/" target='new' style={{ marginRight: '20px' }}>
            <img src={calculator} alt='calculator' style={{ maxWidth: '350px', borderRadius: 15 }} />
          </a>
          <a href="https://github.com/Ferdinand77Raw/presupuesto" target='new' style={{ marginRight: '20px' }}>
            <img src={calculator2} alt='calculator' style={{ maxWidth: '350px', borderRadius: 15 }} />
          </a>
          <p>{texts.project7}</p>
        </section>

        <div style={{ width: '50%', margin: '0 auto' }}>
          <hr style={{ borderTop: '1px solid black' }} />
        </div>

        <section>
          <a href='https://instagramfake-b88c9.web.app/' target='new' style={{ marginLeft: '20px' }}>
            <img src={social_media} alt='social_media' style={{ maxWidth: '350px', borderRadius: 15 }} />
          </a>
          <p>{texts.project8}</p>
        </section>
      </div>

    </div>
  );
}

export default Projects;
