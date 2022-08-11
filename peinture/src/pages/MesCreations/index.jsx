/* Importations Bibliothèques React-router-dom  */
import React from "react";
import { NavLink } from "react-router-dom";
import {
  TransformComponent,
  TransformWrapper,
} from "@pronestor/react-zoom-pan-pinch";
// /* Importations des pages de styles + images */
/* Styles CSS  Icon Full Screen   */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand } from "@fortawesome/free-solid-svg-icons";

import OrangesEtDentelle from "../../images/Sans-Bordure/SansBordure-Grande-Oranges-Et-Dentelle.webp";
import GrandeAiguiere from "../../images/Sans-Bordure/SansBordure-Grande-Aiguiere.webp";
import SouvenirsMarins from "../../images/Sans-Bordure/SansBordure-Grande-Image-Souvenirs-Marins.webp";
import CerisesEtFraises from "../../images/Sans-Bordure/SansBordure-Grande-Cerises-Et-Fraises.webp";
import UnPetitNoir from "../../images/Sans-Bordure/SansBordure-Grande-Un-ptit-noir.webp";
import LeTempsDesLumieres from "../../images/Sans-Bordure/SansBordure-Grande-Le-Temps-Des-Lumieres-Desir-Grande.webp";
import UnPetitCreux from "../../images/Sans-Bordure/SansBordure-Grande-Un-Petit-Creux.webp";
import GrandeCristaux from "../../images/Sans-Bordure/SansBordure-Grande-Cristaux.webp";
import CuivreEtRaisinDesir from "../../images/Sans-Bordure/SansBordure-Grande-Cuivre-Et-Raisin-Desir.webp";
import GrandeFruitsDautomne from "../../images/Sans-Bordure/SansBordure-Grande-Fruits-Dautomne.webp";
import Chien from "../../images/Grande-Images/Chien.webp";
import Cheval from "../../images/Grande-Images/Cheval.webp";
import Iris from "../../images/Grande-Images/Iris.webp";
import TeckelSurVelours from "../../images/Sans-Bordure/SansBordure-Grande-Jeune-Teckel-Sur-Velours.webp";
import BebeYorkshireSurVelours from "../../images/Sans-Bordure/SansBordure-Grande-Bebe-Yorkshire-Sur-Velours.webp";
import CanicheAbricotSurVelours from "../../images/Sans-Bordure/SansBordure-Grande-Caniche-Abricot-Sur-Velours.webp";
import CanicheBlancSurVelours from "../../images/Sans-Bordure/SansBordure-Grande-Caniche-Blanc-Sur-Velours.webp";
import CanicheGrisSurVelours from "../../images/Sans-Bordure/SansBordure-Grande-Caniche-Gris-Sur-Velours.webp";
import GrandeChouetteSurVelours from "../../images/Sans-Bordure/SansBordure-Grande-Chouette-Sur-Velours.webp";
import EnLhonneurDeBacchus from "../../images/Sans-Bordure/SansBordure-Grande-En-Lhonneur-De-Bacchus.webp";
import YorkshireSurVelours from "../../images/Sans-Bordure/SansBordure-Grande-Yorkshire-Sur-Velours.webp";
import GuepierSurVelours from "../../images/Sans-Bordure/SansBordure-Grande-Guepier-Sur-Velours.webp";
import OiseauBleuSurVelours from "../../images/Sans-Bordure/SansBordure-Grande-Oiseau-Bleu-Sur-Velours.webp";
import HamsterSurVelours from "../../images/Sans-Bordure/SansBordure-Grande-Hamster-Sur-Velours.webp";
import TerroirDeFrance from "../../images/Sans-Bordure/SansBordure-Grande-Terroirs-De-France.webp";
import BleuPorcelaine from "../../images/Sans-Bordure/SansBordure-Grande-Bleu-Porcelaine.webp";
import CadreDameJeanne from "../../images/Sans-Bordure/SansBordure-Grande-Dame-Jeanne.webp";
import PlumeOeufDargent from "../../images/Sans-Bordure/SansBordure-Grande-Plume-et-oeuf-dargent.webp";
import VieilleDentelles from "../../images/Sans-Bordure/SansBordure-Grande-Vieilles-dentelles.webp";
import ChocolatChaud from "../../images/Sans-Bordure/SansBordure-Grande-Image-Chocolat-chaud.webp";
import CafeChocolat from "../../images/Sans-Bordure/SansBordure-Grande-Cafe-Et-Chocolat.webp";
import AvantLeDepart from "../../images/Sans-Bordure/SansBordure-Grande-Image-Avant-Le-Départ.webp";
import VinDeSavoie from "../../images/Sans-Bordure/SansBordure-Grande-Vin-De-Savoie-Desir.webp";
import RefletsDeSavoies from "../../images/Sans-Bordure/SansBordure-Grande-Reflets-De-Savoie.webp";
import CaSePrepare from "../../images/Sans-Bordure/SansBordure-Grande-Ca-Se-Prepare.webp";
import OutilsDantan from "../../images/Sans-Bordure/SansBordure-Grande-Outils-Dantan.webp";
import PainEtConfiture from "../../images/Sans-Bordure/SansBordure-Grande-Pain-Et-Confiture.webp";
import UneAutreEpoque from "../../images/Sans-Bordure/SansBordure-Grande-Une-Autre-Epoque.webp";
import Felins from "../../images/Sans-Bordure/SansBordure-Grande-Felins.webp";

