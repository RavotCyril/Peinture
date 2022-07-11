/* Importations Bibliothèques React-router-dom  */
import React from "react";

/* Importations Images  */
import PrixMireilleRossignol from "../../PhotosRevueDePresse/Prix-Mireille-Rossignol.jpg";
import PrixPeintureTerroirDeFrance from "../../PhotosRevueDePresse/Prix-Peinture-Terroir-De-France.jpg";
import DeuxVourloisAuLUCAO from "../../PhotosRevueDePresse/Deux-Vourlois-A-LUCAO.jpg";
import LaMontagneSaccroche from "../../PhotosRevueDePresse/La-Montagne-Saccroche.jpg";
import UnePaletteDePeintureAmateur from "../../PhotosRevueDePresse/Une-Palette-De-Peintre-Amateur.jpg";
import TroisArtistesVourloisALaMaisonDePays from "../../PhotosRevueDePresse/Trois-Artistes-Vourlois-A-La-Maison-De-Pays.jpg";
import AuCoeurDeVourlesLePetitDejeuner from "../../PhotosRevueDePresse/Au-Coeur-De-Vourles-Le-Petit-Dejeuner.jpg";
import PremierPrix2006PeintureCaSePrepare from "../../PhotosRevueDePresse/1er-Prix-2006-Peinture-Ca-Se-Prepare.jpg";

function RevueDePresse() {
  return (
    <main>
      <section className="Revue-De-Presse">
        <h2 className="H2-Revue-De-Presse">
          Plusieurs Publications de mes oeuvres pendant des expositions
        </h2>
        <h2 className="H2-Revue-De-Presse-2009">Année 2009</h2>
        <div className="Revue-De-Presse-2009-Galerie1">
          <figure>
            <figcaption>
              <h3>Lions Club</h3>
            </figcaption>
            <div className="LionsClub">
              <a href={PrixMireilleRossignol}>
                <img
                  src={PrixMireilleRossignol}
                  alt="Prix Mireille Rossignol"
                />
              </a>
            </div>
          </figure>
          <figure>
            <figcaption>
              <h3>Printemps d'Ozon</h3>
            </figcaption>
            <div className="PrintempsDozon">
              <a href={PrixPeintureTerroirDeFrance}>
                <img
                  src={PrixPeintureTerroirDeFrance}
                  alt="Prix peinture terroir de France"
                />
              </a>
            </div>
          </figure>
        </div>
        <div className="Revue-De-Presse-2009-Galerie2">
          <figure>
            <figcaption>
              <h3>UCAO</h3>
            </figcaption>
            <div className="UCAO">
              <a href={DeuxVourloisAuLUCAO}>
                <img src={DeuxVourloisAuLUCAO} alt="Deux Vourlois à LUCAO" />
              </a>
            </div>
          </figure>
          <figure>
            <figcaption>
              <h3>La Montagne</h3>
            </figcaption>
            <div className="LaMontagne">
              <a href={LaMontagneSaccroche}>
                <img src={LaMontagneSaccroche} alt="La montagne s'accroche" />
              </a>
            </div>
          </figure>
        </div>
        <div className="Revue-De-Presse-2000-2006">
          <div className="Div-PeintreAmateurs">
            <figure>
              <figcaption>
                <h2 className="H2-Revue-De-Presse-2000">Année 2000</h2>
                <h3>Peintres amateurs</h3>
              </figcaption>
              <div className="PeintresAmateurs">
                <a href={UnePaletteDePeintureAmateur}>
                  <img
                    src={UnePaletteDePeintureAmateur}
                    alt="Une Palette de peinture Amateur"
                  />
                </a>
              </div>
            </figure>
          </div>
          <div className="Div-PeintreAmateurs">
            <figure>
              <figcaption>
                <h2 className="H2-Revue-De-Presse-2000">Année 2000</h2>
                <h3>Trois Artistes Vourlois A La Maison De Pays</h3>
              </figcaption>
              <div className="PeintresAmateurs">
                <a href={TroisArtistesVourloisALaMaisonDePays}>
                  <img
                    src={TroisArtistesVourloisALaMaisonDePays}
                    alt="Trois Artistes Vourlois A La Maison De Pays"
                  />
                </a>
              </div>
            </figure>
          </div>
          <div className="Div-PeintreAmateurs">
            <figure>
              <figcaption>
                <h2 className="H2-Revue-De-Presse-2000">Année 2000</h2>
                <h3>Au Coeur De Vourles Le Petit-Dejeuner</h3>
              </figcaption>
              <div className="PeintresAmateurs">
                <a href={AuCoeurDeVourlesLePetitDejeuner}>
                  <img
                    src={AuCoeurDeVourlesLePetitDejeuner}
                    alt="Au Coeur De Vourles Le Petit-Dejeuner"
                  />
                </a>
              </div>
            </figure>
          </div>
          <div className="Div-SalonArtistique">
            <figure>
              <figcaption>
                <h2 className="H2-Revue-De-Presse-2006">Année 2006</h2>
                <h3>Salon Artistique</h3>
              </figcaption>
              <div className="SalonArtistique">
                <a href={PremierPrix2006PeintureCaSePrepare}>
                  <img
                    src={PremierPrix2006PeintureCaSePrepare}
                    alt="1er Prix 2006 Peinture ça se prépare"
                  />
                </a>
              </div>
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
}
export default RevueDePresse;
