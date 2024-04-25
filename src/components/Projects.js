import React from "react";
import { styled } from "@mui/material/styles";
import room_chat from '../assets/img/RoomChat.png';
import complement_img from '../assets/img/complemento_chrome.png';
import complement_img1 from '../assets/img/complemento_chrome1.png';
import crmplugin from '../assets/img/call_plugin.jpeg';
import mobile_1 from '../assets/img/mobile_example_1.bmp';
import mobile_2 from '../assets/img/mobile_example_2.png';
import chat_room from '../assets/img/ChatRoom.png';
import chat_room2 from '../assets/img/ChatRoom2.png';
import metrics2 from '../assets/img/MetricsHub2.png';
import metrics3 from '../assets/img/MetricsHub3.png';
import calculator from '../assets/img/calculator.png';
import calculator2 from '../assets/img/calculadora2.png';
import social_media from '../assets/img/social_media.png';
import social_media2 from '../assets/img/ig_2.png'
import { useLanguage } from "../context/LanguageContext";


const ProjectContainer = styled('div')({
  marginTop: '10px',
  marginBottom: '10px', // Agregar margen entre cada proyecto
});


const Section = styled('section')({
  textAlign: 'center',
  marginBottom: '20px',
});

const Hr = styled('hr')({
  borderTop: '1px solid black',
  width: '80%',
  margin: '0 auto',
});

const ImageLink = styled('a')({
  maxWidth: '300px',
  marginRight: '10px',
  borderRadius: '15px',
});

const Image = styled('img')({
  maxWidth: '300px',
  borderRadius: '15px',
  '@media screen and (max-width: 768px)': {
    maxWidth: '200px',
    flexDirection: 'column',
    textAlign: 'center',
  },
});

const ImageContainer = styled('div')({
  display: 'flex',
  padding: 5,
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20px',
});

const Paragraph = styled('p')({
  marginBottom: '20px',
});

const Projects = () => {
  const { texts } = useLanguage();

  return (
    <div id="projects">
      <Section>
        <h1>{texts.project0}</h1>
      </Section>

      <ProjectContainer>
        <Section>
          <ImageLink href="https://github.com/Ferdinand77Raw/Rooms" target="new">
            <Image src={room_chat} alt="Miniatura chat" />
          </ImageLink>
          <Paragraph>{texts.project1}</Paragraph>
        </Section>
      </ProjectContainer>

      <Hr />

      <ProjectContainer>
        <Section>
          <ImageContainer>
            <ImageLink href='https://chromewebstore.google.com/detail/data-autofiller/jlaffmkhengmgkdgkpnnllkmhmjjinig' target='new'>
              <Image src={complement_img} alt="Miniatura del Sitio Web 1" />
            </ImageLink>
            <ImageLink href='https://github.com/Ferdinand77Raw/dataautofiller' target='new'>
              <Image src={complement_img1} alt="Miniatura del Sitio Web 2" />
            </ImageLink>
          </ImageContainer>
          <Paragraph>{texts.project2}</Paragraph>
        </Section>
      </ProjectContainer>

      <Hr />

      <ProjectContainer>

        <Section>
          <ImageLink href='https://github.com/Ferdinand77Raw/plugin-search-mycrm' target='new'>
            <Image src={crmplugin} alt='crm-plugin' />
          </ImageLink>
          <Paragraph>{texts.project3}</Paragraph>
        </Section>
      </ProjectContainer>

      <Hr />

      <ProjectContainer>
        <Section>
          <ImageContainer>
            <ImageLink href='https://play.google.com/apps/internaltest/4700219812889066269' target='new'>
              <Image src={mobile_1} alt="Captura de la Aplicación Móvil 1" />
            </ImageLink>
            <Image src={mobile_2} alt="Captura de la Aplicación Móvil 2" />
          </ImageContainer>
          <Paragraph>{texts.project4}</Paragraph>
        </Section>
      </ProjectContainer>

      <hr></hr>

      <div id="otros">

        <Section>
          <h1>{texts.oth_dev}</h1>
        </Section>

        <ProjectContainer>
          <Section>
            <ImageLink href="https://github.com/Ferdinand77Raw/chatroom" target="new">
              <Image src={chat_room} alt="Chat" />
            </ImageLink>
            <ImageLink href="https://github.com/Ferdinand77Raw/chatroom" target="new">
              <Image src={chat_room2} alt="Chat" />
            </ImageLink>
            <Paragraph>{texts.project5}</Paragraph>
          </Section>
        </ProjectContainer>

        <Hr />

        <ProjectContainer>
          <Section>
            <ImageLink href="https://github.com/Ferdinand77Raw/metricshub/tree/main" target="new">
              <Image src={metrics2} alt="Metrics Hub" />
            </ImageLink>
            <Image src={metrics3} alt="Metrics Hub" />
            <Paragraph>{texts.project6}</Paragraph>
          </Section>
        </ProjectContainer>

        <Hr />

        <ProjectContainer>
          <Section>
            <ImageLink href="https://presupuestoapk.firebaseapp.com/" target='new'>
              <Image src={calculator} alt='calculator' />
            </ImageLink>
            <ImageLink href="https://github.com/Ferdinand77Raw/presupuesto" target='new'>
              <Image src={calculator2} alt='calculator' />
            </ImageLink>
            <Paragraph>{texts.project7}</Paragraph>
          </Section>
        </ProjectContainer>

        <Hr />

        <ProjectContainer>
          <Section>
            <ImageLink href='https://instagramfake-b88c9.web.app/' target='new'>
              <Image src={social_media} alt='social_media' />
            </ImageLink>
            <ImageLink href='https://github.com/Ferdinand77Raw/instacloned-reactmade' target='new'>
              <Image src={social_media2} alt='social_media' />
            </ImageLink>
            <Paragraph>{texts.project8}</Paragraph>
          </Section>
        </ProjectContainer>
      </div>

    </div>
  );
};

export default Projects;
