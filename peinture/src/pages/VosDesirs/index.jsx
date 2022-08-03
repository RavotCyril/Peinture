/* Importations Bibliothèques React-router-dom  */
import React from "react";

import AvantLeDepart from "../../images/Grande-Images/Grande-Image-Avant-Le-Départ.webp";
import ChocolatChaud from "../../images/Grande-Images/Grande-Cafe-Et-Chocolat.webp";
import SouvenirsMarin from "../../images/TableauxVendu/1998/Cadre-Souvenirs-Marin.jpg";
import Dentiste from "../../images/TableauxVendu/2002/Dentiste.jpg";
import BelleEpoque from "../../images/TableauxVendu/1997/Belle-Epoque.jpg";

function VosDesirs() {
  return (
    <main>
      <section className="VosDesirs">
        <h2 className="Vos-Desirs-Titre-H2-Principal">
          Personnalisation d'une peinture
        </h2>
        <h2>Rare !</h2>
        <p>
          Je vous propose de créer une oeuvre avec vos propres objets, jeux qui
          vous parlent personnellement, souvenirs de famille, de voyages, d'une
          profession, qui vous tiennent à coeur...{" "}
        </p>
        <p>
          Vous pouvez me soumettre plusieurs éléments à combiner, un seul que
          nous pourrons relier à un thème à associer à d'autres afin de lui
          donner une nouvelle vie, une parcelle d'éternité...{"\n"}Vous pouvez
          aussi avoir simplement une idée, un désir, un thème particulier...
        </p>
        <h2>Concrètement</h2>
        <p>
          Vous me confiez vos objets et je vous propose plusieurs montages
          photographiques {"\n"}Vous faites le choix du modèle et du format.(je
          me permettrai de vous conseiller afin qu'il soit cohérent avec la
          taille réelle du sujet)
        </p>
        <p>
          Le coût sera de 20% supérieur au tarif ordinaire à format égal pour
          tenir compte du travail de péparation
        </p>
      </section>
      <section className="Section-galerie-Vos-Desirs">
        <h2 className="Titre-Section-galerie-Vos-Desirs">
          Voici quelques exemples
        </h2>
        <div className="Div-Section-Galerie">
          <div className="Div-Montagne">
            <h2 className="Montagne">Thème Montagne</h2>
            <figure className="Figure-Vos-Desirs1">
              <div>
                <a href={AvantLeDepart}>
                  <img src={AvantLeDepart} alt="Avant Le Départ"></img>
                </a>
              </div>
              <figcaption>
                <h4>Avant le départ</h4>
                <a href="Fiche">
                  <span className="En-Savoir-Plus">En savoir plus</span>
                </a>
                <span className="Dimension-Coeur Compteur ">
                  <span className="Coeur-Vide-Menu">
                    <i className="far fa-heart"></i>
                  </span>
                  <span className="Coeur-Plein-Menu-Desir">
                    <i className="fas fa-heart"></i>
                  </span>
                </span>
              </figcaption>
            </figure>
          </div>
          <div className="Div-Au-Quotidien">
            <h2 className="Au-Quotidien">Thème Au Quotidien</h2>
            <figure className="Figure-Vos-Desirs2">
              <div>
                <a href={ChocolatChaud}>
                  <img src={ChocolatChaud} alt="Chocolat chaud"></img>
                </a>
              </div>
              <figcaption>
                <h4>Chocolat chaud</h4>
                <a href="Fiche">
                  <span className="En-Savoir-Plus">En savoir plus</span>
                </a>
                <span className="Dimension-Coeur Compteur ">
                  <span className="Coeur-Vide-Menu">
                    <i className="far fa-heart"></i>
                  </span>
                  <span className="Coeur-Plein-Menu-Desir">
                    <i className="fas fa-heart"></i>
                  </span>
                </span>
              </figcaption>
            </figure>
          </div>
          <div className="Div-Marin">
            <h2 className="Marin">Thème Divers</h2>
            <figure id="Souvenirs-Marins" className="Figure-Vos-Desirs3">
              <div>
                <a href={SouvenirsMarin}>
                  <img
                    src={SouvenirsMarin}
                    alt="Souvenirs Marins"
                    title="Cliquez pour agrandir"
                  />
                </a>
              </div>
              <figcaption>
                <h4>Souvenirs marins</h4>
                <a href="Fiche">
                  <span className="En-Savoir-Plus">En savoir plus</span>
                </a>
                <span className="Dimension-Coeur Compteur ">
                  <span className="Coeur-Vide-Menu">
                    <i className="far fa-heart"></i>
                  </span>
                  <span className="Coeur-Plein-Menu-Desir">
                    <i className="fas fa-heart"></i>
                  </span>
                </span>
              </figcaption>
            </figure>
          </div>
          <div className="Div-Dentiste">
            <h2 className="Dentiste">Thème Divers</h2>
            <figure id="Dentiste" className="Figure-Vos-Desirs1">
              <div className="Div-Reserve">
                <a href={Dentiste}>
                  <img
                    src={Dentiste}
                    alt="Dentiste"
                    title="Cliquez pour agrandir"
                  />
                </a>
                <span className="Mot-Reserve-Image">Reservé</span>
              </div>
              <figcaption>
                <h4>Dentiste</h4>
                <span className="Dimension-Coeur Compteur ">
                  <span className="Coeur-Vide-Menu">
                    <i className="far fa-heart"></i>
                  </span>
                  <span className="Coeur-Plein-Menu-Desir">
                    <i className="fas fa-heart"></i>
                  </span>
                </span>
              </figcaption>
            </figure>
          </div>
          <div className="Div-Belle-Epoque">
            <h2 className="Dentiste">Thème Divers</h2>
            <figure id="BelleEpoque" className="Figure-Vos-Desirs3">
              <div className="Div-Reserve">
                <a href={BelleEpoque}>
                  <img
                    src={BelleEpoque}
                    alt="Belle époque"
                    title="Cliquez pour agrandir"
                  />
                </a>
              </div>
              <figcaption>
                <h4>Belle époque</h4>
                <a href="Fiche">
                  <span className="En-Savoir-Plus">En savoir plus</span>
                </a>
                <span className="Dimension-Coeur Compteur ">
                  <span className="Coeur-Vide-Menu">
                    <i className="far fa-heart"></i>
                  </span>
                  <span className="Coeur-Plein-Menu-Desir">
                    <i className="fas fa-heart"></i>
                  </span>
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
}
export default VosDesirs;
