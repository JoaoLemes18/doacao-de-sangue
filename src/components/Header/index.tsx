import React from "react";
import "../../App.css";

const Header: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="App-header">
      <div className="header-content">
        <nav className="nav-links">
          <button
            className="nav-link"
            onClick={() => scrollToSection("locais")}
          >
            Locais de Doação
          </button>
          <button
            className="nav-link"
            onClick={() => scrollToSection("como-doar")}
          >
            Como Doar
          </button>
          <button className="nav-link" onClick={() => scrollToSection("who")}>
            Requisitos
          </button>
          <button
            className="nav-link"
            onClick={() => scrollToSection("condicoes")}
          >
            Condições
          </button>
          <button className="nav-link" onClick={() => scrollToSection("faq")}>
            FAQ
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