function MesCreations() {
  /* Function pour compter le Nombres de click sur les coeurs. 
Pour connaitre les tableaux les plus populaires de la page creation */
  // Variable -> Déclaration  -> Balise body-Main-Logo-Nav-Liens-Titre-Article-... - Html de la page.
  // (async function getAllParaElems() {
  //   const fiches = await getFiches();
  //   // console.log(fiches);
  //   for (let i in fiches) {
  //     console.log(fiches[i]);
  //     displayArticle(fiches[i]);
  //   }
  // })();
  // Fonction pour appeller les Fiches de L'API.

  // async function getFiches() {
  //   try {
  //     let resultat = await fetch("http://localhost:3000/api/fiche/");
  //     return await resultat.json();
  //   } catch (error) {
  //     console.log(
  //       "Serveur indisponible.Veuillez contacter l'administrateur du site"
  //     );
  //   }
  // }

  // function displayArticle(article) {
  //   let liensTag = document.getElementById("SavoirPlus");

  // Appel - Liens -> Id produit - > Id

  //   liensTag.setAttribute("href", "Fiche?id=" + article.id);
  // }

  /* Function pour compter le Nombres de click sur les coeurs. 
Pour connaitre les tableaux les plus populaires de la page creation */

  let likes = 0;

  function Compteur() {
    likes += 1;
    console.log(likes);
  }
  return (
    <main>
      <section className="Galerie">
        <h2 className="Titre-Nature-Morte">
          <span className="Lien-Nature-Morte-En-Vente">
            Nature morte /<a href="#velour">&nbsp;Velours en vente</a>
            &nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <NavLink className="Lien-Nature-Morte-Vendu" to="/Vendue">
            <i className="fas fa-chevron-circle-right"></i>&nbsp; Nature morte /
            &nbsp;Velours vendu
          </NavLink>
          &nbsp;&nbsp;&nbsp;&nbsp;
        </h2>
        <h3>Nature-Morte-Galerie n ° 1</h3>
        <div className="Galerie1-Nature-Morte">
          <figure id="OrangesEtDentelle">
            <div className="Div-En-Vente">
              <img
                src={OrangesEtDentelle}
                alt="Oranges Et Dentelles"
                title="Cliquez pour agrandir"
              />
            </div>
            <div class="DivFullScreen">
              <a href={OrangesEtDentelle}>
                <div
                  className="FullScreenMesCreations"
                  title="Mode plein écran"
                >
                  <FontAwesomeIcon icon={faExpand} />
                </div>
              </a>
            </div>
            <figcaption>
              <h4>Oranges et dentelle</h4>
              <span className="Prix">450€</span>
              <a href="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </a>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu-Creations">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="EnLhonneurDeBacchus">
            <div className="Div-En-Vente">
              <img src={EnLhonneurDeBacchus} alt="L'Honneur De Bacchus" />
            </div>
            <div class="DivFullScreen">
              <a href={EnLhonneurDeBacchus}>
                <div
                  className="FullScreenMesCreations"
                  title="Mode plein écran"
                >
                  <FontAwesomeIcon icon={faExpand} />
                </div>
              </a>
            </div>
            <figcaption>
              <h4>En l'honneur de Bacchus</h4>
              <span className="Prix">480€</span>
              <a href="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </a>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu-Creations">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Terroirs-De-France">
            <div className="Div-En-Vente">
              <img
                src={TerroirDeFrance}
                alt="Terroirs de France"
                title="Cliquez pour agrandir"
              />
            </div>
            <div class="DivFullScreen">
              <a href={TerroirDeFrance}>
                <div
                  className="FullScreenMesCreations"
                  title="Mode plein écran"
                >
                  <FontAwesomeIcon icon={faExpand} />
                </div>
              </a>
            </div>
            <figcaption>
              <h4>Terroirs de France</h4>
              <span className="Prix">1500€</span>
              <a href="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </a>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu-Creations">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Bleu-Porcelaine">
            <div className="Div-En-Vente">
              <img
                src={BleuPorcelaine}
                alt="Bleu Porcelaine"
                title="Cliquez pour agrandir"
              />
            </div>
            <div class="DivFullScreen">
              <a href={BleuPorcelaine}>
                <div
                  className="FullScreenMesCreations"
                  title="Mode plein écran"
                >
                  <FontAwesomeIcon icon={faExpand} />
                </div>
              </a>
            </div>
            <figcaption>
              <h4>Bleu porcelaine</h4>
              <span className="Prix">890€</span>
              <a href="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </a>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu-Creations">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Dame-Jeanne">
            <div className="Div-En-Vente">
              <img
                src={CadreDameJeanne}
                alt="Dame Jeanne"
                title="Cliquez pour agrandir"
              />
            </div>
            <div class="DivFullScreen">
              <a href={CadreDameJeanne}>
                <div
                  className="FullScreenMesCreations"
                  title="Mode plein écran"
                >
                  <FontAwesomeIcon icon={faExpand} />
                </div>
              </a>
            </div>
            <figcaption>
              <h4>Dame Jeanne</h4>
              <span className="Prix">800€</span>
              <a href="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </a>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu-Creations">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="UnPtitNoir">
            <div className="Div-En-Vente">
              <img src={UnPetitNoir} alt="Un ptit noir" />
            </div>
            <div class="DivFullScreen">
              <a href={UnPetitNoir}>
                <div
                  className="FullScreenMesCreations"
                  title="Mode plein écran"
                >
                  <FontAwesomeIcon icon={faExpand} />
                </div>
              </a>
            </div>
            <figcaption>
              <h4>Un p'tit noir</h4>
              <span className="Prix">310€</span>
              <a href="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </a>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu-Creations">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
        </div>
        <h3>Nature-Morte-Galerie n ° 2</h3>
        <div className="Galerie2-Nature-Morte">
          <figure id="PlumeEtOeufDargent">
            <div className="Div-En-Vente">
              <img
                src={PlumeOeufDargent}
                alt="Plume et oeuf d'argent"
                title="Cliquez pour agrandir"
              />
            </div>
            <div class="DivFullScreen">
              <a href={PlumeOeufDargent}>
                <div
                  className="FullScreenMesCreations"
                  title="Mode plein écran"
                >
                  <FontAwesomeIcon icon={faExpand} />
                </div>
              </a>
            </div>
            <figcaption>
              <h4>Plume et oeuf d'argent</h4>
              <span className="Prix">380€</span>
              <a id="SavoirPlus" href="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </a>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu-Creations">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Cristaux">
            <div className="Div-En-Vente">
              <img src={GrandeCristaux} alt="Grande Cristaux" />
            </div>
            <div class="DivFullScreen">
              <a href={GrandeCristaux}>
                <div
                  className="FullScreenMesCreations"
                  title="Mode plein écran"
                >
                  <FontAwesomeIcon icon={faExpand} />
                </div>
              </a>
            </div>
            <figcaption>
              <h4>Cristaux</h4>
              <span className="Prix">310€</span>
              <a href="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </a>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu-Creations">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="VieillesDentelles">
            <div className="Div-En-Vente">
              <img
                src={VieilleDentelles}
                alt="Vieilles dentelles"
                title="Cliquez pour agrandir"
              />
            </div>
            <div class="DivFullScreen">
              <a href={VieilleDentelles}>
                <div
                  className="FullScreenMesCreations"
                  title="Mode plein écran"
                >
                  <FontAwesomeIcon icon={faExpand} />
                </div>
              </a>
            </div>
            <figcaption>
              <h4>Vieilles dentelles</h4>
              <span className="Prix">350€</span>
              <a href="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </a>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu-Creations">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="ChocolatChaud">
            <div className="Div-En-Vente">
              <img
                src={ChocolatChaud}
                alt="Chocolat chaud"
                title="Cliquez pour agrandir"
              />
            </div>
            <div class="DivFullScreen">
              <a href={ChocolatChaud}>
                <div
                  className="FullScreenMesCreations"
                  title="Mode plein écran"
                >
                  <FontAwesomeIcon icon={faExpand} />
                </div>
              </a>
            </div>
            <figcaption>
              <h4>Chocolat chaud</h4>
              <span className="Prix">350€</span>
              <a href="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </a>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu-Creations">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="CafeEtChocolat">
            <div className="Div-En-Vente">
              <img
                src={CafeChocolat}
                alt="Café et chocolat"
                title="Cliquez pour agrandir"
              />
            </div>
            <div class="DivFullScreen">
              <a href={CafeChocolat}>
                <div
                  className="FullScreenMesCreations"
                  title="Mode plein écran"
                >
                  <FontAwesomeIcon icon={faExpand} />
                </div>
              </a>
            </div>
            <figcaption>
              <h4>Café et chocolat</h4>
              <span className="Prix">310€</span>
              <a href="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </a>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu-Creations">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="SouvenirsMarins">
            <div className="Div-En-Vente">
              <img src={SouvenirsMarins} alt="Souvenirs Marins" />
            </div>
            <div class="DivFullScreen">
              <a href={SouvenirsMarins}>
                <div
                  className="FullScreenMesCreations"
                  title="Mode plein écran"
                >
                  <FontAwesomeIcon icon={faExpand} />
                </div>
              </a>
            </div>
            <figcaption>
              <h4>Souvenirs marins</h4>
              <span className="Prix">800€</span>
              <a href="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </a>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu-Creations">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
        </div>
        <h3>Nature-Morte-Galerie n ° 3</h3>
        <div className="Galerie3-Nature-Morte">
          <figure id="Avant-Le-Depart">
            <div className="Div-En-Vente">
              <img
                src={AvantLeDepart}
                alt="Avant le départ"
                title="Cliquez pour agrandir"
              />
            </div>
            <div class="DivFullScreen">
              <a href={AvantLeDepart}>
                <div
                  className="FullScreenMesCreations"
                  title="Mode plein écran"
                >
                  <FontAwesomeIcon icon={faExpand} />
                </div>
              </a>
            </div>
            <figcaption>
              <h4>Avant le départ</h4>
              <span className="Prix">780€</span>
              <a href="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </a>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu-Creations">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="UnPetitCreux">
            <div className="Div-En-Vente">
              <img src={UnPetitCreux} alt="Un Petit Creux" />
            </div>
            <div class="DivFullScreen">
              <a href={UnPetitCreux}>
                <div
                  className="FullScreenMesCreations"
                  title="Mode plein écran"
                >
                  <FontAwesomeIcon icon={faExpand} />
                </div>
              </a>
            </div>
            <figcaption>
              <h4>Un petit creux</h4>
              <span className="Prix">450€</span>
              <a href="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </a>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu-Creations">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="RefletsDeSavoie">
            <div className="Div-En-Vente">
              <img
                src={RefletsDeSavoies}
                alt="Reflets de savoie"
                title="Cliquez pour agrandir"
              />
            </div>
            <div class="DivFullScreen">
              <a href={RefletsDeSavoies}>
                <div
                  className="FullScreenMesCreations"
                  title="Mode plein écran"
                >
                  <FontAwesomeIcon icon={faExpand} />
                </div>
              </a>
            </div>
            <figcaption>
              <h4>Reflets de Savoie</h4>
              <span className="Prix">480€</span>
              <a href="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </a>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu-Creations">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="CuivreEtRaisin">
            <div className="Div-En-Vente">
              <img
                src={CuivreEtRaisinDesir}
                alt="Cuivre et raisin"
                title="Cliquez pour agrandir"
              />
            </div>
            <div class="DivFullScreen">
              <a href={CuivreEtRaisinDesir}>
                <div
                  className="FullScreenMesCreations"
                  title="Mode plein écran"
                >
                  <FontAwesomeIcon icon={faExpand} />
                </div>
              </a>
            </div>
            <figcaption>
              <h4>Cuivre et raisin</h4>
              <span className="Prix">780€</span>
              <a href="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </a>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu-Creations">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="CaSeprepare">
            <div className="Div-En-Vente">
              <img
                src={CaSePrepare}
                alt="Çà se prépare"
                title="Cliquez pour agrandir"
              />
            </div>
            <div class="DivFullScreen">
              <a href={CaSePrepare}>
                <div
                  className="FullScreenMesCreations"
                  title="Mode plein écran"
                >
                  <FontAwesomeIcon icon={faExpand} />
                </div>
              </a>
            </div>
            <figcaption>
              <h4>Ca se prépare</h4>
              <span className="Prix">650€</span>
              <a href="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </a>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu-Creations">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="OutilsDantan">
            <div className="Div-En-Vente">
              <img
                src={OutilsDantan}
                alt="Outils d'antan"
                title="Cliquez pour agrandir"
              />
            </div>
            <div class="DivFullScreen">
              <a href={OutilsDantan}>
                <div
                  className="FullScreenMesCreations"
                  title="Mode plein écran"
                >
                  <FontAwesomeIcon icon={faExpand} />
                </div>
              </a>
            </div>
            <figcaption>
              <h4>Outils d'antan</h4>
              <span className="Prix">780€</span>
              <a href="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </a>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu-Creations">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
        </div>
        <h3>Nature-Morte-Galerie n ° 4</h3>
        <div className="Galerie4-Nature-Morte">
          <figure id="PainEtConfiture">
            <div className="Div-En-Vente">
              <img
                src={PainEtConfiture}
                alt="Pain et confiture"
                title="Cliquez pour agrandir"
              />
            </div>
            <div class="DivFullScreen">
              <a href={PainEtConfiture}>
                <div
                  className="FullScreenMesCreations"
                  title="Mode plein écran"
                >
                  <FontAwesomeIcon icon={faExpand} />
                </div>
              </a>
            </div>
            <figcaption>
              <h4>Pain et confiture</h4>
              <span className="Prix">720€</span>
              <a href="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </a>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu-Creations">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Une-AutreEpoque">
            <div className="Div-En-Vente">
              <img
                src={UneAutreEpoque}
                alt="Une autre époque"
                title="Cliquez pour agrandir"
              />
            </div>
            <div class="DivFullScreen">
              <a href={UneAutreEpoque}>
                <div
                  className="FullScreenMesCreations"
                  title="Mode plein écran"
                >
                  <FontAwesomeIcon icon={faExpand} />
                </div>
              </a>
            </div>
            <figcaption>
              <h4>Une autre époque</h4>
              <span className="Prix">580€</span>
              <a href="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </a>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu-Creations">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="LeTempsDeslumieres">
            <div className="Div-En-Vente">
              <img src={LeTempsDesLumieres} alt="Le Temps Des Lumieres Desir" />
            </div>
            <div class="DivFullScreen">
              <a href={LeTempsDesLumieres}>
                <div
                  className="FullScreenMesCreations"
                  title="Mode plein écran"
                >
                  <FontAwesomeIcon icon={faExpand} />
                </div>
              </a>
            </div>
            <figcaption>
              <h4>Le temps des lumières</h4>
              <span className="Prix">380€</span>
              <a href="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </a>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu-Creations">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Felins">
            <div className="Div-En-Vente">
              <img src={Felins} alt="Félins" title="Cliquez pour agrandir" />
            </div>
            <div class="DivFullScreen">
              <a href={Felins}>
                <div
                  className="FullScreenMesCreations"
                  title="Mode plein écran"
                >
                  <FontAwesomeIcon icon={faExpand} />
                </div>
              </a>
            </div>
            <figcaption>
              <h4>Felins</h4>
              <span className="Prix">250€</span>
              <a href="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </a>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu-Creations">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
        </div>
        <h3>Nature-Morte-Galerie n ° 5</h3>
        <div className="Galerie5-Nature-Morte">
          <figure id="CerisesEtFraises">
            <div className="Div-En-Vente">
              <img
                src={CerisesEtFraises}
                alt="Cerises Et fraises"
                title="Cliquez pour agrandir "
              />
            </div>
            <div class="DivFullScreen">
              <a href={CerisesEtFraises}>
                <div
                  className="FullScreenMesCreations"
                  title="Mode plein écran"
                >
                  <FontAwesomeIcon icon={faExpand} />
                </div>
              </a>
            </div>
            <figcaption>
              <h4>Cerises et Fraises</h4>
              <span className="Prix">350€</span>
              <a href="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </a>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu-Creations">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Fruits-Dautomne">
            <div className="Div-En-Vente">
              <img src={GrandeFruitsDautomne} alt="Fruits D'automne" />
            </div>
            <div class="DivFullScreen">
              <a href={GrandeFruitsDautomne}>
                <div
                  className="FullScreenMesCreations"
                  title="Mode plein écran"
                >
                  <FontAwesomeIcon icon={faExpand} />
                </div>
              </a>
            </div>
            <figcaption>
              <h4>Fruits d'automne</h4>
              <span className="Prix">250€</span>
              <a href="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </a>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu-Creations">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Aiguiere">
            <div className="Div-En-Vente">
              <img src={GrandeAiguiere} alt="Grande Aiguiere" />
            </div>
            <div class="DivFullScreen">
              <a href={GrandeAiguiere}>
                <div
                  className="FullScreenMesCreations"
                  title="Mode plein écran"
                >
                  <FontAwesomeIcon icon={faExpand} />
                </div>
              </a>
            </div>
            <figcaption>
              <h4>Aiguière</h4>
              <span className="Prix">690€</span>
              <a href="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </a>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu-Creations">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="VinDeSavoie">
            <div className="Div-En-Vente">
              <img
                src={VinDeSavoie}
                alt="Vin de savoie"
                title="Cliquez pour agrandir"
              />
            </div>
            <div class="DivFullScreen">
              <a href={VinDeSavoie}>
                <div
                  className="FullScreenMesCreations"
                  title="Mode plein écran"
                >
                  <FontAwesomeIcon icon={faExpand} />
                </div>
              </a>
            </div>
            <figcaption>
              <h4>Vin de savoie</h4>
              <span className="Prix">480€</span>
              <a href="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </a>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu-Creations">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
        </div>
        <h2 className="Titre-Velours" id="velour">
          Velours
        </h2>
        <h3>Velours-Galerie n ° 1</h3>
        <div className="Velours-Galerie1">
          <figure id="Cheval">
            <div className="Div-En-Vente">
              <img src={Cheval} className="galeriePresentation" alt="Cheval" />
            </div>
            <div class="DivFullScreen">
              <a href={Cheval}>
                <div
                  className="FullScreenMesCreations"
                  title="Mode plein écran"
                >
                  <FontAwesomeIcon icon={faExpand} />
                </div>
              </a>
            </div>
            <figcaption>
              <h4>Cheval</h4>
              <span className="Prix">35€</span>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu ">
                  <i className="far fa-heart "></i>
                </span>
                <span className="Coeur-Plein-Menu-Creations ">
                  <i className="fas fa-heart "></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Chien">
            <div className="Div-En-Vente">
              <img className="galeriePresentation" src={Chien} alt="Chien" />
            </div>
            <div class="DivFullScreen">
              <a href={Chien}>
                <div
                  className="FullScreenMesCreations"
                  title="Mode plein écran"
                >
                  <FontAwesomeIcon icon={faExpand} />
                </div>
              </a>
            </div>
            <figcaption>
              <h4>Chien</h4>
              <span className="Prix ">50€</span>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu ">
                  <i className="far fa-heart "></i>
                </span>
                <span className="Coeur-Plein-Menu-Creations ">
                  <i className="fas fa-heart "></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Iris">
            <div className="Div-En-Vente">
              <img className="galeriePresentation" src={Iris} alt="Iris" />
            </div>
            <div class="DivFullScreen">
              <a href={Iris}>
                <div
                  className="FullScreenMesCreations"
                  title="Mode plein écran"
                >
                  <FontAwesomeIcon icon={faExpand} />
                </div>
              </a>
            </div>
            <figcaption>
              <h4>Iris</h4>
              <span className="Prix ">70€</span>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu ">
                  <i className="far fa-heart "></i>
                </span>
                <span className="Coeur-Plein-Menu-Creations ">
                  <i className="fas fa-heart "></i>
                </span>
              </span>
            </figcaption>
          </figure>
        </div>
        <h3>Velours-Galerie n ° 2</h3>
        <div className="Velours-Galerie2">
          <figure className="Caniche-Abricot">
            <div className="Div-En-Vente">
              <img
                src={CanicheAbricotSurVelours}
                alt="Portrait Caniche Abricot Sur Velours"
              />
            </div>
            <div class="DivFullScreen">
              <a href={CanicheAbricotSurVelours}>
                <div
                  className="FullScreenMesCreations"
                  title="Mode plein écran"
                >
                  <FontAwesomeIcon icon={faExpand} />
                </div>
              </a>
            </div>
            <figcaption>
              <h4>Portrait de caniche abricot sur velours</h4>
              <span className="Prix">20€</span>
              <a href="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </a>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu-Creations">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure>
            <div className="Div-En-Vente">
              <img src={TeckelSurVelours} alt="Jeune Teckel Sur Velours" />
            </div>
            <div class="DivFullScreen">
              <a href={TeckelSurVelours}>
                <div
                  className="FullScreenMesCreations"
                  title="Mode plein écran"
                >
                  <FontAwesomeIcon icon={faExpand} />
                </div>
              </a>
            </div>
            <figcaption>
              <h4>Jeune teckel sur velours</h4>
              <span className="Prix">20€</span>
              <a href="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </a>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu-Creations">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure>
            <div className="Div-En-Vente">
              <img
                src={BebeYorkshireSurVelours}
                alt="Bebe Yorkshire Sur Velours"
              />
            </div>
            <div class="DivFullScreen">
              <a href={BebeYorkshireSurVelours}>
                <div
                  className="FullScreenMesCreations"
                  title="Mode plein écran"
                >
                  <FontAwesomeIcon icon={faExpand} />
                </div>
              </a>
            </div>
            <figcaption>
              <h4>Bébé yorkshire sur velours </h4>
              <span className="Prix">20€</span>
              <a href="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </a>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu-Creations">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure>
            <div className="Div-En-Vente">
              <img
                src={CanicheBlancSurVelours}
                alt="Caniche Blanc Sur Velours"
              />
            </div>
            <div class="DivFullScreen">
              <a href={CanicheBlancSurVelours}>
                <div
                  className="FullScreenMesCreations"
                  title="Mode plein écran"
                >
                  <FontAwesomeIcon icon={faExpand} />
                </div>
              </a>
            </div>
            <figcaption>
              <h4>Caniche blanc sur velours</h4>
              <span className="Prix">20€</span>
              <a href="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </a>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu-Creations">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure>
            <div className="Div-En-Vente">
              <img src={YorkshireSurVelours} alt="Yorkshire Sur Velours" />
            </div>
            <div class="DivFullScreen">
              <a href={YorkshireSurVelours}>
                <div
                  className="FullScreenMesCreations"
                  title="Mode plein écran"
                >
                  <FontAwesomeIcon icon={faExpand} />
                </div>
              </a>
            </div>
            <figcaption>
              <h4>Yorkshire sur velours</h4>
              <span className="Prix">20€</span>
              <a href="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </a>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu-Creations">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
        </div>
        <h3>Velours-Galerie n ° 3</h3>
        <div className="Velours-Galerie3">
          <figure>
            <div className="Div-En-Vente">
              <img src={GuepierSurVelours} alt="Guepier Sur Velours" />
            </div>
            <div class="DivFullScreen">
              <a href={GuepierSurVelours}>
                <div
                  className="FullScreenMesCreations"
                  title="Mode plein écran"
                >
                  <FontAwesomeIcon icon={faExpand} />
                </div>
              </a>
            </div>
            <figcaption>
              <h4>Guêpier sur velours</h4>
              <span className="Prix">20€</span>
              <a href="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </a>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu-Creations">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure>
            <div className="Div-En-Vente">
              <img src={OiseauBleuSurVelours} alt="Oiseau Bleu Sur Velours" />
            </div>
            <div class="DivFullScreen">
              <a href={OiseauBleuSurVelours}>
                <div
                  className="FullScreenMesCreations"
                  title="Mode plein écran"
                >
                  <FontAwesomeIcon icon={faExpand} />
                </div>
              </a>
            </div>
            <figcaption>
              <h4>Oiseau bleu sur velours</h4>
              <span className="Prix">20€</span>
              <a href="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </a>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu-Creations">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure>
            <div className="Div-En-Vente">
              <img src={GrandeChouetteSurVelours} alt="Chouette Sur Velours" />
            </div>
            <div class="DivFullScreen">
              <a href={GrandeChouetteSurVelours}>
                <div
                  className="FullScreenMesCreations"
                  title="Mode plein écran"
                >
                  <FontAwesomeIcon icon={faExpand} />
                </div>
              </a>
            </div>
            <figcaption>
              <h4>Chouette sur velours</h4>
              <span className="Prix">20€</span>
              <a href="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </a>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu-Creations">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure>
            <div className="Div-En-Vente">
              <img src={CanicheGrisSurVelours} alt="Caniche Gris Sur Velours" />
            </div>
            <div class="DivFullScreen">
              <a href={CanicheGrisSurVelours}>
                <div
                  className="FullScreenMesCreations"
                  title="Mode plein écran"
                >
                  <FontAwesomeIcon icon={faExpand} />
                </div>
              </a>
            </div>
            <figcaption>
              <h4>Caniche gris sur velours</h4>
              <span className="Prix">20€</span>
              <a href="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </a>

              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu-Creations">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure>
            <div className="Div-En-Vente">
              <img src={HamsterSurVelours} alt="Grande Hamster Sur Velours" />
            </div>
            <div class="DivFullScreen">
              <a href={HamsterSurVelours}>
                <div
                  className="FullScreenMesCreations"
                  title="Mode plein écran"
                >
                  <FontAwesomeIcon icon={faExpand} />
                </div>
              </a>
            </div>
            <figcaption>
              <h4>Hamster sur velours</h4>
              <span className="Prix">20€</span>
              <a href="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </a>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu-Creations">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
export default MesCreations;
