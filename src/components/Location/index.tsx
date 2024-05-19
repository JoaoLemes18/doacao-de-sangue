import React from "react";
import "../../App.css";
import { donationLocations } from "../../data";

function Location() {
  return (
    //deveria listar de um banco de dados,as info de hospitais que precisam de doação
    <section id="locais">
      <h2>Locais de Doação</h2>
      <div>
        {donationLocations.map((location, index) => (
          <div className="donation-location-info" key={index}>
            <img src={location.image} alt={location.name} />

            <div>
              <h3>{location.name}</h3>
              <p>
                <a
                  href={location.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {location.linkText}
                </a>
              </p>
              <h4>{location.description}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Location;
