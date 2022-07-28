/* Importations Bibliothèques React-router-dom  */
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import axios from "axios";

// /* Importations des pages de styles + images */
/* Styles CSS  Profil ( Prénom plus inscription - deconnection ) + Fermeture Article Admin  */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../../utils/hooks";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import GifMireilleRossignol from "../../images/Animations/Vanilla-1s-1920px.png";
import OrangesEtDentelle from "../../images/Sans-Bordure/SansBordure-Grande-Oranges-Et-Dentelle.jpg";
import GrandeAiguiere from "../../images/Sans-Bordure/SansBordure-Grande-Aiguiere.jpg";
import SouvenirsMarins from "../../images/Sans-Bordure/SansBordure-Grande-Image-Souvenirs-Marins.jpg";
import CerisesEtFraises from "../../images/Sans-Bordure/SansBordure-Grande-Cerises-Et-Fraises.jpg";
import UnPetitNoir from "../../images/Sans-Bordure/SansBordure-Grande-Un-ptit-noir.jpg";
import LeTempsDesLumieres from "../../images/Sans-Bordure/SansBordure-Grande-Le-Temps-Des-Lumieres-Desir-Grande.jpg";
import UnPetitCreux from "../../images/Sans-Bordure/SansBordure-Grande-Un-Petit-Creux.jpg";
import GrandeCristaux from "../../images/Sans-Bordure/SansBordure-Grande-Cristaux.jpg";
import CuivreEtRaisinDesir from "../../images/Sans-Bordure/SansBordure-Grande-Cuivre-Et-Raisin-Desir.jpg";
import GrandeFruitsDautomne from "../../images/Sans-Bordure/SansBordure-Grande-Fruits-Dautomne.jpg";
import Chien from "../../images/Grande-Images/Chien.webp";
import Cheval from "../../images/Grande-Images/Cheval.webp";
import Iris from "../../images/Grande-Images/Iris.webp";
import Nocturne from "../../images/TableauxVendu/1999/Nocturne.jpg";
import TeckelSurVelours from "../../images/Sans-Bordure/SansBordure-Grande-Jeune-Teckel-Sur-Velours.jpg";
import BebeYorkshireSurVelours from "../../images/Sans-Bordure/SansBordure-Grande-Yorkshire-Sur-Velours.jpg";
import CanicheAbricotSurVelours from "../../images/Sans-Bordure/SansBordure-Grande-Caniche-Abricot-Sur-Velours.jpg";
import CanicheBlancSurVelours from "../../images/Grande-Images/Grande-Caniche-Blanc-Sur-Velours.webp";
import CanicheGrisSurVelours from "../../images/Sans-Bordure/SansBordure-Grande-Caniche-Gris-Sur-Velours.jpg";
import GrandeChouetteSurVelours from "../../images/Sans-Bordure/SansBordure-Grande-Chouette-Sur-Velours.jpg";
import EnLhonneurDeBacchus from "../../images/Grande-Images/Grande-En-Lhonneur-De-Bacchus.webp";
import YorkshireSurVelours from "../../images/Sans-Bordure/SansBordure-Grande-Bebe-Yorkshire-Sur-Velours.jpg";
import GuepierSurVelours from "../../images/Sans-Bordure/SansBordure-Grande-Guepier-Sur-Velours.jpg";
import OiseauBleuSurVelours from "../../images/Sans-Bordure/SansBordure-Grande-Oiseau-Bleu-Sur-Velours.jpg";
import HamsterSurVelours from "../../images/Sans-Bordure/SansBordure-Grande-Hamster-Sur-Velours.jpg";
import AvantLeDepart from "../../images/Grande-Images/Grande-Image-Avant-Le-Départ.webp";
import ChocolatChaud from "../../images/Grande-Images/Grande-Cafe-Et-Chocolat.webp";
import SouvenirsMarin from "../../images/TableauxVendu/1998/Cadre-Souvenirs-Marin.jpg";
import Dentiste from "../../images/TableauxVendu/2002/Dentiste.jpg";
import BelleEpoque from "../../images/TableauxVendu/1997/Belle-Epoque.jpg";
import CadreDameJeanne from "../../images/Sans-Bordure/SansBordure-Grande-Dame-Jeanne.jpg";
import CaSePrepare from "../../images/TableauxVendu/2005/Cadre-Ca-Se-Prepare.jpg";

