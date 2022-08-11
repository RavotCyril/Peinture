/* Importations Bibliothèques React-router-dom  */
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Loader from "../../components/Loader";
import {
  TransformComponent,
  TransformWrapper,
} from "@pronestor/react-zoom-pan-pinch";

// /* Importations des pages de styles + images */
/* Styles CSS  Icon Full Screen   */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand } from "@fortawesome/free-solid-svg-icons";

import EnLhonneurDeBacchus from "../../images/Sans-Bordure/SansBordure-Grande-En-Lhonneur-De-Bacchus.webp";
import PanierDeFruits from "../../images/TableauxVendu/1997/Panier-De-Fruits.webp";
import PotPourrisDentelles from "../../images/TableauxVendu/1997/Pot-Pourris-Et-Dentelle.webp";
import Calligraphie from "../../images/TableauxVendu/1999/Calligraphie.webp";
import JambonEtPain from "../../images/TableauxVendu/1997/Jambon-Et-Pain.webp";
import Nocturne from "../../images/TableauxVendu/1999/Nocturne.webp";
import LeGouter from "../../images/TableauxVendu/2000/Le-Gouter.webp";
import PetitDejeuner from "../../images/TableauxVendu/2000//Petit-Dejeuner.webp";
import JeuxDhier from "../../images/TableauxVendu/1998/Jeux-Dhier.webp";
import Reflets from "../../images/Sans-Bordure/SansBordure-Grande-Reflets.webp";
import CadreDameJeanne from "../../images/TableauxVendu/2004/Cadre-Dame-Jeanne.webp";
import PichetDoree from "../../images/TableauxVendu/2005/Pipe-Et-Pichet-Doree.webp";
import CaSePrepare from "../../images/TableauxVendu/2005/Cadre-Ca-Se-Prepare.webp";
import FruitsDautomne from "../../images/Sans-Bordure/SansBordure-Grande-Fruits-Dautomne.webp";
import Chien from "../../images/Grande-Images/Chien.webp";
import Cheval from "../../images/Grande-Images/Cheval.webp";
import Iris from "../../images/Grande-Images/Iris.webp";
import { useTheme } from "../../utils/hooks";
import styled from "styled-components";
import colors from "../../utils/style/colors";

var StyledDiv = styled.div`
  filter: ${({ theme }) =>
    theme === "light" ? "grayscale(0%)" : "grayscale(100%)"};
`;

const NightModeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${colors.dark};
  padding-top: 30px;
