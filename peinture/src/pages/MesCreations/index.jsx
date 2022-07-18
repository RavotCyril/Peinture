/* Importations Bibliothèques React-router-dom  */
import React from "react";
import { NavLink } from "react-router-dom";

import OrangesEtDentelle from "../../images/Sans-Bordure/SansBordure-Grande-Oranges-Et-Dentelle.jpg";
import GrandeAiguiere from "../../images/Grande-Images/Grande-Aiguiere.webp";
import TerroirDeFrance from "../../images/TableauxVendu/1998/Cadre-Terroirs-De-France.jpg";
import BleuPorcelaine from "../../images/TableauxVendu/1998/Cadre-Bleu-Porcelaine.jpg";
import CadreDameJeanne from "../../images/TableauxVendu/2004/Cadre-Dame-Jeanne.jpg";
import UnPetitNoir from "../../images/Sans-Bordure/SansBordure-Grande-Un-ptit-noir.jpg";
import PlumeOeufDargent from "../../images/TableauxVendu/2007/Cadre-Plume-Et-oeuf-Dargent.jpg";
import GrandeCristaux from "../../images/Sans-Bordure/SansBordure-Grande-Cristaux.jpg";
import VieilleDentelles from "../../images/TableauxVendu/2007/Cadre-Vieilles-Dentelles.jpg";
import ChocolatChaud from "../../images/TableauxVendu/2008/Cadre-Chocolat-Chaud.jpg";
import CafeChocolat from "../../images/TableauxVendu/2008/Cadre-Cafe-Chocolat.jpg";
import SouvenirsMarins from "../../images/Sans-Bordure/SansBordure-Grande-Image-Souvenirs-Marins.jpg";
import CerisesEtFraises from "../../images/Sans-Bordure/SansBordure-Grande-Cerises-Et-Fraises.jpg";
import AvantLeDepart from "../../images/TableauxVendu/2004/Avant-Le-Depart.jpg";
import UnPetitCreux from "../../images/Sans-Bordure/SansBordure-Grande-Un-Petit-Creux.jpg";
import VinDeSavoie from "../../images/TableauxVendu/2008/Cadre-Vin-De-Savoie.jpg";
import RefletsDeSavoies from "../../images/TableauxVendu/2004/Reflets-De-savoies.jpg";
import CaSePrepare from "../../images/TableauxVendu/2005/Cadre-Ca-Se-Prepare.jpg";
import OutilsDantan from "../../images/TableauxVendu/2007/Cadre-Outils-dantan.jpg";
import PainEtConfiture from "../../images/TableauxVendu/2002/Pain-Et-Confiture.jpg";
import UneAutreEpoque from "../../images/TableauxVendu/2002/Cadre-Une-Autre-Epoque.jpg";
import LeTempsDesLumieres from "../../images/Sans-Bordure/SansBordure-Grande-Le-Temps-Des-Lumieres-Desir-Grande.jpg";
import Felins from "../../images/TableauxVendu/2007/Cadre-Felins.jpg";
import CuivreEtRaisinDesir from "../../images/Sans-Bordure/SansBordure-Grande-Cuivre-Et-Raisin-Desir.jpg";
import GrandeFruitsDautomne from "../../images/Sans-Bordure/SansBordure-Grande-Fruits-Dautomne.jpg";
import Chien from "../../images/Grande-Images/Chien.webp";
import Cheval from "../../images/Grande-Images/Cheval.webp";
import Iris from "../../images/Grande-Images/Iris.webp";
import TeckelSurVelours from "../../images/Grande-Images/Grande-Jeune-Teckel-Sur-Velours.webp";
import BebeYorkshireSurVelours from "../../images/Grande-Images/Grande-Bebe-Yorkshire-Sur-Velours.webp";
import CanicheAbricotSurVelours from "../../images/Grande-Images/Grande-Caniche-Abricot-Sur-Velours.webp";
import CanicheBlancSurVelours from "../../images/Grande-Images/Grande-Caniche-Blanc-Sur-Velours.webp";
import CanicheGrisSurVelours from "../../images/Grande-Images/Grande-Caniche-Gris-Sur-Velours.webp";
import GrandeChouetteSurVelours from "../../images/Grande-Images/Grande-Chouette-Sur-Velours.webp";
import EnLhonneurDeBacchus from "../../images/Grande-Images/Grande-En-Lhonneur-De-Bacchus.webp";
import YorkshireSurVelours from "../../images/Grande-Images/Grande-Bebe-Yorkshire-Sur-Velours.webp";
import GuepierSurVelours from "../../images/Grande-Images/Grande-Guepier-Sur-Velours.webp";
import OiseauBleuSurVelours from "../../images/Grande-Images/Grande-Oiseau-Bleu-Sur-Velours.webp";
import HamsterSurVelours from "../../images/Grande-Images/Grande-Hamster-Sur-Velours.webp";

