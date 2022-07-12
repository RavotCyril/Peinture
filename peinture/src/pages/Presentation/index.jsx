/* Importations Bibliothèques React-router-dom  */
import { useState } from "react";
import { NavLink } from "react-router-dom";

import EnLhonneurDeBacchus from "../../images/Sans-Bordure/SansBordure-Grande-En-Lhonneur-De-Bacchus.jpg";
import PanierDeFruits from "../../images/TableauxVendu/1997/Panier-De-Fruits.jpg";
import PotPourrisDentelles from "../../images/TableauxVendu/1997/Pot-Pourris-Et-Dentelle.jpg";
import JambonEtPain from "../../images/TableauxVendu/1997/Jambon-Et-Pain.jpg";
import Nocturne from "../../images/TableauxVendu/1999/Nocturne.jpg";
import LeGouter from "../../images/TableauxVendu/2000/Le-Gouter.jpg";
import PetitDejeuner from "../../images/TableauxVendu/2000//Petit-Dejeuner.jpg";
import Reflets from "../../images/Grande-Images/Grande-Reflets-De-Savoie.webp";
import RefletsDeSavoie from "../../images/Sans-Bordure/SansBordure-Grande-Reflets-De-Savoie.jpg";
import CadreDameJeanne from "../../images/TableauxVendu/2004/Cadre-Dame-Jeanne.jpg";
import PichetDoree from "../../images/TableauxVendu/2005/Pipe-Et-Pichet-Doree.jpg";
import CaSePrepare from "../../images/TableauxVendu/2005/Cadre-Ca-Se-Prepare.jpg";
import FruitsDautomne from "../../images/Sans-Bordure/SansBordure-Grande-Fruits-Dautomne.jpg";
import Chien from "../../images/Grande-Images/Chien.webp";
import Cheval from "../../images/Grande-Images/Cheval.webp";
import Iris from "../../images/Grande-Images/Iris.webp";

