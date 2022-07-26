/* Importations Bibliothèques React-router-dom  */
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import axios from "axios";

// /* Importations des pages de styles + images */
/* Styles CSS  Profil ( Prénom plus inscription - deconnection ) + Fermeture Article Admin  */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Header() {
  /* Permet de récupérer les données ( valeurs ) de l'utilisateur pendant son inscription ( Prénom - Email ... ) 
  avec la clef inscription du local Storage */

  const [user, setUser] = useState([]);

  var user_id = JSON.parse(localStorage.getItem("user_id"));

  var configData = {
    headers: {
      Authorization:
        "bearer " + JSON.parse(localStorage.getItem("Identification")),
    },
  };
  /* Permet de récupérer les données ( valeurs ) de l'utilisateur pendant son inscription ( Prénom - Email ... ) 
  avec la base de données */
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3000/api/user/" + user_id,
    })
      .then((user) => {
        setUser(user.data);
      })
      .catch((err) => {
        if (err.response.status === 400) {
          console.log("Tout les champs n'ont pas été correctement remplis");
        } else if (err.response.status === 500) {
          console.log("erreur serveur");
        }
      });
  }, [user_id]);

  /* Se désinscrire et supprimé son compte utilisateur et toutes les données ( Email, Prénom, LocalStorage Token + userId) */

  function toUnsubscribe() {
    axios
      .delete("http://localhost:3000/api/user/" + user_id, configData)
      .then((user) => {
        console.log(user);
        localStorage.clear();
        window.location.href = "http://localhost:3001/Signup";
      })
      .catch((err) => {
        if (err.response.status === 400) {
          console.log("Tout les champs n'ont pas été correctement remplis");
        } else if (err.response.status === 500) {
          console.log("erreur serveur");
        }
      });
  }

  /* Permet de vider le localStorage( Token ) et de se deconnecter de l'application.
    Permet aussi de se rediriger sur la page Connexion ( Login) */

  const navigate = useNavigate();

  function logOut() {
    localStorage.clear();
    navigate("/Login", { replace: true });
  }
  return (
    <header id="deconnexion">
      <div className="container-fluid Menu m-0">
        <div className="row">
          <h1 className="TitreH1-Toute-Page">
            Mireille Rossignol / Artiste Peintre
          </h1>
          <nav className="Navigation-Desktop navbar navbar-expand-md navbar-dark">
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
            <div id="Visibilite" className="collapse navbar-collapse">
              <ul className="Balise-Presentation">
                {localStorage.getItem("Identification") === null ? (
                  <>
                    <li className="Nav-List-Items">
                      <NavLink to="/https://www.rossignol-peinture.fr/">
                        Présentation
                      </NavLink>
                    </li>
                    <li className="Nav-List-Items">
                      <NavLink to="/https://www.rossignol-peinture.fr/Mescreations">
                        Mes Créations
                      </NavLink>
                    </li>
                    <li className="Nav-List-Items">
                      <NavLink to="/https://www.rossignol-peinture.fr/VosDesirs">
                        Vos Désirs
                      </NavLink>
                    </li>
                    <li className="Nav-List-Items">
                      <NavLink to="/https://www.rossignol-peinture.fr/RevueDePresse">
                        Revue De Presse
                      </NavLink>
                    </li>
                    <li className="Nav-List-Items">
                      <NavLink to="/https://www.rossignol-peinture.fr/Infos">
                        Infos
                      </NavLink>
                    </li>
                    <li className="Nav-List-Items">
                      <NavLink to="/https://www.rossignol-peinture.fr/Signup">
                        Inscription
                      </NavLink>
                    </li>
                    <li className="Nav-List-Items">
                      <NavLink to="/https://www.rossignol-peinture.fr/Login">
                        Connexion
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="Nav-List-Items">
                      <NavLink to="/https://www.rossignol-peinture.fr">
                        Présentation
                      </NavLink>
                    </li>
                    <li className="Nav-List-Items">
                      <NavLink to="/https://www.rossignol-peinture.fr/Mescreations">
                        Mes Créations
                      </NavLink>
                    </li>
                    <li className="Nav-List-Items">
                      <NavLink to="/https://www.rossignol-peinture.fr/VosDesirs">
                        Vos Désirs
                      </NavLink>
                    </li>
                    <li className="Nav-List-Items">
                      <NavLink to="/https://www.rossignol-peinture.fr/RevueDePresse">
                        Revue De Presse
                      </NavLink>
                    </li>
                    <li className="Nav-List-Items">
                      <NavLink to="/https://www.rossignol-peinture.fr/Infos">
                        Infos
                      </NavLink>
                    </li>
                    {localStorage.getItem("Identification") != null ? (
                      <div className="Profil">
                        <p className="Message-Bienvenue">
                          Bienvenue {"\u00A0"} {user && user.firstname}
                        </p>
                        <div className="Icon-User">
                          <div>
                            <FontAwesomeIcon icon={faUser} />
                          </div>
                          <div className="Profil">
                            <NavDropdown title="Mon Profil">
                              <NavDropdown.Item>Mes favoris</NavDropdown.Item>
                              <NavDropdown.Item>Mon panier</NavDropdown.Item>
                              <NavDropdown.Item onClick={logOut}>
                                Déconnexion
                              </NavDropdown.Item>
                              <NavDropdown.Item onClick={toUnsubscribe}>
                                Supprimer mon compte
                              </NavDropdown.Item>
                            </NavDropdown>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </>
                )}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
export default Header;
