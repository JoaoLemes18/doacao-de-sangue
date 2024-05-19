import React from "react";
import "../../App.css";
import hemocentroImage from "../../assets/hemocentro.jpg";

function Location() {
  return (
    //deveria listar de um banco de dados,as info de hospitais que precisam de doação
    <section>
      <h2>Locais de Doação</h2>
      <ul className="donation-locations-list">
        <li>
          <div className="donation-location-info">
            <img src={hemocentroImage} alt="Hemocentro de Cuiabá" />

            <div>
              <h3>Hemocentro de Cuiabá</h3>
              <p>
                <a
                  href="https://mthemocentro.saude.mt.gov.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agende aqui a sua doação!
                </a>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Location;
