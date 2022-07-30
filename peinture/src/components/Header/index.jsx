/* Importations Bibliothèques React-router-dom  */
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import axios from "axios";
import { ReactComponent as ClockIcon } from "../icons/clock.svg";
import { ReactComponent as CalenderIcon } from "../icons/calendar.svg";

// /* Importations des pages de styles + images */
/* Styles CSS  Profil ( Prénom plus inscription - deconnection ) + Fermeture Article Admin  */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../../utils/hooks";
import styled from "styled-components";
import colors from "../../utils/style/colors";

const NightModeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${colors.dark};
  padding-top: 30px;
`;
function Header() {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1);
  }, []);

  /* Permet de créer un effet icone ( soleil - nuit pour l'effet couleur - Noir / Blanc ) */
  const { toggleTheme, theme } = useTheme();

  /* Permet de récupérer les données ( valeurs ) de l'utilisateur pendant son inscription ( Prénom - Email ... ) 
  avec la clef inscription du local Storage + créeation du panier */

  const [user, setUser] = useState([]);
  const savedBasket = localStorage.getItem("basket");
  const [basket, updateBasket] = useState(
    savedBasket ? JSON.parse(savedBasket) : []
  );

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);
  var user_id = JSON.parse(localStorage.getItem("user_id"));

  var configData = {
    headers: {
      Authorization:
        "bearer " + JSON.parse(localStorage.getItem("Identification")),
    },
  };
  const handleClickBouttonNavigation = (event) => {
    //  bascule l'état isActive au clic sur les natures mortes
    setIsActiveNatureMorte((current) => !current);
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
          <nav className="Navigation-Desktop navbar navbar-dark">
            <button
              className="ButtonNavigation navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#Visibilite"
              aria-controls="Visibilite"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon "></span>
            </button>
            <h1 className="TitreH1-Toute-Page">
              Mireille Rossignol / Artiste Peintre
            </h1>
            <div id="Visibilite" className="collapse navbar-collapse">
              <div className="DivButtonDate col-12 col-sm-12">
                <div>
                  <NightModeButton
                    id="NightModeButton"
                    onClick={() => toggleTheme()}
                  >
                    Peinture en Couleur ou effet Noir/ Blanc :
                    {theme === "light" ? "☀️" : "🌙"}
                  </NightModeButton>
                </div>
                <div className="Article-date" type="text" name="date">
                  <CalenderIcon
                    className="IconCalenderClock"
                    type="text"
                    name="date"
                  />
                  <p>
                    {dateState.toLocaleDateString("fr-FR", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                  <ClockIcon className="IconCalenderClock" />
                  <p>
                    {dateState.toLocaleString("fr-FR", {
                      hour: "numeric",
                      minute: "numeric",
                      second: "numeric",
                    })}
                  </p>
                </div>
              </div>
              <ul className="Balise-Presentation">
                {localStorage.getItem("Identification") === null ? (
                  <>
                    <li className="Nav-List-Items">
                      <NavLink to="/">Présentation</NavLink>
                    </li>
                    <li className="Nav-List-Items">
                      <NavLink to="/Mescreations">Mes Créations</NavLink>
                    </li>
                    <li className="Nav-List-Items">
                      <NavLink to="/VosDesirs">Vos Désirs</NavLink>
                    </li>
                    <li className="Nav-List-Items">
                      <NavLink to="/RevueDePresse">Revue De Presse</NavLink>
                    </li>
                    <li className="Nav-List-Items">
                      <NavLink to="/Infos">Infos</NavLink>
                    </li>
                    <li className="Nav-List-Items">
                      <NavLink to="/Signup">Inscription</NavLink>
                    </li>
                    <li className="Nav-List-Items">
                      <NavLink to="/Login">Connexion</NavLink>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="Nav-List-Items">
                      <NavLink to="">Présentation</NavLink>
                    </li>
                    <li className="Nav-List-Items">
                      <NavLink to="/Mescreations">Mes Créations</NavLink>
                    </li>
                    <li className="Nav-List-Items">
                      <NavLink to="/VosDesirs">Vos Désirs</NavLink>
                    </li>
                    <li className="Nav-List-Items">
                      <NavLink to="/RevueDePresse">Revue De Presse</NavLink>
                    </li>
                    <li className="Nav-List-Items">
                      <NavLink to="/Infos">Infos</NavLink>
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
                              <NavDropdown.Item>Panier</NavDropdown.Item>
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