`;
function Presentation() {
  const [isActiveNatureMorte, setIsActiveNatureMorte] = useState(false);
  const [isActiveVelours, setIsActiveVelours] = useState(false);
  /* Permet de créer un effet icone ( soleil - nuit pour l'effet couleur - Noir / Blanc ) */
  const { toggleTheme, theme } = useTheme();

  const [loading, setLoading] = useState(false);
  const mediaQuery1500_1900 = window.matchMedia(
    "(min-width:1500px) and (max-width:1900px)"
  );

  useEffect(() => {
    if (mediaQuery1500_1900.matches === true) setLoading(true);
  }, []);

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
      {loading ? <Loader /> : null}
      <section className="Bibliographie">
        <h2>
          <NightModeButton id="NightModeButton" onClick={() => toggleTheme()}>
            <span className="NightModeButtonSpan">
              Peinture en Couleur ou effet Noir/ Blanc :
              {theme === "light" ? "☀️" : "🌙"}
            </span>
          </NightModeButton>
        </h2>
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
            vie. Sur 169 tableaux réalisés de 1995 à 2015 il ne reste plus
            que&nbsp;
          </span>
          <span className="bold">
            <span className="Souligner">23 toiles disponibles</span>. N'hésitez
            plus à vous faire plaisir !
          </span>
        </p>
      </section>
      <section className="container">
        <h2
          title="Cliquer sur les boutons ci-dessous 'NATURE MORTE' ou 'VELOURS' pour afficher ou masquer les diaporamas"
          className="H2-Diaporamas"
        >
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
            <h3 title="Cliquer ici pour afficher ou masquer le diaporama des natures mortes">
              Nature Morte
            </h3>
          </NavLink>
          <NavLink
            title="Cliquer ici pour afficher ou masquer le diaporama des velours"
            to="#"
            className="LienVelours"
            onClick={handleClickVelours}
          >
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
            <li
              data-target="#carouselControlsNatureMorte"
              data-slide-to="13"
            ></li>
          </ul>

          <div className="carousel-inner">
            <figure
              id="Jambon et pain"
              className="carousel-item"
              data-interval="100000"
            >
              <div className="FullScreen" title="Mode plein écran">
                <a href={JambonEtPain}>
                  <FontAwesomeIcon icon={faExpand} />
                </a>
              </div>
              <StyledDiv theme={theme} className="Div-Illustration">
                <TransformWrapper>
                  <React.Fragment>
                    <TransformComponent>
                      <img
                        className="galeriePresentation"
                        src={JambonEtPain}
                        alt="Jambon et pain"
                        title="Cliquez pour agrandir"
                      />
                      <span className="Page-Index-Mot-Vendue-Image">Vendu</span>
                    </TransformComponent>
                  </React.Fragment>
                </TransformWrapper>
              </StyledDiv>
              <figcaption>
                <h4>Jambon et pain</h4>
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
              <a href={PanierDeFruits}>
                <div className="FullScreen" title="Mode plein écran">
                  <FontAwesomeIcon icon={faExpand} />
                </div>
              </a>
              <StyledDiv theme={theme} className="Div-Illustration">
                <TransformWrapper>
                  <React.Fragment>
                    <TransformComponent>
                      <img
                        className="galeriePresentation"
                        src={PanierDeFruits}
                        alt="Panier de fruits"
                        title="Cliquez pour agrandir"
                      ></img>
                      <span className="Page-Index-Mot-Vendue-Image">Vendu</span>
                    </TransformComponent>
                  </React.Fragment>
                </TransformWrapper>
              </StyledDiv>
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
              <a href={PotPourrisDentelles}>
                <div className="FullScreen" title="Mode plein écran">
                  <FontAwesomeIcon icon={faExpand} />
                </div>
              </a>
              <StyledDiv theme={theme} className="Div-Illustration">
                <TransformWrapper>
                  <React.Fragment>
                    <TransformComponent>
                      <img
                        className="galeriePresentation"
                        src={PotPourrisDentelles}
                        alt="Pot pourris et dentelle"
                        title="Cliquez pour agrandir"
                      ></img>
                      <span className="Page-Index-Mot-Vendue-Image">Vendu</span>
                    </TransformComponent>
                  </React.Fragment>
                </TransformWrapper>
              </StyledDiv>
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
              id="JeuxDhier"
              className="carousel-item"
              data-interval="100000"
            >
              <a href={JeuxDhier}>
                <div className="FullScreen" title="Mode plein écran">
                  <FontAwesomeIcon icon={faExpand} />
                </div>
              </a>
              <StyledDiv theme={theme} className="Div-Illustration">
                <TransformWrapper>
                  <React.Fragment>
                    <TransformComponent>
                      <img
                        className="galeriePresentation"
                        src={JeuxDhier}
                        alt="Jeux D'hier "
                      ></img>
                      <span className="Page-Index-Mot-Vendue-Image">Vendu</span>
                    </TransformComponent>
                  </React.Fragment>
                </TransformWrapper>
              </StyledDiv>
              <figcaption>
                <h4>Jeux D'hier</h4>
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
              id="Calligraphie"
              className="carousel-item"
              data-interval="100000"
            >
              <a href={Calligraphie}>
                <div className="FullScreen" title="Mode plein écran">
                  <FontAwesomeIcon icon={faExpand} />
                </div>
              </a>
              <StyledDiv theme={theme} className="Div-Illustration">
                <TransformWrapper>
                  <React.Fragment>
                    <TransformComponent>
                      <img
                        className="galeriePresentation"
                        src={Calligraphie}
                        alt="Calligraphie"
                        title="Cliquez pour agrandir"
                      ></img>
                      <span className="Page-Index-Mot-Vendue-Image">Vendu</span>
                    </TransformComponent>
                  </React.Fragment>
                </TransformWrapper>
              </StyledDiv>
              <figcaption>
                <h4>Calligraphie</h4>
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
              id="Nocturne"
              className="carousel-item"
              data-interval="100000"
            >
              <a href={Nocturne}>
                <div className="FullScreen" title="Mode plein écran">
                  <FontAwesomeIcon icon={faExpand} />
                </div>
              </a>
              <StyledDiv theme={theme} className="Div-Illustration">
                <TransformWrapper>
                  <React.Fragment>
                    <TransformComponent>
                      <img
                        className="galeriePresentation"
                        src={Nocturne}
                        alt="Nocturne"
                        title="Cliquez pour agrandir"
                      ></img>
                      <span className="Page-Index-Mot-Vendue-Image">Vendu</span>
                    </TransformComponent>
                  </React.Fragment>
                </TransformWrapper>
              </StyledDiv>
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
              <a href={LeGouter}>
                <div className="FullScreen" title="Mode plein écran">
                  <FontAwesomeIcon icon={faExpand} />
                </div>
              </a>
              <StyledDiv theme={theme} className="Div-Illustration">
                <TransformWrapper>
                  <React.Fragment>
                    <TransformComponent>
                      <img
                        className="galeriePresentation"
                        src={LeGouter}
                        alt="Le Goûter"
                        title="Cliquez pour agrandir"
                      ></img>
                      <span className="Page-Index-Mot-Vendue-Image ">
                        Vendu
                      </span>
                    </TransformComponent>
                  </React.Fragment>
                </TransformWrapper>
              </StyledDiv>
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
              <a theme={theme} href={PetitDejeuner}>
                <div className="FullScreen" title="Mode plein écran">
                  <FontAwesomeIcon icon={faExpand} />
                </div>
              </a>
              <StyledDiv theme={theme} className="Div-Illustration">
                <TransformWrapper>
                  <React.Fragment>
                    <TransformComponent>
                      <img
                        className="galeriePresentation"
                        src={PetitDejeuner}
                        alt="Petit déjeuner"
                        title="Cliquez pour agrandir"
                      ></img>
                      <span className="Page-Index-Mot-Vendue-Image">Vendu</span>
                    </TransformComponent>
                  </React.Fragment>
                </TransformWrapper>
              </StyledDiv>
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
              className="carousel-item "
              data-interval="100000 "
            >
              <a href={Reflets}>
                <div className="FullScreen" title="Mode plein écran">
                  <FontAwesomeIcon icon={faExpand} />
                </div>
              </a>
              <StyledDiv theme={theme} className="Div-Illustration">
                <TransformWrapper>
                  <React.Fragment>
                    <TransformComponent>
                      <img
                        className="galeriePresentation"
                        src={Reflets}
                        alt="Reflets"
                      ></img>
                      <span className="Page-Index-Mot-Vendue-Image ">
                        Vendu
                      </span>
                    </TransformComponent>
                  </React.Fragment>
                </TransformWrapper>
              </StyledDiv>
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
              id="Dame-Jeanne"
              className="carousel-item"
              data-interval="100000"
            >
              <a href={CadreDameJeanne}>
                <div className="FullScreen" title="Mode plein écran">
                  <FontAwesomeIcon icon={faExpand} />
                </div>
              </a>
              <StyledDiv theme={theme} className="Div-Illustration ">
                <TransformWrapper>
                  <React.Fragment>
                    <TransformComponent>
                      <img
                        className="galeriePresentation "
                        src={CadreDameJeanne}
                        alt="Dame Jeanne "
                        title="Cliquez pour agrandir "
                      ></img>
                    </TransformComponent>
                  </React.Fragment>
                </TransformWrapper>
              </StyledDiv>
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
              <a href={PichetDoree}>
                <div className="FullScreen" title="Mode plein écran">
                  <FontAwesomeIcon icon={faExpand} />
                </div>
              </a>
              <StyledDiv theme={theme} className="Div-Illustration ">
                <TransformWrapper>
                  <React.Fragment>
                    <TransformComponent>
                      <img
                        className="galeriePresentation "
                        src={PichetDoree}
                        alt="Pipe et pichet doré "
                        title="Cliquez pour agrandir "
                      ></img>
                      <span className="Page-Index-Mot-Vendue-Image ">
                        Vendu
                      </span>
                    </TransformComponent>
                  </React.Fragment>
                </TransformWrapper>
              </StyledDiv>
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
              <a href={CaSePrepare}>
                <div className="FullScreen" title="Mode plein écran">
                  <FontAwesomeIcon icon={faExpand} />
                </div>
              </a>
              <StyledDiv theme={theme} className="Div-Illustration ">
                <TransformWrapper>
                  <React.Fragment>
                    <TransformComponent>
                      <img
                        className="galeriePresentation "
                        src={CaSePrepare}
                        alt="Çà se prépare "
                        title="Cliquez pour agrandir "
                      ></img>
                    </TransformComponent>
                  </React.Fragment>
                </TransformWrapper>
              </StyledDiv>
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
              id="En-Lhonneur-De-Bacchus"
              className="carousel-item"
              data-interval="100000"
            >
              <a href={EnLhonneurDeBacchus}>
                <div className="FullScreen" title="Mode plein écran">
                  <FontAwesomeIcon icon={faExpand} />
                </div>
              </a>
              <StyledDiv
                theme={theme}
                className="Div-Illustration zoom-in-out-box"
              >
                <TransformWrapper>
                  <React.Fragment>
                    <TransformComponent>
                      <img
                        className="galeriePresentation"
                        src={EnLhonneurDeBacchus}
                        alt="En L'honneur De Bacchus"
                        title="Cliquez pour agrandir"
                      ></img>
                    </TransformComponent>
                  </React.Fragment>
                </TransformWrapper>
              </StyledDiv>
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
              id="Fruits-Dautomne"
              className="carousel-item"
              data-interval="100000 "
            >
              <a href={FruitsDautomne}>
                <div className="FullScreen" title="Mode plein écran">
                  <FontAwesomeIcon icon={faExpand} />
                </div>
              </a>
              <StyledDiv theme={theme} className="Div-Illustration">
                <TransformWrapper>
                  <React.Fragment>
                    <TransformComponent>
                      <img
                        className="galeriePresentation"
                        src={FruitsDautomne}
                        alt="Fruits Dautomne"
                      ></img>
                    </TransformComponent>
                  </React.Fragment>
                </TransformWrapper>
              </StyledDiv>
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
              <a href={Cheval}>
                <div className="FullScreen" title="Mode plein écran">
                  <FontAwesomeIcon icon={faExpand} />
                </div>
              </a>
              <StyledDiv theme={theme} className="Div-Illustration">
                <TransformWrapper>
                  <React.Fragment>
                    <TransformComponent>
                      <img
                        className="galeriePresentation"
                        src={Cheval}
                        alt="Cheval"
                      ></img>
                    </TransformComponent>
                  </React.Fragment>
                </TransformWrapper>
              </StyledDiv>
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
              <a href={Chien}>
                <div className="FullScreen" title="Mode plein écran">
                  <FontAwesomeIcon icon={faExpand} />
                </div>
              </a>
              <StyledDiv theme={theme} className="Div-Illustration">
                <TransformWrapper>
                  <React.Fragment>
                    <TransformComponent>
                      <img
                        className="galeriePresentation"
                        src={Chien}
                        alt="Chien"
                      ></img>
                    </TransformComponent>
                  </React.Fragment>
                </TransformWrapper>
              </StyledDiv>
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
              <a href={Iris}>
                <div className="FullScreen" title="Mode plein écran">
                  <FontAwesomeIcon icon={faExpand} />
                </div>
              </a>
              <StyledDiv theme={theme} className="Div-Illustration">
                <TransformWrapper>
                  <React.Fragment>
                    <TransformComponent>
                      <img
                        className="galeriePresentation"
                        src={Iris}
                        alt="Iris"
                      ></img>
                    </TransformComponent>
                  </React.Fragment>
                </TransformWrapper>
              </StyledDiv>
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