function MesCreations() {
  /* Function pour compter le Nombres de click sur les coeurs. 
Pour connaitre les tableaux les plus populaires de la page creation */
  // Variable -> Déclaration  -> Balise body-Main-Logo-Nav-Liens-Titre-Article-... - Html de la page.
  (async function getAllParaElems() {
    const articles = await getArticles();
    // console.log(articles);
    for (let i in articles) {
      console.log(articles[i]);
      displayArticle(articles[i]);
    }
  })();
  // Fonction pour appeller les articles de L'API.

  async function getArticles() {
    try {
      let resultat = await fetch("http://localhost:3000/api/peinture/");
      return await resultat.json();
    } catch (error) {
      console.log(
        "Serveur indisponible.Veuillez contacter l'administrateur du site"
      );
    }
  }

  function displayArticle(article) {
    let liensTag = document.getElementById("SavoirPlus");

    // Appel - Liens -> Id produit - > Id

    liensTag.setAttribute("href", "Fiche?id=" + article.id);
  }

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
          <a className="Lien-Nature-Morte-Vendu" href="Vendue">
            <i className="fas fa-chevron-circle-right"></i>&nbsp; Nature morte /
            &nbsp;Velours vendu
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
        </h2>
        <h3>Nature-Morte-Galerie n ° 1</h3>
        <div className="Galerie1-Nature-Morte">
          <figure id="OrangesEtDentelle">
            <div className="Div-En-Vente">
              <NavLink to={OrangesEtDentelle}>
                <img
                  src={OrangesEtDentelle}
                  alt="Oranges Et Dentelles"
                  title="Cliquez pour agrandir"
                ></img>
              </NavLink>
            </div>
            <figcaption>
              <h4>Oranges et dentelle</h4>
              <span className="Prix">450€</span>
              <NavLink to="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </NavLink>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Aiguiere">
            <div className="Div-En-Vente">
              <NavLink to={GrandeAiguiere}>
                <img src={GrandeAiguiere} alt="Grande Aiguiere"></img>
              </NavLink>
            </div>
            <figcaption>
              <h4>Aiguière</h4>
              <span className="Prix">690€</span>
              <NavLink to="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </NavLink>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Terroirs-De-France">
            <div className="Div-En-Vente">
              <NavLink to={TerroirDeFrance}>
                <img
                  src={TerroirDeFrance}
                  alt="Terroirs de France"
                  title="Cliquez pour agrandir"
                ></img>
              </NavLink>
            </div>
            <figcaption>
              <h4>Terroirs de France</h4>
              <span className="Prix">1500€</span>
              <NavLink to="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </NavLink>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Bleu-Porcelaine">
            <div className="Div-En-Vente">
              <NavLink to={BleuPorcelaine}>
                <img
                  src={BleuPorcelaine}
                  alt="Bleu Porcelaine"
                  title="Cliquez pour agrandir"
                ></img>
              </NavLink>
            </div>
            <figcaption>
              <h4>Bleu porcelaine</h4>
              <span className="Prix">890€</span>
              <NavLink to="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </NavLink>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Dame-Jeanne">
            <div className="Div-En-Vente">
              <NavLink to={CadreDameJeanne}>
                <img
                  src={CadreDameJeanne}
                  alt="Dame Jeanne"
                  title="Cliquez pour agrandir"
                ></img>
              </NavLink>
            </div>
            <figcaption>
              <h4>Dame Jeanne</h4>
              <span className="Prix">800€</span>
              <NavLink to="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </NavLink>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="UnPtitNoir">
            <div className="Div-En-Vente">
              <NavLink to={UnPetitNoir}>
                <img src={UnPetitNoir} alt="Un ptit noir"></img>
              </NavLink>
            </div>
            <figcaption>
              <h4>Un p'tit noir</h4>
              <span className="Prix">310€</span>
              <NavLink to="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </NavLink>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
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
              <NavLink to={PlumeOeufDargent}>
                <img
                  src={PlumeOeufDargent}
                  alt="Plume et oeuf d'argent"
                  title="Cliquez pour agrandir"
                ></img>
              </NavLink>
            </div>
            <figcaption>
              <h4>Plume et oeuf d'argent</h4>
              <span className="Prix">380€</span>
              <NavLink id="SavoirPlus" to="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </NavLink>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Cristaux">
            <div className="Div-En-Vente">
              <NavLink to={GrandeCristaux}>
                <img src={GrandeCristaux} alt="Grande Cristaux"></img>
              </NavLink>
            </div>
            <figcaption>
              <h4>Cristaux</h4>
              <span className="Prix">310€</span>
              <NavLink to="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </NavLink>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="VieillesDentelles">
            <div className="Div-En-Vente">
              <NavLink to={VieilleDentelles}>
                <img
                  src={VieilleDentelles}
                  alt="Vieilles dentelles"
                  title="Cliquez pour agrandir"
                ></img>
              </NavLink>
            </div>
            <figcaption>
              <h4>Vieilles dentelles</h4>
              <span className="Prix">350€</span>
              <NavLink to="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </NavLink>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="ChocolatChaud">
            <div className="Div-En-Vente">
              <NavLink to={ChocolatChaud}>
                <img
                  src={ChocolatChaud}
                  alt="Chocolat chaud"
                  title="Cliquez pour agrandir"
                ></img>
              </NavLink>
            </div>
            <figcaption>
              <h4>Chocolat chaud</h4>
              <span className="Prix">350€</span>
              <NavLink to="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </NavLink>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="CafeEtChocolat">
            <div className="Div-En-Vente">
              <NavLink to={CafeChocolat}>
                <img
                  src={CafeChocolat}
                  alt="Café et chocolat"
                  title="Cliquez pour agrandir"
                ></img>
              </NavLink>
            </div>
            <figcaption>
              <h4>Café et chocolat</h4>
              <span className="Prix">310€</span>
              <NavLink to="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </NavLink>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="SouvenirsMarins">
            <div className="Div-En-Vente">
              <NavLink to={SouvenirsMarins}>
                <img src={SouvenirsMarins} alt="Souvenirs Marins"></img>
              </NavLink>
            </div>
            <figcaption>
              <h4>Souvenirs marins</h4>
              <span className="Prix">800€</span>
              <NavLink to="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </NavLink>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
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
              <NavLink to={AvantLeDepart}>
                <img
                  src={AvantLeDepart}
                  alt="Avant le départ"
                  title="Cliquez pour agrandir"
                ></img>
              </NavLink>
            </div>
            <figcaption>
              <h4>Avant le départ</h4>
              <span className="Prix">780€</span>
              <NavLink to="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </NavLink>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="UnPetitCreux">
            <div className="Div-En-Vente">
              <NavLink to={UnPetitCreux}>
                <img src={UnPetitCreux} alt="Un Petit Creux"></img>
              </NavLink>
            </div>
            <figcaption>
              <h4>Un petit creux</h4>
              <span className="Prix">450€</span>
              <NavLink to="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </NavLink>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="VinDeSavoie">
            <div className="Div-En-Vente">
              <NavLink to={VinDeSavoie}>
                <img
                  src={VinDeSavoie}
                  alt="Vin de savoie"
                  title="Cliquez pour agrandir"
                ></img>
              </NavLink>
            </div>
            <figcaption>
              <h4>Vin de savoie</h4>
              <span className="Prix">480€</span>
              <NavLink to="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </NavLink>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="RefletsDeSavoie">
            <div className="Div-En-Vente">
              <NavLink to={RefletsDeSavoies}>
                <img
                  src={RefletsDeSavoies}
                  alt="Reflets de savoie"
                  title="Cliquez pour agrandir"
                ></img>
              </NavLink>
            </div>
            <figcaption>
              <h4>Reflets de Savoie</h4>
              <span className="Prix">480€</span>
              <NavLink to="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </NavLink>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="CaSeprepare">
            <div className="Div-En-Vente">
              <NavLink to={CaSePrepare}>
                <img
                  src={CaSePrepare}
                  alt="Çà se prépare"
                  title="Cliquez pour agrandir"
                ></img>
              </NavLink>
            </div>
            <figcaption>
              <h4>Ca se prépare</h4>
              <span className="Prix">650€</span>
              <NavLink to="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </NavLink>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="OutilsDantan">
            <div className="Div-En-Vente">
              <NavLink to={OutilsDantan}>
                <img
                  src={OutilsDantan}
                  alt="Outils d'antan"
                  title="Cliquez pour agrandir"
                ></img>
              </NavLink>
            </div>
            <figcaption>
              <h4>Outils d'antan</h4>
              <span className="Prix">780€</span>
              <NavLink to="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </NavLink>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
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
              <NavLink to={PainEtConfiture}>
                <img
                  src={PainEtConfiture}
                  alt="Pain et confiture"
                  title="Cliquez pour agrandir"
                ></img>
              </NavLink>
            </div>
            <figcaption>
              <h4>Pain et confiture</h4>
              <span className="Prix">720€</span>
              <NavLink to="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </NavLink>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Une-AutreEpoque">
            <div className="Div-En-Vente">
              <NavLink to={UneAutreEpoque}>
                <img
                  src={UneAutreEpoque}
                  alt="Une autre époque"
                  title="Cliquez pour agrandir"
                ></img>
              </NavLink>
            </div>
            <figcaption>
              <h4>Une autre époque</h4>
              <span className="Prix">580€</span>
              <NavLink to="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </NavLink>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="LeTempsDeslumieres">
            <div className="Div-En-Vente">
              <NavLink to={LeTempsDesLumieres}>
                <img
                  src={LeTempsDesLumieres}
                  alt="Le Temps Des Lumieres Desir"
                ></img>
              </NavLink>
            </div>
            <figcaption>
              <h4>Le temps des lumières</h4>
              <span className="Prix">380€</span>
              <NavLink to="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </NavLink>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Felins">
            <div className="Div-En-Vente">
              <NavLink to={Felins}>
                <img
                  src={Felins}
                  alt="Félins"
                  title="Cliquez pour agrandir"
                ></img>
              </NavLink>
            </div>
            <figcaption>
              <h4>Felins</h4>
              <span className="Prix">250€</span>
              <NavLink to="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </NavLink>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
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
              <NavLink to={CerisesEtFraises}>
                <img
                  src={CerisesEtFraises}
                  alt="Cerises Et fraises"
                  title="Cliquez pour agrandir "
                ></img>
              </NavLink>
            </div>
            <figcaption>
              <h4>Cerises et Fraises</h4>
              <span className="Prix">350€</span>
              <NavLink to="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </NavLink>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Fruits-Dautomne">
            <div className="Div-En-Vente">
              <NavLink to={GrandeFruitsDautomne}>
                <img src={GrandeFruitsDautomne} alt="Fruits D'automne"></img>
              </NavLink>
            </div>
            <figcaption>
              <h4>Fruits d'automne</h4>
              <span className="Prix">250€</span>
              <NavLink to="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </NavLink>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="EnLhonneurDeBacchus">
            <div className="Div-En-Vente">
              <NavLink to={EnLhonneurDeBacchus}>
                <img src={EnLhonneurDeBacchus} alt="L'Honneur De Bacchus"></img>
              </NavLink>
            </div>
            <figcaption>
              <h4>En l'honneur de Bacchus</h4>
              <span className="Prix">480€</span>
              <NavLink to="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </NavLink>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="CuivreEtRaisin">
            <div className="Div-En-Vente">
              <NavLink to={CuivreEtRaisinDesir}>
                <img
                  src={CuivreEtRaisinDesir}
                  alt="Cuivre et raisin"
                  title="Cliquez pour agrandir"
                ></img>
              </NavLink>
            </div>
            <figcaption>
              <h4>Cuivre et raisin</h4>
              <span className="Prix">780€</span>
              <NavLink to="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </NavLink>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
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
              <NavLink to={Cheval}>
                <img
                  src={Cheval}
                  className="galeriePresentation"
                  alt="Cheval"
                ></img>
              </NavLink>
            </div>
            <figcaption>
              <h4>Cheval</h4>
              <span className="Prix">35€</span>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu ">
                  <i className="far fa-heart "></i>
                </span>
                <span className="Coeur-Plein-Menu ">
                  <i className="fas fa-heart "></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Chien">
            <div className="Div-En-Vente">
              <NavLink to={Chien}>
                <img
                  className="galeriePresentation"
                  src={Chien}
                  alt="Chien"
                ></img>
              </NavLink>
            </div>
            <figcaption>
              <h4>Chien</h4>
              <span className="Prix ">50€</span>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu ">
                  <i className="far fa-heart "></i>
                </span>
                <span className="Coeur-Plein-Menu ">
                  <i className="fas fa-heart "></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Iris">
            <div className="Div-En-Vente">
              <NavLink to={Iris}>
                <img
                  className="galeriePresentation"
                  src={Iris}
                  alt="Iris"
                ></img>
              </NavLink>
            </div>
            <figcaption>
              <h4>Iris</h4>
              <span className="Prix ">70€</span>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu ">
                  <i className="far fa-heart "></i>
                </span>
                <span className="Coeur-Plein-Menu ">
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
              <NavLink to={CanicheAbricotSurVelours}>
                <img
                  src={CanicheAbricotSurVelours}
                  alt="Portrait Caniche Abricot Sur Velours"
                ></img>
              </NavLink>
            </div>
            <figcaption>
              <h4>Portrait de caniche abricot sur velours</h4>
              <span className="Prix">20€</span>
              <NavLink to="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </NavLink>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure>
            <div className="Div-En-Vente">
              <NavLink to={TeckelSurVelours}>
                <img
                  src={TeckelSurVelours}
                  alt="Jeune Teckel Sur Velours"
                ></img>
              </NavLink>
            </div>
            <figcaption>
              <h4>Jeune teckel sur velours</h4>
              <span className="Prix">20€</span>
              <NavLink to="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </NavLink>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure>
            <div className="Div-En-Vente">
              <NavLink to={BebeYorkshireSurVelours}>
                <img
                  src={BebeYorkshireSurVelours}
                  alt="Bebe Yorkshire Sur Velours"
                ></img>
              </NavLink>
            </div>
            <figcaption>
              <h4>Bébé yorkshire sur velours </h4>
              <span className="Prix">20€</span>
              <NavLink to="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </NavLink>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure>
            <div className="Div-En-Vente">
              <NavLink to={CanicheBlancSurVelours}>
                <img
                  src={CanicheBlancSurVelours}
                  alt="Caniche Blanc Sur Velours"
                ></img>
              </NavLink>
            </div>
            <figcaption>
              <h4>Caniche blanc sur velours</h4>
              <span className="Prix">20€</span>
              <NavLink to="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </NavLink>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure>
            <div className="Div-En-Vente">
              <NavLink to={YorkshireSurVelours}>
                <img
                  src={YorkshireSurVelours}
                  alt="Yorkshire Sur Velours"
                ></img>
              </NavLink>
            </div>
            <figcaption>
              <h4>Yorkshire sur velours</h4>
              <span className="Prix">20€</span>
              <NavLink to="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </NavLink>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
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
              <NavLink to={GuepierSurVelours}>
                <img src={GuepierSurVelours} alt="Guepier Sur Velours"></img>
              </NavLink>
            </div>
            <figcaption>
              <h4>Guêpier sur velours</h4>
              <span className="Prix">20€</span>
              <NavLink to="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </NavLink>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure>
            <div className="Div-En-Vente">
              <NavLink to={OiseauBleuSurVelours}>
                <img
                  src={OiseauBleuSurVelours}
                  alt="Oiseau Bleu Sur Velours"
                ></img>
              </NavLink>
            </div>
            <figcaption>
              <h4>Oiseau bleu sur velours</h4>
              <span className="Prix">20€</span>
              <NavLink to="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </NavLink>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure>
            <div className="Div-En-Vente">
              <NavLink to={GrandeChouetteSurVelours}>
                <img
                  src={GrandeChouetteSurVelours}
                  alt="Chouette Sur Velours"
                ></img>
              </NavLink>
            </div>
            <figcaption>
              <h4>Chouette sur velours</h4>
              <span className="Prix">20€</span>
              <NavLink to="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </NavLink>
              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure>
            <div className="Div-En-Vente">
              <NavLink to={CanicheGrisSurVelours}>
                <img
                  src={CanicheGrisSurVelours}
                  alt="Caniche Gris Sur Velours"
                ></img>
              </NavLink>
            </div>
            <figcaption>
              <h4>Caniche gris sur velours</h4>
              <span className="Prix">20€</span>
              <NavLink to="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </NavLink>

              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure>
            <div className="Div-En-Vente">
              <NavLink to={HamsterSurVelours}>
                <img
                  src={HamsterSurVelours}
                  alt="Grande Hamster Sur Velours"
                ></img>
              </NavLink>
            </div>
            <figcaption>
              <h4>Hamster sur velours</h4>
              <span className="Prix">20€</span>
              <NavLink to="Fiche">
                <span className="En-Savoir-Plus">En savoir plus</span>
              </NavLink>

              <span className="Dimension-Coeur Compteur ">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
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
