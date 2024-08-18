// WhatsAppFAB.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './WhatsAppFAB.css'; // Import the CSS file for styling

const WhatsAppFAB = () => {
  // Replace with your WhatsApp number and message
  const phoneNumber = '447304030963'; // Your phone number
  const message = 'Hello! I need assistance.'; // Default message

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fab"
    >
      <FontAwesomeIcon icon={faWhatsapp} />
    </a>
  );
};

export default WhatsAppFAB;
