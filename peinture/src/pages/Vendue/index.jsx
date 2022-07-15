/* Importations Bibliothèques React-router-dom  */
import React from "react";
import { NavLink } from "react-router-dom";

function Vendue() {
  return (
    <main>
      <section className="Galerie">
        <h2 className="Titre-Nature-Morte">
          <a href="MesCreations">
            <i className="fas fa-chevron-circle-right"></i>
            &nbsp; Nature morte / &nbsp;Velours en vente&nbsp;&nbsp;&nbsp;&nbsp;
          </a>
        </h2>
        <h3>Nature-Morte-Galerie Vendu</h3>
        <div className="Galerie1-Nature-Morte-Vente">
          <figure id="Theiere">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/1995/Theiere.jpg">
                <img
                  src="../../images/TableauxVendu/1995/Theiere.jpg"
                  alt="Théière"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Théière</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Fraises-Et-Plat-En-Etain">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/1995/Fraises-Et-Plat-En-Etain.jpg">
                <img
                  src="../../images/TableauxVendu/1995/Fraises-Et-Plat-En-Etain.jpg"
                  alt="Fraises et plat en étain"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Fraises et plat en étain</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Coupe-Dabricots">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/1995/Coupe-Abricots.jpg">
                <img
                  src="../../images/TableauxVendu/1995/Coupe-Abricots.jpg"
                  alt="Coupe d'Abricots"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Coupe d'abricots</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Pain-Et-Oeuf-Coque">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/1996/Pain-Et-Oeuf-Coque.jpg">
                <img
                  src="../../images/TableauxVendu/1996/Pain-Et-Oeuf-Coque.jpg"
                  alt="Pain et oeuf coque"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Pain et oeuf coque</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Confiture-Des-4-Fuits-Rouges">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/1996/Confiture-Des-4-Fruits-Rouges.jpg">
                <img
                  src="../../images/TableauxVendu/1996/Confiture-Des-4-Fruits-Rouges.jpg"
                  alt="Confiture des 4 fruits rouges"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Confiture des 4 fruits rouges</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Pain-Vin-Et-Laguiole">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/1996/Pain-Vin-Et-Laguiole.jpg">
                <img
                  src="../../images/TableauxVendu/1996/Pain-Vin-Et-Laguiole.jpg"
                  alt="Pain vin et laguiole"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Pain-Vin-Et-Laguiole</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Carafe-Et-Petits-Gateaux">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/1996/Carafe-Et-Petits-Gateaux.jpg">
                <img
                  src="../../images/TableauxVendu/1996/Carafe-Et-Petits-Gateaux.jpg"
                  alt="Carafe et petits gâteaux"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Carafe et petits gâteaux</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Vase-laque-Et-Pivoines">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/1996/Vase-Laque-Et-Pivoines.jpg">
                <img
                  src="../../images/TableauxVendu/1996/Vase-Laque-Et-Pivoines.jpg"
                  alt="Vase laqué et pivoines"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Vase laqué et pivoines</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Brioche-Et-Pot-A-Lait">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/1997/Brioche-Et-Pot-A-Lait.jpg">
                <img
                  src="../../images/TableauxVendu/1997/Brioche-Et-Pot-A-Lait.jpg"
                  alt="Brioche et pot à lait"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Brioche et pot à lait</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Corbeille-Abricots">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/1997/Corbeille-Abricots.jpg">
                <img
                  src="../../images/TableauxVendu/1997/Corbeille-Abricots.jpg"
                  alt="Corbeille d'abricots"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Corbeille d'abricots</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Chope-En-Etain-Et-Olives">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/1997/Chope-En-Etain-Et-Olives.jpg">
                <img
                  src="../../images/TableauxVendu/1997/Chope-En-Etain-Et-Olives.jpg"
                  alt="Chope en étain et olives"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Chope en étain et olives</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="BriocheEtChampagne">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/1997/Brioche-Et-Champagne.jpg">
                <img
                  src="../../images/TableauxVendu/1997/Brioche-Et-Champagne.jpg"
                  alt="Brioche et champagne"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Brioche et champagne</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="ConfitureDabricot">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/1997/Confiture-Abricot.jpg">
                <img
                  src="../../images/TableauxVendu/1997/Confiture-Abricot.jpg"
                  alt="Confiture d'abricot"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Confiture d'abricot</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Peches">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/1997/Peches.jpg">
                <img
                  src="../../images/TableauxVendu/1997/Peches.jpg"
                  alt="Pêches"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Pêches</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Le-Pain-Et-Le-Vin">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/1997/Le-Pain-Et-Le-Vin.jpg">
                <img
                  src="../../images/TableauxVendu/1997/Le-Pain-Et-Le-Vin.jpg"
                  alt="Le pain et le vin"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Le pain et le vin</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Pain-Cuivre-et-oeufs">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/1997/Pain-Cuivre-Et-Oeufs.jpg">
                <img
                  src="../../images/TableauxVendu/1997/Pain-Cuivre-Et-Oeufs.jpg"
                  alt="Pain Cuivre et oeufs"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Pain Cuivre et oeufs</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Pommes-et-pot-en-laiton">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/1997/Pommes-Et-Pot-En-Laiton.jpg">
                <img
                  src="../../images/TableauxVendu/1997/Pommes-Et-Pot-En-Laiton.jpg"
                  alt="Pommes et pot en laiton"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Pommes et pot en laiton</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Jambon et pain">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/1997/Jambon-Et-Pain.jpg">
                <img
                  src="../../images/TableauxVendu/1997/Jambon-Et-Pain.jpg"
                  alt="Jambon et pain"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Jambon et pain</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Panier-de-fruits">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/1997/Panier-De-Fruits.jpg">
                <img
                  src="../../images/TableauxVendu/1997/Panier-De-Fruits.jpg"
                  alt="Panier de fruits"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Panier de fruits</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Pause-Cafe">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/1997/Pause-Cafe.jpg">
                <img
                  src="../../images/TableauxVendu/1997/Pause-Cafe.jpg"
                  alt="Pause café"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Pause café</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Pot-Pourris-Et-Dentelle">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/1997/Pot-Pourris-Et-Dentelle.jpg">
                <img
                  src="../../images/TableauxVendu/1997/Pot-Pourris-Et-Dentelle.jpg"
                  alt="Pot pourris et dentelle"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Pot pourris et dentelle</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Grand-Pere">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/1997/Grand-Pere.jpg">
                <img
                  src="../../images/TableauxVendu/1997/Grand-Pere.jpg"
                  alt="Grand père"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Grand-père</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Source-De-Vie">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/1997/Source-De-Vie.jpg">
                <img
                  src="../../images/TableauxVendu/1997/Source-De-Vie.jpg"
                  alt="Source de vie"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Source de vie</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Provence">
            <div className="Div-Reserve">
              <NavLink to="../../images/TableauxVendu/1997/Provence.jpg">
                <img
                  src="../../images/TableauxVendu/1997/Provence.jpg"
                  alt="Provence"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Reserve-Image">Reservé</span>
            </div>
            <figcaption>
              <h4>Provence</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Cruche-En-gres">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/1997/Cruche-Engres.jpg">
                <img
                  src="../../images/TableauxVendu/1997/Cruche-Engres.jpg"
                  alt="Cruche engrès"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Cruche en grès</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Pain-Cuivre-Et-Couteau">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/1997/Pain-Cuivre-Et-Couteau.jpg">
                <img
                  src="../../images/TableauxVendu/1997/Pain-Cuivre-Et-Couteau.jpg"
                  alt="Pain cuivre et couteau"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Pain cuivre et couteau</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Jeux-Dhier">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/1998/Jeux-Dhier.jpg">
                <img
                  src="../../images/TableauxVendu/1998/Jeux-Dhier.jpg"
                  alt="Jeux d'hier"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Jeux d'hier</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Oeuf-Coque-Et-Poussin">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/1998/Oeuf-Coque-Et-Poussin.jpg">
                <img
                  src="../../images/TableauxVendu/1998/Oeuf-Coque-Et-Poussin.jpg"
                  alt="Oeuf coque et poussin"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Oeuf coque et poussin</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Lheure-Du-The">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/1998/Lheure-Du-The.jpg">
                <img
                  src="../../images/TableauxVendu/1998/Lheure-Du-The.jpg"
                  alt="L'heure du Thé"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>L'heure du thé</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Chardons">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/1998/Chardons.jpg">
                <img
                  src="../../images/TableauxVendu/1998/Chardons.jpg"
                  alt="Chardons"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Chardons</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Carafe-Et-Raisins">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/1998/Carafe-Et-Raisins.jpg">
                <img
                  src="../../images/TableauxVendu/1998/Carafe-Et-Raisins.jpg"
                  alt="Carafe et raisins"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Carafe et raisins</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Cerises">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/1998/Cerises.jpg">
                <img
                  src="../../images/TableauxVendu/1998/Cerises.jpg"
                  alt="Cerises"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Cerises</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Les-Oeufs">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/1998/Les-Oeufs.jpg">
                <img
                  src="../../images/TableauxVendu/1998/Les-Oeufs.jpg"
                  alt="Les oeufs"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Les oeufs</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Degustation">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/1999/Degustation.jpg">
                <img
                  src="../../images/TableauxVendu/1999/Degustation.jpg"
                  alt="Dégustation"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Dégustation</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Page-Decriture">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/1999/Page-Decriture.jpg">
                <img
                  src="../../images/TableauxVendu/1999/Page-Decriture.jpg"
                  alt="Page d'écriture"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Page d'écriture</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Vase-Bleu">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/1999/Vase-Bleu.jpg">
                <img
                  src="../../images/TableauxVendu/1999/Vase-Bleu.jpg"
                  alt="Vase Bleu"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Vase Bleu</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Calligraphie">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/1999/Calligraphie.jpg">
                <img
                  src="../../images/TableauxVendu/1999/Calligraphie.jpg"
                  alt="Calligraphie"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Calligraphie</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Le-Roman-Des-Deux-Roses">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/1999/Le-Roman-Des-Deux-Roses.jpg">
                <img
                  src="../../images/TableauxVendu/1999/Le-Roman-Des-Deux-Roses.jpg"
                  alt="Le Roman des deux roses"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Le roman des deux roses</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Les-Fraises">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/1999/Les-Fraises.jpg">
                <img
                  src="../../images/TableauxVendu/1999/Les-Fraises.jpg"
                  alt="Les fraises"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Les fraises</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Les-Cerises">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/1999/Les-Cerises.jpg">
                <img
                  src="../../images/TableauxVendu/1999/Les-Cerises.jpg"
                  alt="Les cerises"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Les cerises</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Cerises-Et-Whisky">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/1999/Cerises-Et-Whisky.jpg">
                <img
                  src="../../images/TableauxVendu/1999/Cerises-Et-Whisky.jpg"
                  alt="Cerises et whisky"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Cerises et whisky</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Nocturne">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/1999/Nocturne.jpg">
                <img
                  src="../../images/TableauxVendu/1999/Nocturne.jpg"
                  alt="Nocturne"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Nocturne</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Le-Petit-Bouchon">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/1999/Le-Petit-Bouchon.jpg">
                <img
                  src="../../images/TableauxVendu/1999/Le-Petit-Bouchon.jpg"
                  alt="Le petit bouchon"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Le petit bouchon</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Pomme-Et-Noix">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/1999/Pomme-Et-Noix.jpg">
                <img
                  src="../../images/TableauxVendu/1999/Pomme-Et-Noix.jpg"
                  alt="Pomme et noix"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Pomme et noix</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Fleurs-De-Lys">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/1999/Fleurs-De-Lys.jpg">
                <img
                  src="../../images/TableauxVendu/1999/Fleurs-De-Lys.jpg"
                  alt="Fleurs de lys"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Fleurs de lys</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Autour-Du-Vin">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2000/Autour-Du-Vin.jpg">
                <img
                  src="../../images/TableauxVendu/2000/Autour-Du-Vin.jpg"
                  alt="Autour du vin"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Autour du vin</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Correspondance">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2000/Correspondance.jpg">
                <img
                  src="../../images/TableauxVendu/2000/Correspondance.jpg"
                  alt="Correspondance"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Correspondance</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Liqueur">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2000/Automne1.jpg">
                <img
                  src="../../images/TableauxVendu/2000/Liqueur.jpg"
                  alt="Liqueur"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Liqueur</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Autour-Du-Vin-II">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2000/Autour-Du-Vin-II.jpg">
                <img
                  src="../../images/TableauxVendu/2000/Autour-Du-Vin-II.jpg"
                  alt="Autour du vin II"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Autour du vin II</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Le-Cidre">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2000/Le-Cidre.jpg">
                <img
                  src="../../images/TableauxVendu/2000/Le-Cidre.jpg"
                  alt="Le cidre"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Le cidre</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Cuivre-Et-Pain-II">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2000/Cuivre-Et-Pain-II.jpg">
                <img
                  src="../../images/TableauxVendu/2000/Cuivre-Et-Pain-II.jpg"
                  alt="Cuivre et pain II"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Cuivre et pain II</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Le-Verre-De-Vin">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2000/Le-Verre-De-Vin.jpg">
                <img
                  src="../../images/TableauxVendu/2000/Le-Verre-De-Vin.jpg"
                  alt="Le verre de vin"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Le verre de vin </h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Tire-Bouchon">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2000/Tire-Bouchon.jpg">
                <img
                  src="../../images/TableauxVendu/2000/Le-Gouter.jpg"
                  alt="Tire-bouchon"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Tire-Bouchon</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Lart-Du-Vin">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2000/Lart-Du-Vin.jpg">
                <img
                  src="../../images/TableauxVendu/2000/Lart-Du-Vin.jpg"
                  alt="L'art du vin"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>L'art du vin</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Le-Gouter">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2000/Le-Gouter.jpg">
                <img
                  src="../../images/TableauxVendu/2000/Le-Gouter.jpg"
                  alt="Le Goûter"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Le goûter</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Cognac">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2000/Cognac.jpg">
                <img
                  src="../../images/TableauxVendu/2000/Cognac.jpg"
                  alt="Cognac"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Cognac</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Petit-Dejeuner">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2000/Petit-Dejeuner.jpg">
                <img
                  src="../../images/TableauxVendu/2000/Petit-Dejeuner.jpg"
                  alt="Petit déjeuner"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Petit déjeuner</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Cuivre-Et-Pain-II">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2000/Cuivre-Et-Pain-II.jpg">
                <img
                  src="../../images/TableauxVendu/2000/Cuivre-Et-Pain-II.jpg"
                  alt="Cuivre et pain II"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Cuivre et pain II</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Automne1">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2000/Automne1.jpg">
                <img
                  src="../../images/TableauxVendu/2000/Automne1.jpg"
                  alt="Automne1"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Automne1</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Automne-II">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2000/Automne-II.jpg">
                <img
                  src="../../images/TableauxVendu/2000/Automne-II.jpg"
                  alt="Automne-II"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Automne-II</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Pain-Et-Pichet">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2000/Pain-Et-Pichet.jpg">
                <img
                  src="../../images/TableauxVendu/2000/Pain-Et-Pichet.jpg"
                  alt="Pain et pichet"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Pain et pichet</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Matin-Bonheur">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2001/Matin-Bonheur.jpg">
                <img
                  src="../../images/TableauxVendu/2001/Matin-Bonheur.jpg"
                  alt="Matin bonheur"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Matin et bonheur</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Quietude">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2001/Quietude.jpg">
                <img
                  src="../../images/TableauxVendu/2001/Quietude.jpg"
                  alt="Quiètude"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Quiètude</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Reflets">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2001/Cadre-Reflets.jpg">
                <img
                  src="../../images/TableauxVendu/2001/Cadre-Reflets.jpg"
                  alt="Reflets"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Reflets</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Fraicheur">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2001/Fraicheur.jpg">
                <img
                  src="../../images/TableauxVendu/2001/Fraicheur.jpg"
                  alt="Fraicheur"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Fraicheur</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Tinbale-Aux-Fraises">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2001/Timbale-Aux-Fraises.jpg">
                <img
                  src="../../images/TableauxVendu/2001/Timbale-Aux-Fraises.jpg"
                  alt="Timbale aux fraises"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Tinbale aux fraises</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Timbale-Aux-Cerises">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2001/Timbale-Aux-Cerises.jpg">
                <img
                  src="../../images/TableauxVendu/2001/Timbale-Aux-Cerises.jpg"
                  alt="Tinbale aux cerises"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Timbale aux cerises</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Timbale-Aux-Framboises">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2001/Timbale-Aux-Framboises.jpg">
                <img
                  src="../../images/TableauxVendu/2001/Timbale-Aux-Framboises.jpg"
                  alt="Timbale aux framboises"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Timbale aux framboises</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Petite-Boites">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2001/Petites-Boites.jpg">
                <img
                  src="../../images/TableauxVendu/2001/Petites-Boites.jpg"
                  alt="Petite boîtes"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Petite boîtes</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Loiseau-De-Cristal">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2001/Loiseau-De-Cristal.jpg">
                <img
                  src="../../images/TableauxVendu/2001/Loiseau-De-Cristal.jpg"
                  alt="L'oiseau de cristal"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>L'oiseau de cristal</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Londres-1924">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2001/Londres-1924.jpg">
                <img
                  src="../../images/TableauxVendu/2001/Londres-1924.jpg"
                  alt="Londres 1924"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Londres 1924</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Dentiste">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2002/Dentiste.jpg">
                <img
                  src="../../images/TableauxVendu/2002/Dentiste.jpg"
                  alt="Dentiste"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Reserve-Image">Reservé</span>
            </div>
            <figcaption>
              <h4>Dentiste</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Senteur">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2002/Senteur.jpg">
                <img
                  src="../../images/TableauxVendu/2002/Senteur.jpg"
                  alt="Senteur"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Senteur</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Exotique">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2002/Exotique.jpg">
                <img
                  src="../../images/TableauxVendu/2002/Exotique.jpg"
                  alt="Exotique"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Exotique</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Passe-Temps">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2002/Passe-Temps.jpg">
                <img
                  src="../../images/TableauxVendu/2002/Passe-Temps.jpg"
                  alt="Passe-temps"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Passe-temps</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Tel-Quils-Furent">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2002/Tels-Quils-Furent.jpg">
                <img
                  src="../../images/TableauxVendu/2002/Tels-Quils-Furent.jpg"
                  alt="Tel qu'ils furent"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Tels qu'ils furent</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="TimbaleAlaPipe">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2002/Timbale-A-La-Pipe.jpg">
                <img
                  src="../../images/TableauxVendu/2002/Timbale-A-La-Pipe.jpg"
                  alt="Timbale à la pipe"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Timbale à la pipe</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Vendange">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2002/Vendange.jpg">
                <img
                  src="../../images/TableauxVendu/2002/Vendange.jpg"
                  alt="Vendange"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Vendange</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="LeConfiturier">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2002/Le-Confiturier.jpg">
                <img
                  src="../../images/TableauxVendu/2002/Le-Confiturier.jpg"
                  alt="Le confiturier"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Le confiturier</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Cuivre-Vase-Bleu">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2002/Cuivre-Vase-Bleu.jpg">
                <img
                  src="../../images/TableauxVendu/2002/Cuivre-Vase-Bleu.jpg"
                  alt="Cuivre et vase bleu"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Cuivre vase bleu</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Souvenirs">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2003/Souvenirs.jpg">
                <img
                  src="../../images/TableauxVendu/2003/Souvenirs.jpg"
                  alt="Souvenirs"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Souvenirs</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Reveil-Matin">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2003/Reveil-Matin.jpg">
                <img
                  src="../../images/TableauxVendu/2003/Reveil-Matin.jpg"
                  alt="Reveil-Matin"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Reveil-Matin</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Douceurs">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2003/Douceurs.jpg">
                <img
                  src="../../images/TableauxVendu/2003/Douceurs.jpg"
                  alt="Douceurs"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Douceurs</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Lecture">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2003/Lecture.jpg">
                <img
                  src="../../images/TableauxVendu/2003/Lecture.jpg"
                  alt="Lecture"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Lecture</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Les-Deux-Tomes-De-Savoie">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2003/Les-Deux-Tomes-De-savoie.jpg">
                <img
                  src="../../images/TableauxVendu/2003/Les-Deux-Tomes-De-savoie.jpg"
                  alt="Les deux tomes de savoie"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Les deux tomes de savoie</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Souvenirs-De-Savoie">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2003/Souvenirs-De-Savoie.jpg">
                <img
                  src="../../images/TableauxVendu/2003/Souvenirs-De-Savoie.jpg"
                  alt="Souvenirs de Savoie"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Reserve-Image">Reservé</span>
            </div>
            <figcaption>
              <h4>Souvenirs de Savoie</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Alpage-Lepage">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2003/Alpage-Lepage.jpg">
                <img
                  src="../../images/TableauxVendu/2003/Alpage-Lepage.jpg"
                  alt="Alpage-Lepage"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Alpage-Lepage</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="En savoie">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2003/En-savoie.jpg">
                <img
                  src="../../images/TableauxVendu/2003/En-savoie.jpg"
                  alt="En savoie"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>En savoie</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Coupe-De-Raisin">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2003/Coupe-De-Raisin.jpg">
                <img
                  src="../../images/TableauxVendu/2003/Coupe-De-Raisin.jpg"
                  alt="Coupe de raisin"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Coupe de raisin</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Les-Trois-Gres">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2003/Les-Trois-Gres.jpg">
                <img
                  src="../../images/TableauxVendu/2003/Les-Trois-Gres.jpg"
                  alt="Les trois grès"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Les trois grès</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Fruits-Dete">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2003/Fruits-Dete.jpg">
                <img
                  src="../../images/TableauxVendu/2003/Fruits-Dete.jpg"
                  alt="Fruits d'été"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Fruits d'été</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Alcools">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2004/Alcools.jpg">
                <img
                  src="../../images/TableauxVendu/2004/Alcools.jpg"
                  alt="Alcools"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Alcools</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Inspiration">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2004/Inspiration.jpg">
                <img
                  src="../../images/TableauxVendu/2004/Inspiration.jpg"
                  alt="inspiration"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Inspiration</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Alcool-Et-Dentelle">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2004/Alcool-Et-Dentelle.jpg">
                <img
                  src="../../images/TableauxVendu/2004/Alcool-Et-Dentelle.jpg"
                  alt="Alcool et dentelle"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Alcool et dentelle</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="PommesEtCroissants">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2004/Pomme-Et-Croissants.jpg">
                <img
                  src="../../images/TableauxVendu/2004/Pomme-Et-Croissants.jpg"
                  alt="Pommes et croissants"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Pommes et croissants</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="EncrierEtTimbale">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2004/Encrier-Et-Timbale.jpg">
                <img
                  src="../../images/TableauxVendu/2004/Encrier-Et-Timbale.jpg"
                  alt="Encrier et timbale"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Encrier et timbale</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="FleursEtFramboises">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2004/Fleur-Et-Framboises.jpg">
                <img
                  src="../../images/TableauxVendu/2004/Fleur-Et-Framboises.jpg"
                  alt="Fleur et framboises"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Fleurs et framboises</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="FleurDeternite">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2004/Fleur-Deternite.jpg">
                <img
                  src="../../images/TableauxVendu/2004/Fleur-Deternite.jpg"
                  alt="Fleur d'éternité"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Fleur d'éternité</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Androsaces-Avec-Opinel">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2004/Androsaces-Avec-Opinel.jpg">
                <img
                  src="../../images/TableauxVendu/2004/Androsaces-Avec-Opinel.jpg"
                  alt="Androsaces avec opinel"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Androsaces avec opinel</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Printemps">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2004/Printemps.jpg">
                <img
                  src="../../images/TableauxVendu/2004/Printemps.jpg"
                  alt="Printemps"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Reserve-Image">Reservé</span>
            </div>
            <figcaption>
              <h4>Printemps</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Pause-Casse-Croute">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2004/Pause-casse-Croute.jpg">
                <img
                  src="../../images/TableauxVendu/2004/Pause-casse-Croute.jpg"
                  alt="Pause Casse-Croute"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Pause casse croute</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Pause-Lecture">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2004/Pause-Lecture.jpg">
                <img
                  src="../../images/TableauxVendu/2004/Pause-Lecture.jpg"
                  alt="Pause lecture"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Pause lecture</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Fruits-Rouges">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2004/Fruits-Rouges.jpg">
                <img
                  src="../../images/TableauxVendu/2004/Fruits-Rouges.jpg"
                  alt="Fruits rouges"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Fruits rouges</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="LesPlaisirsDefendus">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2004/Les-Plaisirs-Defendus.jpg">
                <img
                  src="../../images/TableauxVendu/2004/Les-Plaisirs-Defendus.jpg"
                  alt="Les plaisirs défendus"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Les plaisirs défendus</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Sagesse-De-Lorient">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2004/Sagesse-De-Lorient.jpg">
                <img
                  src="../../images/TableauxVendu/2004/Sagesse-De-Lorient.jpg"
                  alt="Sagesse de l'orient"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Sagesse de l'orient</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Mignonne-Allons-Voir-Si-La-Rose">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2004/Mignonne-Allons-Voir-Si-La-Rose.jpg">
                <img
                  src="../../images/TableauxVendu/2004/Mignonne-Allons-Voir-Si-La-Rose.jpg"
                  alt="Mignonne allons voir si la rose ..."
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Mignonne allons voir si la rose...</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="CasseCrouteSavoyard">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2004/Casse-Croute-Savoyard.jpg">
                <img
                  src="../../images/TableauxVendu/2004/Pain-Et-oeufs.jpg"
                  alt="Casse-Croûte Savoyard"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Casse-croûte savoyard</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="CerisesEtFraise">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2004/Cerises-Et-Fraise.jpg">
                <img
                  src="../../images/TableauxVendu/2004/Cerises-Et-Fraise.jpg"
                  alt="Cerise et fraise"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Cerises et fraise</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="DegustationEnSavoie">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2004/Degustation-En-savoie.jpg">
                <img
                  src="../../images/TableauxVendu/2004/Degustation-En-savoie.jpg"
                  alt="Degustations en Savoie"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Degustations en Savoie</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Tomme-Et-Carlines">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2004/Prinptemps.jpg">
                <img
                  src="../../images/TableauxVendu/2004/Tomme-Et-Carlines.jpg"
                  alt="Tomme et Carlines"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Tomme et Carlines</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="UnGrandBol">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2004/Un-Grand-Bol.jpg">
                <img
                  src="../../images/TableauxVendu/2004/Un-Grand-Bol.jpg"
                  alt="Un grand bol"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Un grand bol</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="PainEtOeufs">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2004/Pain-Et-oeufs.jpg">
                <img
                  src="../../images/TableauxVendu/2004/Pain-Et-oeufs.jpg"
                  alt="Pain et oeufs"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Pain et oeufs</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="EncrierI">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2005/Encrier-I.jpg">
                <img
                  src="../../images/TableauxVendu/2005/Encrier-I.jpg"
                  alt="Encrier I"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Encrier I</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="UnPichetDore">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2005/Un-Pichet-Dore.jpg">
                <img
                  src="../../images/TableauxVendu/2005/Un-Pichet-Dore.jpg"
                  alt="Un pichet doré"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Un pichet dorée</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Aladin">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2005/Aladin.jpg">
                <img
                  src="../../images/TableauxVendu/2005/Aladin.jpg"
                  alt="Aladin"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Aladin</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="EncrierII">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2005/Encrier-II.jpg">
                <img
                  src="../../images/TableauxVendu/2005/Encrier-II.jpg"
                  alt="Encrier II"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Encrier II</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="PipeEtunPichetDore">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2005/Pipe-Et-Pichet-Doree.jpg">
                <img
                  src="../../images/TableauxVendu/2005/Pipe-Et-Pichet-Doree.jpg"
                  alt="Pipe et pichet doré"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Pipe et un pichet doré</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Pause-Casse-Croute-II">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2005/Pause-Casse-Croute-II.jpg">
                <img
                  src="../../images/TableauxVendu/2005/Pause-Casse-Croute-II.jpg"
                  alt="Pause casse-croûte II"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Pause casse-croûte II </h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="UnPetitCroissant">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2005/Un-Petit-Croissant.jpg">
                <img
                  src="../../images/TableauxVendu/2005/Un-Petit-Croissant.jpg"
                  alt="Un P'tit croissant"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Un P'tit croissant</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Un-Ptit-Noir">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2006/Cadre-Un-Ptit-Noir.jpg">
                <img
                  src="../../images/TableauxVendu/2006/Cadre-Un-Ptit-Noir.jpg"
                  alt="Un P'tit noir"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Un P'tit Noir</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="CognacEtDentelle">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2006/Cognac-Et-Dentelle.jpg">
                <img
                  src="../../images/TableauxVendu/2006/Cognac-Et-Dentelle.jpg"
                  alt="Cognac et dentelle"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Cognac et dentelle</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="PommeEtChocolat">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2006/Pomme-Et-Chocolat.jpg">
                <img
                  src="../../images/TableauxVendu/2006/Pomme-Et-Chocolat.jpg"
                  alt="Pomme et chocolat"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Pomme et chocolat</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="FruitsRougesEtConfiture">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2006/Fruits-Rouges-Et-Confiture.jpg">
                <img
                  src="../../images/TableauxVendu/2006/Fruits-Rouges-Et-Confiture.jpg"
                  alt="Fruits rouges et confiture"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Fruits rouges et confiture</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="Bonjour">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2006/Bonjour.jpg">
                <img
                  src="../../images/TableauxVendu/2006/Bonjour.jpg"
                  alt="Bonjour"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Bonjour</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="LivresEtRose">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2006/Livres-Et-Rose.jpg">
                <img
                  src="../../images/TableauxVendu/2006/Livres-Et-Rose.jpg"
                  alt="Livres et rose"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Livres et rose</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="CasseCrouteEnMontagne">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2007/Casse-Croute-En-Montagne.jpg">
                <img
                  src="../../images/TableauxVendu/2007/Casse-Croute-En-Montagne.jpg"
                  alt="Casse-Croûte en montagne"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Casse-croûte en montagne</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
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
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2008/Cadre-Le-Temps-Des-Lumieres.jpg">
                <img
                  src="../../images/TableauxVendu/2008/Cadre-Le-Temps-Des-Lumieres.jpg"
                  alt="Le temps des lumières"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Le temps des lumières</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="LitTerrature">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2008/Litterature.jpg">
                <img
                  src="../../images/TableauxVendu/2008/Litterature.jpg"
                  alt="Littérature"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Littérature</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
                <span className="Coeur-Vide-Menu">
                  <i className="far fa-heart"></i>
                </span>
                <span className="Coeur-Plein-Menu">
                  <i className="fas fa-heart"></i>
                </span>
              </span>
            </figcaption>
          </figure>
          <figure id="ConfitureEtfruits">
            <div className="Div-vendue">
              <NavLink to="../../images/TableauxVendu/2008/Confiture-Et-Fruits.jpg">
                <img
                  src="../../images/TableauxVendu/2008/Confiture-Et-Fruits.jpg"
                  alt="Confiture et fruits"
                  title="Cliquez pour agrandir"
                />
              </NavLink>
              <span className="Mot-Vendue-Image">Vendu</span>
            </div>
            <figcaption>
              <h4>Confiture et fruits</h4>
              <span className="Dimension-Coeur Compteur " onClick="Compteur()">
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
export default Vendue;
