import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const WhatsAppIcon = () => {
  return (
    <div className="whatsapp-icon">
      <a
        href="https://api.whatsapp.com/send?phone=5565984330624"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
      </a>
    </div>
  );
};

export default WhatsAppIcon;