function Header() {
  /* Permet de récupérer les données ( valeurs ) de l'utilisateur pendant son inscription ( Prénom - Email ... ) 
  avec la clef inscription du local Storage */
  const { toggleTheme, theme } = useTheme();
  const NightModeButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${colors.dark};
    padding-top: 30px;
  `;
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
      <div id="loader-Container">
        <div id="loader">
          <img
            id="GifMireilleRossignol"
            src={GifMireilleRossignol}
            alt="Titre présentation Mireille Rossignol"
          ></img>
          <img
            id="OrangesEtDentelle"
            src={OrangesEtDentelle}
            alt="Titre présentation Mireille Rossignol"
          ></img>
          <img
            id="GrandeAiguiere"
            src={GrandeAiguiere}
            alt="Titre présentation Mireille Rossignol"
          ></img>
          <img
            id="SouvenirsMarins"
            src={SouvenirsMarins}
            alt="Titre présentation Mireille Rossignol"
          ></img>
          <img
            id="CerisesEtFraises"
            src={CerisesEtFraises}
            alt="Titre présentation Mireille Rossignol"
          ></img>
          <img
            id="UnPetitNoir"
            src={UnPetitNoir}
            alt="Titre présentation Mireille Rossignol"
          ></img>
          <img
            id="LeTempsDesLumieres"
            src={LeTempsDesLumieres}
            alt="Titre présentation Mireille Rossignol"
          ></img>
          <img
            id="UnPetitCreux"
            src={UnPetitCreux}
            alt="Titre présentation Mireille Rossignol"
          ></img>
          <img
            id="GrandeCristaux"
            src={GrandeCristaux}
            alt="Titre présentation Mireille Rossignol"
          ></img>
          <img
            id="CuivreEtRaisinDesir"
            src={CuivreEtRaisinDesir}
            alt="Titre présentation Mireille Rossignol"
          ></img>
          <img
            id="GrandeFruitsDautomne"
            src={GrandeFruitsDautomne}
            alt="Titre présentation Mireille Rossignol"
          ></img>
          <img
            id="Chien"
            src={Chien}
            alt="Titre présentation Mireille Rossignol"
          ></img>
          <img
            id="Cheval"
            src={Cheval}
            alt="Titre présentation Mireille Rossignol"
          ></img>
          <img
            id="Iris"
            src={Iris}
            alt="Titre présentation Mireille Rossignol"
          ></img>
          <img
            id="Nocturne"
            src={Nocturne}
            alt="Titre présentation Mireille Rossignol"
          ></img>
          <img
            id="TeckelSurVelours"
            src={TeckelSurVelours}
            alt="Titre présentation Mireille Rossignol"
          ></img>
          <img
            id="BebeYorkshireSurVelours"
            src={BebeYorkshireSurVelours}
            alt="Titre présentation Mireille Rossignol"
          ></img>
          <img
            id="CanicheAbricotSurVelours"
            src={CanicheAbricotSurVelours}
            alt="Titre présentation Mireille Rossignol"
          ></img>
          <img
            id="CanicheBlancSurVelours"
            src={CanicheBlancSurVelours}
            alt="Titre présentation Mireille Rossignol"
          ></img>
          <img
            id="CanicheGrisSurVelours"
            src={CanicheGrisSurVelours}
            alt="Titre présentation Mireille Rossignol"
          ></img>
          <img
            id="GrandeChouetteSurVelours"
            src={GrandeChouetteSurVelours}
            alt="Titre présentation Mireille Rossignol"
          ></img>
          <img
            id="EnLhonneurDeBacchus"
            src={EnLhonneurDeBacchus}
            alt="Titre présentation Mireille Rossignol"
          ></img>
          <img
            id="YorkshireSurVelours"
            src={YorkshireSurVelours}
            alt="Titre présentation Mireille Rossignol"
          ></img>
          <img
            id="GuepierSurVelours"
            src={GuepierSurVelours}
            alt="Titre présentation Mireille Rossignol"
          ></img>
          <img
            id="OiseauBleuSurVelours"
            src={OiseauBleuSurVelours}
            alt="Titre présentation Mireille Rossignol"
          ></img>
          <img
            id="HamsterSurVelours"
            src={HamsterSurVelours}
            alt="Titre présentation Mireille Rossignol"
          ></img>
          <img
            id="AvantLeDepart"
            src={AvantLeDepart}
            alt="Titre présentation Mireille Rossignol"
          ></img>
          <img
            id="ChocolatChaud"
            src={ChocolatChaud}
            alt="Titre présentation Mireille Rossignol"
          ></img>
          <img
            id="SouvenirsMarin"
            src={SouvenirsMarin}
            alt="Titre présentation Mireille Rossignol"
          ></img>
          <img
            id="Dentiste"
            src={Dentiste}
            alt="Titre présentation Mireille Rossignol"
          ></img>
          <img
            id="BelleEpoque"
            src={BelleEpoque}
            alt="Titre présentation Mireille Rossignol"
          ></img>
          <img
            id="CadreDameJeanne"
            src={CadreDameJeanne}
            alt="Titre présentation Mireille Rossignol"
          ></img>
          <img
            id="CaSePrepare"
            src={CaSePrepare}
            alt="Titre présentation Mireille Rossignol"
          ></img>
        </div>
      </div>
      <div className="container-fluid Menu m-0">
        <div className="row">
          <h1 className="TitreH1-Toute-Page">
            Mireille Rossignol / Artiste Peintre
          </h1>
          <NightModeButton onClick={() => toggleTheme()}>
            Peinture en Couleur ou effet Noir/ Blanc :
            {theme === "light" ? "☀️" : "🌙"}
          </NightModeButton>
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
