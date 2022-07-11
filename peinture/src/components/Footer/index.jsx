import React from "react";
import { NavLink } from "react-router-dom";

function footer() {
  return (
    <footer>
      <div className="Coordonnees-Details">
        <div class="Adresse-Email">
          <a href="mailto:mireille.rossignol56@orange.fr">
            <span>
              <i class="fas fa-envelope"></i>
            </span>
          </a>
          <span class="bold">Email</span>
        </div>
        <div className="Telephone">
          <span>
            <i className="fas fa-phone-alt"></i>
          </span>
          <span className="bold">Téléphone</span>
          <span>06-84-20-04-04</span>
        </div>
      </div>
      <div>
        {"\n"}
        <h3 className="Titre-Footer">Développeur Web : Ravot Cyril</h3>
      </div>
    </footer>
  );
}
export default footer;
