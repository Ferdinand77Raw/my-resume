import React from "react";
import { css, styled } from '@mui/material/styles';
import emailIcon from '../assets/img/mail_icon.png';
import whatsappIcon from '../assets/img/wpp_icon.png';
import linkedinIcon from '../assets/img/linkedin_icon.png';

function FooterComponent() {
    const FooterBottom = styled('footer')({
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
            // Puedes cambiar el número de teléfono según tu preferencia
            contactInfo = 'https://wa.me/1133718933';
            break;
          case 'linkedin':
            contactInfo = 'https://www.linkedin.com/in/fernando-pavon-65467516a/';
            break;
          default:
            break;
        }
    
        window.location.href = contactInfo;
      }
    
      const ContactButtonsContainer = styled('div')({
        display: 'flex',
        gap: '10px', // Espacio entre los botones
        marginBottom: '10px'
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

    return (
        <div>
            <ContactButtonsContainer>
                <TransparentButton onClick={() => handleContactClick('email')}>
                    <img src={emailIcon} alt="Correo electrónico" style={{ width: '24px', height: '24px', marginRight: '5px' }} />
                </TransparentButton>
                {/* Botón de WhatsApp */}
                <TransparentButton onClick={() => handleContactClick('whatsapp')}>
                    <img src={whatsappIcon} alt="WhatsApp" style={{ width: '24px', height: '24px', marginRight: '5px' }} />
                </TransparentButton>
                {/* Botón de LinkedIn */}
                <TransparentButton onClick={() => handleContactClick('linkedin')}>
                    <img src={linkedinIcon} alt="LinkedIn" style={{ width: '24px', height: '24px', marginRight: '5px' }} />
                </TransparentButton>
            </ContactButtonsContainer>
            <FooterBottom>
                <p>© 2024 Fernando Gastón Pavón. Todos los derechos reservados.</p>
            </FooterBottom>
        </div>
    );
}

export default FooterComponent;