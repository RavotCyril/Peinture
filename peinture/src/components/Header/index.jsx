/* Importations Bibliothèques React-router-dom  */
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";

function Header() {
  /* Permet de récupérer les données ( valeurs ) de l'utilisateur pendant son inscription ( Prénom - Email ... ) 
  avec la clef inscription du local Storage */

  let User = JSON.parse(localStorage.getItem("Inscription"));

  const navigate = useNavigate();

  function logOut() {
    localStorage.clear();
    navigate("/signup", { replace: true });
  }

  return (
    <header>
      <div className="container-fluid Menu m-0">
        <div className="row"></div>
        <h1 className="TitreH1-Toute-Page">
          Mireille Rossignol / Artiste Peintre
        </h1>
        <nav className="Navigation-Mobile" id="myTopnav">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#Visibilite"
            aria-controls="Visibilite"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div
            id="Visibilite"
            className="collapse navbar-collapse justify-content-end"
          ></div>
          <NavLink to="http://jpqlxdm.cluster030.hosting.ovh.net/Presentation">
            Présentation
          </NavLink>
          <NavLink to="http://jpqlxdm.cluster030.hosting.ovh.net/Mescreations">
            Mes Créations
          </NavLink>
          <NavLink to="http://jpqlxdm.cluster030.hosting.ovh.net/VosDesirs">
            Vos Désirs
          </NavLink>
          <NavLink to="http://jpqlxdm.cluster030.hosting.ovh.net/RevueDePresse">
            Revue De Presse
          </NavLink>
          <NavLink to="http://jpqlxdm.cluster030.hosting.ovh.net/Infos">
            Infos
          </NavLink>
        </nav>
        <nav className="Navigation-Desktop">
          <ul className="Balise-Presentation">
            <li className="Nav-List-Items">
              <NavLink to="http://jpqlxdm.cluster030.hosting.ovh.net/Presentation">
                Présentation
              </NavLink>
            </li>
            <li className="Nav-List-Items">
              <NavLink to="http://jpqlxdm.cluster030.hosting.ovh.net/Mescreations">
                Mes Créations
              </NavLink>
            </li>
            <li className="Nav-List-Items">
              <NavLink to="http://jpqlxdm.cluster030.hosting.ovh.net/VosDesirs">
                Vos Désirs
              </NavLink>
            </li>
            <li className="Nav-List-Items">
              <NavLink to="http://jpqlxdm.cluster030.hosting.ovh.net/RevueDePresse">
                Revue De Presse
              </NavLink>
            </li>
            <li className="Nav-List-Items">
              <NavLink to="http://jpqlxdm.cluster030.hosting.ovh.net/Infos">
                Infos
              </NavLink>
            </li>
            <li className="Nav-List-Items">
              <NavLink
                to="http://jpqlxdm.cluster030.hosting.ovh.net/Signup"
                className="navbar-brand"
              >
                Inscription
              </NavLink>
            </li>
            <li className="Nav-List-Items">
              <NavLink
                to="http://jpqlxdm.cluster030.hosting.ovh.net/Login"
                className="navbar-brand"
              >
                Connexion
              </NavLink>
            </li>
            {localStorage.getItem("Identification") != null ? (
              <li>
                <NavDropdown title={User && User.firstname}>
                  <NavDropdown.Item onClick={logOut}>
                    Se deconnecter
                  </NavDropdown.Item>
                </NavDropdown>
              </li>
            ) : null}
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
