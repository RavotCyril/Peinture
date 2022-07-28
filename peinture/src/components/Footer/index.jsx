import React from "react";

function footer() {
  return (
    <footer>
      <div className="Coordonnees-Details">
        <div className="Adresse-Email">
          <a href="mailto:mireille.rossignol56@orange.fr">
            <span>
              <i className="fas fa-envelope"></i>
            </span>
          </a>
          <span className="bold">Email</span>
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
        <h3 className="Titre-Footer">Développeur Web : CYRIL RAVOT</h3>
      </div>
    </footer>
  );
}
export default footer;