function Presentation() {
  /* ---------------------- Function Navigation Illustration Page Présentation début-------------------------------------*/
  const [isActiveNatureMorte, setIsActiveNatureMorte] = useState(false);
  const [isActiveVelours, setIsActiveVelours] = useState(false);

  const handleClickNatureMorte = (event) => {
    //  bascule l'état isActive au clic sur les natures mortes
    setIsActiveNatureMorte((current) => !current);
  };

  const handleClickVelours = (event) => {
    //  bascule l'état isActive au clic sur les velours
    setIsActiveVelours((current) => !current);
  };

  /* ---------------------- Function Navigation Illustration Page Présentation Fin-------------------------------------*/
  return (
    <main className="MainPartiePrincipalePresentation">
      <section className="Bibliographie">
        <h2 className="H2-Bibliographie">L'&nbsp;auteur</h2>
        <p>
          Née en <span className="bold">1956</span>, j’ai été attirée par le
          dessin et la peinture dès mon plus jeune âge. Après avoir obtenu mon
          bac en 1973 j’entre aux beaux- arts de Lyon mais je n’y reste qu’un
          an, déroutée par la peinture moderne qu’on y enseigne alors. Je
          m’oriente ensuite dans les arts appliqués où je deviens modéliste
          après l’obtention de deux C.A.P. en bijouterie et joaillerie. A partir
          de 1983 je me consacre à ma famille. Je reviens à la peinture en
          <span className="bold"> 1990</span> en commençant par de la&nbsp;
          <span className="bold">peinture sur velours</span>&nbsp;puis quelques
          copies de grands maîtres qui affinent ma technique. Je me découvre
          alors une prédilection pour&nbsp;
          <span className="bold">les natures mortes</span> que je pratique
          depuis en autodidacte en privilégiant les éclairages naturels.
        </p>
        <p>
          On peut trouver&nbsp;
          <span className="bold">
            deux signatures présentes sur les tableaux pour deux périodes de ma
            vie.
          </span>
          <span className="bold">
            Sur 169 tableaux réalisés de 1995 à 2015 il ne reste plus que&nbsp;
            <span className="Souligner">23 toiles disponibles</span>
            .N'hésitez plus à vous faire plaisir !
          </span>
        </p>
      </section>
      <section className="container">
        <h2 className="H2-Diaporamas">
          Diaporamas d'illustration de peintures
        </h2>
        <div
          id="NavigationIllustrationSelection"
          className="TitrePresentationIllustration"
        >
          <NavLink
            to="#"
            className="LienNatureMorte"
            onClick={handleClickNatureMorte}
          >
            <h3>Nature Morte</h3>
          </NavLink>
          <NavLink to="#" className="LienVelours" onClick={handleClickVelours}>
            <h3>Velours</h3>
          </NavLink>
        </div>
        <div
          id="carouselControlsNatureMorte"
          className={
            isActiveNatureMorte
              ? "CacheIllustrationNatureMorte"
              : "carousel slide carousel-fade Photo-Presentation"
          }
          data-ride="carousel"
        >
          {/*  -->  Indicateurs  -->  */}

          <ul className="carousel-indicators">
            <li
              data-target="#carouselControlsNatureMorte"
              data-slide-to="0"
            ></li>
            <li
              data-target="#carouselControlsNatureMorte"
              data-slide-to="1"
            ></li>
            <li
              data-target="#carouselControlsNatureMorte"
              data-slide-to="2"
            ></li>
            <li
              data-target="#carouselControlsNatureMorte"
              data-slide-to="3"
            ></li>
            <li
              data-target="#carouselControlsNatureMorte"
              data-slide-to="4"
            ></li>
            <li
              data-target="#carouselControlsNatureMorte"
              data-slide-to="5"
            ></li>
            <li
              data-target="#carouselControlsNatureMorte"
              data-slide-to="6"
              className="active"
            ></li>
            <li
              data-target="#carouselControlsNatureMorte"
              data-slide-to="7"
            ></li>
            <li
              data-target="#carouselControlsNatureMorte"
              data-slide-to="8"
            ></li>
            <li
              data-target="#carouselControlsNatureMorte"
              data-slide-to="9"
            ></li>
            <li
              data-target="#carouselControlsNatureMorte"
              data-slide-to="10"
            ></li>
            <li
              data-target="#carouselControlsNatureMorte"
              data-slide-to="11"
            ></li>
            <li
              data-target="#carouselControlsNatureMorte"
              data-slide-to="12"
            ></li>
          </ul>

          <div className="carousel-inner">
            <figure
              id="En-Lhonneur-De-Bacchus"
              className="carousel-item"
              data-interval="100000"
            >
              <div className="Div-Illustration">
                <a href={EnLhonneurDeBacchus}>
                  <img
                    className="galeriePresentation "
                    src={EnLhonneurDeBacchus}
                    alt="En L 'honneur De Bacchus"
                  ></img>
                </a>
              </div>
              <figcaption>
                <h4>En L'honneur De Bacchus</h4>
                <span className="Dimension-Coeur Compteur">
                  <span className="Coeur-Vide-Menu">
                    <i className="far fa-heart"></i>
                  </span>
                  <span className="Coeur-Plein-Menu-index">
                    <i className="fas fa-heart"></i>
                  </span>
                </span>
              </figcaption>
            </figure>
            <figure
              id="Panier-de-fruits"
              className="carousel-item"
              data-interval="100000"
            >
              <div className="Div-Illustration">
                <a href={PanierDeFruits}>
                  <img
                    className="galeriePresentation"
                    src={PanierDeFruits}
                    alt="Panier de fruits"
                    title="Cliquez pour agrandir"
                  ></img>
                </a>
                <span className="Page-Index-Mot-Vendue-Image">Vendu</span>
              </div>
              <figcaption>
                <h4>Panier de fruits</h4>
                <span className="Dimension-Coeur Compteur">
                  <span className="Coeur-Vide-Menu">
                    <i className="far fa-heart"></i>
                  </span>
                  <span className="Coeur-Plein-Menu-index">
                    <i className="fas fa-heart"></i>
                  </span>
                </span>
              </figcaption>
            </figure>
            <figure
              id="Pot-Pourris-Et-Dentelle"
              className="carousel-item"
              data-interval="100000"
            >
              <div className="Div-Illustration">
                <a href={PotPourrisDentelles}>
                  <img
                    className="galeriePresentation"
                    src={PotPourrisDentelles}
                    alt="Pot pourris et dentelle"
                    title="Cliquez pour agrandir"
                  ></img>
                </a>
                <span className="Page-Index-Mot-Vendue-Image">Vendu</span>
              </div>
              <figcaption>
                <h4>Pot pourris et dentelle</h4>
                <span className="Dimension-Coeur Compteur">
                  <span className="Coeur-Vide-Menu">
                    <i className="far fa-heart"></i>
                  </span>
                  <span className="Coeur-Plein-Menu-index">
                    <i className="fas fa-heart"></i>
                  </span>
                </span>
              </figcaption>
            </figure>
            <figure
              id="Jambon et pain"
              class="carousel-item"
              data-interval="100000"
            >
              <div class="Div-Illustration">
                <a href={JambonEtPain}>
                  <img
                    class="galeriePresentation"
                    src={JambonEtPain}
                    alt="Jambon et pain"
                    title="Cliquez pour agrandir"
                  />
                </a>
                <span class="Page-Index-Mot-Vendue-Image">Vendu</span>
              </div>
              <figcaption>
                <h4>Jambon et pain</h4>
                <span class="Dimension-Coeur Compteur" onclick="Compteur()">
                  <span class="Coeur-Vide-Menu">
                    <i class="far fa-heart"></i>
                  </span>
                  <span class="Coeur-Plein-Menu-index">
                    <i class="fas fa-heart"></i>
                  </span>
                </span>
              </figcaption>
            </figure>
            <figure
              id="Nocturne"
              className="carousel-item"
              data-interval="100000"
            >
              <div className="Div-Illustration">
                <a href={Nocturne}>
                  <img
                    className="galeriePresentation"
                    src={Nocturne}
                    alt="Nocturne"
                    title="Cliquez pour agrandir"
                  ></img>
                </a>
                <span className="Page-Index-Mot-Vendue-Image">Vendu</span>
              </div>
              <figcaption>
                <h4>Nocturne</h4>
                <span className="Dimension-Coeur Compteur">
                  <span className="Coeur-Vide-Menu">
                    <i className="far fa-heart"></i>
                  </span>
                  <span className="Coeur-Plein-Menu-index">
                    <i className="fas fa-heart"></i>
                  </span>
                </span>
              </figcaption>
            </figure>
            <figure
              id="Le-Gouter"
              className="carousel-item"
              data-interval=" 100000 "
            >
              <div className="Div-Illustration">
                <a href={LeGouter}>
                  <img
                    className="galeriePresentation"
                    src={LeGouter}
                    alt="Le Goûter"
                    title="Cliquez pour agrandir"
                  ></img>
                </a>
                <span className="Page-Index-Mot-Vendue-Image ">Vendu</span>
              </div>
              <figcaption>
                <h4>Le goûter</h4>
                <span className="Dimension-Coeur Compteur">
                  <span className="Coeur-Vide-Men ">
                    <i className="far fa-heart "></i>
                  </span>
                  <span className="Coeur-Plein-Menu-index">
                    <i className="fas fa-heart "></i>
                  </span>
                </span>
              </figcaption>
            </figure>
            <figure
              id="Petit-Dejeuner"
              className="carousel-item active"
              data-interval="100000"
            >
              <div className="Div-Illustration">
                <a href={PetitDejeuner}>
                  <img
                    className="galeriePresentation"
                    src={PetitDejeuner}
                    alt="Petit déjeuner"
                    title="Cliquez pour agrandir"
                  ></img>
                </a>
                <span className="Page-Index-Mot-Vendue-Image">Vendu</span>
              </div>
              <figcaption>
                <h4>Petit déjeuner</h4>
                <span className="Dimension-Coeur Compteur">
                  <span className="Coeur-Vide-Menu ">
                    <i className="far fa-heart "></i>
                  </span>
                  <span className="Coeur-Plein-Menu-index">
                    <i className="fas fa-heart"></i>
                  </span>
                </span>
              </figcaption>
            </figure>
            <figure
              id="Reflets"
              className="carousel-item"
              data-interval="100000"
            >
              <div className="Div-Illustration">
                <a href={Reflets}>
                  <img
                    className="galeriePresentation"
                    src={Reflets}
                    alt="Reflets "
                  ></img>
                </a>
              </div>
              <figcaption>
                <h4>Reflets</h4>
                <span className="Dimension-Coeur Compteur">
                  <span className="Coeur-Vide-Menu ">
                    <i className="far fa-heart "></i>
                  </span>
                  <span className="Coeur-Plein-Menu-index">
                    <i className="fas fa-heart "></i>
                  </span>
                </span>
              </figcaption>
            </figure>
            <figure
              id="Reflets-De-Savoie "
              className="carousel-item "
              data-interval="100000 "
            >
              <div className="Div-Illustration">
                <a href={RefletsDeSavoie}>
                  <img
                    className="galeriePresentation"
                    src={RefletsDeSavoie}
                    alt="Reflets De Savoie "
                  ></img>
                </a>
              </div>
              <figcaption>
                <h4>Reflets De Savoie</h4>
                <span className="Dimension-Coeur Compteur ">
                  <span className="Coeur-Vide-Menu ">
                    <i className="far fa-heart "></i>
                  </span>
                  <span className="Coeur-Plein-Menu-index ">
                    <i className="fas fa-heart "></i>
                  </span>
                </span>
              </figcaption>
            </figure>
            <figure
              id="Dame-Jeanne "
              className="carousel-item "
              data-interval="100000 "
            >
              <div className="Div-Illustration ">
                <a href={CadreDameJeanne}>
                  <img
                    className="galeriePresentation "
                    src={CadreDameJeanne}
                    alt="Dame Jeanne "
                    title="Cliquez pour agrandir "
                  ></img>
                </a>
                <span className="Page-Index-Mot-Vendue-Image ">Vendu</span>
              </div>
              <figcaption>
                <h4>Dame Jeanne</h4>
                <span className="Dimension-Coeur Compteur ">
                  <span className="Coeur-Vide-Menu ">
                    <i className="far fa-heart "></i>
                  </span>
                  <span className="Coeur-Plein-Menu-index ">
                    <i className="fas fa-heart "></i>
                  </span>
                </span>
              </figcaption>
            </figure>
            <figure
              id="PipeEtunPichetDore "
              className="carousel-item "
              data-interval="100000 "
            >
              <div className="Div-Illustration ">
                <a href={PichetDoree}>
                  <img
                    className="galeriePresentation "
                    src={PichetDoree}
                    alt="Pipe et pichet doré "
                    title="Cliquez pour agrandir "
                  ></img>
                </a>
                <span className="Page-Index-Mot-Vendue-Image ">Vendu</span>
              </div>
              <figcaption>
                <h4>Pipe et un pichet doré</h4>
                <span className="Dimension-Coeur Compteur ">
                  <span className="Coeur-Vide-Menu ">
                    <i className="far fa-heart "></i>
                  </span>
                  <span className="Coeur-Plein-Menu-index ">
                    <i className="fas fa-heart "></i>
                  </span>
                </span>
              </figcaption>
            </figure>
            <figure
              id="CaSeprepare "
              className="carousel-item "
              data-interval="100000 "
            >
              <div className="Div-Illustration ">
                <a href={CaSePrepare}>
                  <img
                    className="galeriePresentation "
                    src={CaSePrepare}
                    alt="Çà se prépare "
                    title="Cliquez pour agrandir "
                  ></img>
                </a>
                <span className="Page-Index-Mot-Vendue-Image ">Vendu</span>
              </div>
              <figcaption>
                <h4>Çà se prépare</h4>
                <span className="Dimension-Coeur Compteur ">
                  <span className="Coeur-Vide-Menu ">
                    <i className="far fa-heart "></i>
                  </span>
                  <span className="Coeur-Plein-Menu-index ">
                    <i className="fas fa-heart "></i>
                  </span>
                </span>
              </figcaption>
            </figure>
            <figure
              id="Fruits-Dautomne"
              className="carousel-item"
              data-interval="100000 "
            >
              <div className="Div-Illustration">
                <a href={FruitsDautomne}>
                  <img
                    className="galeriePresentation"
                    src={FruitsDautomne}
                    alt="Fruits Dautomne"
                  ></img>
                </a>
              </div>
              <figcaption>
                <h4>Fruits D'automne</h4>
                <span className="Dimension-Coeur Compteur">
                  <span className="Coeur-Vide-Menu">
                    <i className="far fa-heart "></i>
                  </span>
                  <span className="Coeur-Plein-Menu-index">
                    <i className="fas fa-heart "></i>
                  </span>
                </span>
              </figcaption>
            </figure>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselControlsNatureMorte"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only ">Précédent</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselControlsNatureMorte"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only ">Suivant</span>
          </a>
        </div>
        <div
          id="carouselControlsVelours"
          className={
            isActiveVelours
              ? "CacheIllustrationVelours"
              : "carousel slide carousel-fade Photo-Presentation"
          }
          data-ride="carousel"
        >
          {/*   <!-- Indicateurs -->*/}
          <ul className="carousel-indicators">
            <li data-target="#carouselControlsVelours" data-slide-to="0"></li>
            <li
              data-target="#carouselControlsVelours"
              data-slide-to="1"
              className="active "
            ></li>
            <li data-target="#carouselControlsVelours" data-slide-to="2"></li>
          </ul>

          {/*   Carrousel Velours*/}
          <div className="carousel-inner">
            <figure
              id="Cheval"
              className="carousel-item"
              data-interval="100000"
            >
              <div className="Div-Illustration">
                <a href={Cheval}>
                  <img
                    className="galeriePresentation"
                    src={Cheval}
                    alt="Cheval"
                  ></img>
                </a>
              </div>
              <figcaption>
                <h4>Cheval</h4>
                <span className="Prix">35€</span>
                <span className="Dimension-Coeur Compteur">
                  <span className="Coeur-Vide-Menu ">
                    <i className="far fa-heart "></i>
                  </span>
                  <span className="Coeur-Plein-Menu-index">
                    <i className="fas fa-heart "></i>
                  </span>
                </span>
              </figcaption>
            </figure>
            <figure
              id="Chien"
              className="carousel-item active"
              data-interval="100000"
            >
              <div className="Div-Illustration">
                <a href={Chien}>
                  <img
                    className="galeriePresentation"
                    src={Chien}
                    alt="Chien"
                  ></img>
                </a>
              </div>
              <figcaption>
                <h4>Chien</h4>
                <span className="Prix ">50€</span>
                <span className="Dimension-Coeur Compteur">
                  <span className="Coeur-Vide-Menu ">
                    <i className="far fa-heart "></i>
                  </span>
                  <span className="Coeur-Plein-Menu-index">
                    <i className="fas fa-heart "></i>
                  </span>
                </span>
              </figcaption>
            </figure>
            <figure id="Iris" className="carousel-item" data-interval="100000">
              <div className="Div-Illustration">
                <a href={Iris}>
                  <img
                    className="galeriePresentation"
                    src={Iris}
                    alt="Iris"
                  ></img>
                </a>
              </div>
              <figcaption>
                <h4>Iris</h4>
                <span className="Prix ">70€</span>
                <span className="Dimension-Coeur Compteur">
                  <span className="Coeur-Vide-Menu ">
                    <i className="far fa-heart "></i>
                  </span>
                  <span className="Coeur-Plein-Menu-index">
                    <i className="fas fa-heart "></i>
                  </span>
                </span>
              </figcaption>
            </figure>
            <a
              className="carousel-control-prev"
              href="#carouselControlsVelours"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only ">Précédent</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselControlsVelours"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only ">Suivant</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
export default Presentation;
