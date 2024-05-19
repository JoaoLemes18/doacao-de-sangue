import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const WhatsAppIcon = () => {
  return (
    <div className="whatsapp-icon">
      <a
        href="https://api.whatsapp.com/send?phone=5565984330624&text=Ol%C3%A1%20MT-HEMOCENTRO%2C%20visitei%20o%20app%20para%20agendamento%20de%20doa%C3%A7%C3%B5es%20de%20sangue%20e%20gostaria%20de%20..."
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
      </a>
    </div>
  );
};

export default WhatsAppIcon;
