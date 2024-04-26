import React from "react";
import { styled } from '@mui/material/styles';
import emailIcon from '../assets/img/mail_icon.png';
import whatsappIcon from '../assets/img/wpp_icon.png';
import linkedinIcon from '../assets/img/linkedin_icon.png';
import gitHub from '../assets/img/GitHub_logo.png';
import { useLanguage } from "../context/LanguageContext";

function FooterComponent() {
  const { texts, language } = useLanguage(); // Obtener el idioma del contexto

  const FooterBottom = styled('footer')({
    display: 'flex',
    flexDirection: 'row',
    marginTop: '20px', // Espacio entre el contenido y el pie de página
    padding: '10px',
    backgroundColor: '#333', // Puedes ajustar el color de fondo según tus preferencias
    color: '#fff', // Puedes ajustar el color del texto según tus preferencias
    textAlign: 'center',
  });

  const handleContactClick = (contactType) => {
    let contactInfo = '';
    switch (contactType) {
      case 'email':
        contactInfo = 'mailto:ferdev994@gmail.com?subject=Contacto desde tu portafolio';
        break;
      case 'whatsapp':
        contactInfo = 'https://wa.me/1133718933';
        break;
      case 'linkedin':
        contactInfo = 'https://www.linkedin.com/in/fernando-pavon-65467516a/';
        break;
      case 'github':
        contactInfo = 'https://github.com/Ferdinand77Raw';
        break;
      default:
        break;
    }
    window.location.href = contactInfo;
  }

  const ContactButtonsContainer = styled('div')({
    display: 'flex',
    flexDirection: 'row', // Cambia a una columna en pantallas pequeñas
    gap: '10px', // Espacio entre los botones
    marginBottom: '10px',
    textAlign: 'center',
  });

  const TransparentButton = styled('button')({
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'center',
    alignItems: 'center',
    color: '#fff', // Puedes ajustar el color del texto según tus preferencias
    fontSize: '14px', // Ajusta según sea necesario
    marginBottom: '10px', // Ajusta según sea necesario
    '&:hover': {
      opacity: 0.7, // Opacidad al pasar el ratón sobre el botón
    },
  });

  const Image = styled('img')({
    maxWidth: '30px',
    borderRadius: '15px',
    '@media screen and (max-width: 768px)': {
      maxWidth: '20px', // Ajusta el tamaño de los íconos para pantallas más pequeñas
      marginBottom: '5px' // Ajusta el espacio entre los íconos para pantallas más pequeñas
    },
  });

      // Estilo para el componente de enlace
  const Anchorage = styled('a')(({ theme }) => ({
        color: theme.palette.text.primary, // Usar el color de texto del tema
        backgroundColor: '#ffff',
        borderRadius: '15px',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline', // Subrayar al pasar el mouse
        },
    }));

  const cvPath = language === 'es' ? '../assets/cv/FernandoPavonCV2024_Esp.pdf' : '../assets/cv/FernandoPavonCV2024_Eng.pdf';

  return (
    <div>
      <ContactButtonsContainer>
        <TransparentButton onClick={() => handleContactClick('email')}>
          <Image src={emailIcon} alt="Correo electrónico" />
        </TransparentButton>
        <TransparentButton onClick={() => handleContactClick('whatsapp')}>
          <Image src={whatsappIcon} alt="WhatsApp" />
        </TransparentButton>
        <TransparentButton onClick={() => handleContactClick('linkedin')}>
          <Image src={linkedinIcon} alt="LinkedIn" />
        </TransparentButton>
        <TransparentButton onClick={() => handleContactClick('github')}>
          <Image src={gitHub} alt="github" />
        </TransparentButton>
      </ContactButtonsContainer>
         
      <Anchorage href={cvPath} download>
        {language === 'es' ? 'Descargar CV' : 'Download CV'}
      </Anchorage>

      <FooterBottom>
        <p>{texts.footer}</p>
      </FooterBottom>
    </div>
  );
}

export default FooterComponent;
