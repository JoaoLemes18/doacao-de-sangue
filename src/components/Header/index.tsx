import React from "react";
import logoImage from "../../assets/logo.png";
import "../../App.css";

function Header() {
  return (
    <header className="App-header">
      <div className="header-content">
        <img
          src={logoImage}
          alt="Logo da Doação de Sangue Cuiabá"
          className="logo"
        />
        <div className="header-text">
          <h1>Doação de Sangue</h1>
          <div className="sub">
            <p>Informações e esclarecimentos sobre doação de sangue.</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
