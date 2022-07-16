/* Importations Bibliothèques React-router-dom  */
import React from "react";
import { NavLink } from "react-router-dom";

import Theiere from "../../images/TableauxVendu/1995/Theiere.jpg";
import FraisesEtPlatEnEtain from "../../images/TableauxVendu/1995/Fraises-Et-Plat-En-Etain.jpg";
import CoupeAbricots from "../../images/TableauxVendu/1995/Coupe-Abricots.jpg";
import PainEtOeufCoque from "../../images/TableauxVendu/1996/Pain-Et-Oeuf-Coque.jpg";
import ConfitureDes4FruitsRouges from "../../images/TableauxVendu/1996/Confiture-Des-4-Fruits-Rouges.jpg";
import PainVinEtLaguiole from "../../images/TableauxVendu/1996/Pain-Vin-Et-Laguiole.jpg";
import CarafeEtPetitsGateaux from "../../images/TableauxVendu/1996/Carafe-Et-Petits-Gateaux.jpg";
import VaseLaqueEtPivoines from "../../images/TableauxVendu/1996/Vase-Laque-Et-Pivoines.jpg";
import BriocheEtChampagne from "../../images/TableauxVendu/1997/Brioche-Et-Champagne.jpg";
import BriocheEtPotALait from "../../images/TableauxVendu/1997/Brioche-Et-Pot-A-Lait.jpg";
import ChopeEnEtainEtOlives from "../../images/TableauxVendu/1997/Chope-En-Etain-Et-Olives.jpg";
import CorbeilleAbricots from "../../images/TableauxVendu/1997/Corbeille-Abricots.jpg";
import CrucheEngres from "../../images/TableauxVendu/1997/Cruche-Engres.jpg";
import GrandPere from "../../images/TableauxVendu/1997/Grand-Pere.jpg";
import JambonEtPain from "../../images/TableauxVendu/1997/Jambon-Et-Pain.jpg";
import LePainEtLeVin from "../../images/TableauxVendu/1997/Le-Pain-Et-Le-Vin.jpg";
import PainCuivreEtCouteau from "../../images/TableauxVendu/1997/Pain-Cuivre-Et-Couteau.jpg";
import PainCuivreEtOeufs from "../../images/TableauxVendu/1997/Pain-Cuivre-Et-Oeufs.jpg";
import PanierDeFruits from "../../images/TableauxVendu/1997/Panier-De-Fruits.jpg";
import PauseCafe from "../../images/TableauxVendu/1997/Pause-Cafe.jpg";
import Peches from "../../images/TableauxVendu/1997/Peches.jpg";
import PommesEtPotEnLaiton from "../../images/TableauxVendu/1997/Pommes-Et-Pot-En-Laiton.jpg";
import PotPourrisEtDentelle from "../../images/TableauxVendu/1997/Pot-Pourris-Et-Dentelle.jpg";
import Provence from "../../images/TableauxVendu/1997/Provence.jpg";
import SourceDeVie from "../../images/TableauxVendu/1997/Source-De-Vie.jpg";
import CarafeEtRaisins from "../../images/TableauxVendu/1998/Carafe-Et-Raisins.jpg";
import Cerises from "../../images/TableauxVendu/1998/Cerises.jpg";
import Chardons from "../../images/TableauxVendu/1998/Chardons.jpg";
import JeuxDhier from "../../images/TableauxVendu/1998/Jeux-Dhier.jpg";
import LesOeufs from "../../images/TableauxVendu/1998/Les-Oeufs.jpg";
import LheureDuThe from "../../images/TableauxVendu/1998/Lheure-Du-The.jpg";
import OeufCoqueEtPoussin from "../../images/TableauxVendu/1998/Oeuf-Coque-Et-Poussin.jpg";
import Calligraphie from "../../images/TableauxVendu/1999/Calligraphie.jpg";
import CerisesEtWhisky from "../../images/TableauxVendu/1999/Cerises-Et-Whisky.jpg";
import Degustation from "../../images/TableauxVendu/1999/Degustation.jpg";
import FleursDeLys from "../../images/TableauxVendu/1999/Fleurs-De-Lys.jpg";
import LePetitBouchon from "../../images/TableauxVendu/1999/Le-Petit-Bouchon.jpg";
import LeRomanDesDeuxRoses from "../../images/TableauxVendu/1999/Le-Roman-Des-Deux-Roses.jpg";
import LesCerises from "../../images/TableauxVendu/1999/Les-Cerises.jpg";
import LesFraises from "../../images/TableauxVendu/1999/Les-Fraises.jpg";
import Nocturne from "../../images/TableauxVendu/1999/Nocturne.jpg";
import PageDecriture from "../../images/TableauxVendu/1999/Page-Decriture.jpg";
import PommeEtNoix from "../../images/TableauxVendu/1999/Pomme-Et-Noix.jpg";
import VaseBleu from "../../images/TableauxVendu/1999/Vase-Bleu.jpg";
import AutomneII from "../../images/TableauxVendu/2000/Automne-II.jpg";
import Automne1 from "../../images/TableauxVendu/2000/Automne1.jpg";
import AutourDuVinII from "../../images/TableauxVendu/2000/Autour-Du-Vin-II.jpg";
import AutourDuVin from "../../images/TableauxVendu/2000/Autour-Du-Vin.jpg";
import Cognac from "../../images/TableauxVendu/2000/Cognac.jpg";
import Correspondance from "../../images/TableauxVendu/2000/Correspondance.jpg";
import CuivreEtPainII from "../../images/TableauxVendu/2000/Cuivre-Et-Pain-II.jpg";
import LeGouter from "../../images/TableauxVendu/2000/Le-Gouter.jpg";
import LeVerreDeVin from "../../images/TableauxVendu/2000/Le-Verre-De-Vin.jpg";
import Liqueur from "../../images/TableauxVendu/2000/Liqueur.jpg";
import LartDuVin from "../../images/TableauxVendu/2000/Lart-Du-Vin.jpg";
import PainEtPichet from "../../images/TableauxVendu/2000/Pain-Et-Pichet.jpg";
import LeCidre from "../../images/TableauxVendu/2000/Le-Cidre.jpg";
import PetitDejeuner from "../../images/TableauxVendu/2000/Petit-Dejeuner.jpg";
import TireBouchon from "../../images/TableauxVendu/2000/Tire-Bouchon.jpg";
import CadreReflets from "../../images/TableauxVendu/2001/Cadre-Reflets.jpg";
import Fraicheur from "../../images/TableauxVendu/2001/Fraicheur.jpg";
import LoiseauDeCristal from "../../images/TableauxVendu/2001/Loiseau-De-Cristal.jpg";
import Londres1924 from "../../images/TableauxVendu/2001/Londres-1924.jpg";
import MatinBonheur from "../../images/TableauxVendu/2001/Matin-Bonheur.jpg";
import PetitesBoites from "../../images/TableauxVendu/2001/Petites-Boites.jpg";
import Quietude from "../../images/TableauxVendu/2001/Quietude.jpg";
import TimbaleAuxCerises from "../../images/TableauxVendu/2001/Timbale-Aux-Cerises.jpg";
import TimbaleAuxFraises from "../../images/TableauxVendu/2001/Timbale-Aux-Fraises.jpg";
import TimbaleAuxFramboises from "../../images/TableauxVendu/2001/Timbale-Aux-Framboises.jpg";
import CuivreVaseBleu from "../../images/TableauxVendu/2002/Cuivre-Vase-Bleu.jpg";
import Dentiste from "../../images/TableauxVendu/2002/Dentiste.jpg";
import Exotique from "../../images/TableauxVendu/2002/Exotique.jpg";
import LeConfiturier from "../../images/TableauxVendu/2002/Le-Confiturier.jpg";
import PasseTemps from "../../images/TableauxVendu/2002/Passe-Temps.jpg";
import Senteur from "../../images/TableauxVendu/2002/Senteur.jpg";
import TelsQuilsFurent from "../../images/TableauxVendu/2002/Tels-Quils-Furent.jpg";
import TimbaleALaPipe from "../../images/TableauxVendu/2002/Timbale-A-La-Pipe.jpg";
import Vendange from "../../images/TableauxVendu/2002/Vendange.jpg";
import AlpageLepage from "../../images/TableauxVendu/2003/Alpage-Lepage.jpg";
import CoupeDeRaisin from "../../images/TableauxVendu/2003/Coupe-De-Raisin.jpg";
import Douceurs from "../../images/TableauxVendu/2003/Douceurs.jpg";
import Ensavoie from "../../images/TableauxVendu/2003/En-savoie.jpg";
import FruitsDete from "../../images/TableauxVendu/2003/Fruits-Dete.jpg";
import Lecture from "../../images/TableauxVendu/2003/Lecture.jpg";
import LesDeuxTomesDesavoie from "../../images/TableauxVendu/2003/Les-Deux-Tomes-De-savoie.jpg";
import LesTroisGres from "../../images/TableauxVendu/2003/Les-Trois-Gres.jpg";
import ReveilMatin from "../../images/TableauxVendu/2003/Reveil-Matin.jpg";
import SouvenirsDeSavoie from "../../images/TableauxVendu/2003/Souvenirs-De-Savoie.jpg";
import Souvenirs from "../../images/TableauxVendu/2003/Souvenirs.jpg";
import AlcoolEtDentelle from "../../images/TableauxVendu/2004/Alcool-Et-Dentelle.jpg";
import Alcools from "../../images/TableauxVendu/2004/Alcools.jpg";
import AndrosacesAvecOpinel from "../../images/TableauxVendu/2004/Androsaces-Avec-Opinel.jpg";
import CasseCrouteSavoyard from "../../images/TableauxVendu/2004/Casse-Croute-Savoyard.jpg";
import CerisesEtFraise from "../../images/TableauxVendu/2004/Cerises-Et-Fraise.jpg";
import DegustationEnsavoie from "../../images/TableauxVendu/2004/Degustation-En-savoie.jpg";
import EncrierEtTimbale from "../../images/TableauxVendu/2004/Encrier-Et-Timbale.jpg";
import FleurDeternite from "../../images/TableauxVendu/2004/Fleur-Deternite.jpg";
import FleurEtFramboises from "../../images/TableauxVendu/2004/Fleur-Et-Framboises.jpg";
import FruitsRouges from "../../images/TableauxVendu/2004/Fruits-Rouges.jpg";
import Inspiration from "../../images/TableauxVendu/2004/Inspiration.jpg";
import LesPlaisirsDefendus from "../../images/TableauxVendu/2004/Les-Plaisirs-Defendus.jpg";
import MignonneAllonsVoirSiLaRose from "../../images/TableauxVendu/2004/Mignonne-Allons-Voir-Si-La-Rose.jpg";
import PainEtOeufs from "../../images/TableauxVendu/2004/Pain-Et-oeufs.jpg";
import PauseCasseCroute from "../../images/TableauxVendu/2004/Pause-casse-Croute.jpg";
import PauseLecture from "../../images/TableauxVendu/2004/Pause-Lecture.jpg";
import PommeEtCroissants from "../../images/TableauxVendu/2004/Pomme-Et-Croissants.jpg";
import Printemps from "../../images/TableauxVendu/2004/Printemps.jpg";
import SagesseDeLorient from "../../images/TableauxVendu/2004/Sagesse-De-Lorient.jpg";
import TommeEtCarlines from "../../images/TableauxVendu/2004/Tomme-Et-Carlines.jpg";
import UnGrandBol from "../../images/TableauxVendu/2004/Un-Grand-Bol.jpg";
import Aladin from "../../images/TableauxVendu/2005/Aladin.jpg";
import EncrierI from "../../images/TableauxVendu/2005/Encrier-I.jpg";
import EncrierII from "../../images/TableauxVendu/2005/Encrier-II.jpg";
import PauseCasseCrouteII from "../../images/TableauxVendu/2005/Pause-Casse-Croute-II.jpg";
import PipeEtPichetDoree from "../../images/TableauxVendu/2005/Pipe-Et-Pichet-Doree.jpg";
import UnPetitCroissant from "../../images/TableauxVendu/2005/Un-Petit-Croissant.jpg";
import UnPichetDore from "../../images/TableauxVendu/2005/Un-Pichet-Dore.jpg";
import UnPetitNoir from "../../images/TableauxVendu/2006/Cadre-Un-Ptit-Noir.jpg";
import Bonjour from "../../images/TableauxVendu/2006/Bonjour.jpg";
import CognacEtDentelle from "../../images/TableauxVendu/2006/Cognac-Et-Dentelle.jpg";
import FruitsRougesEtConfiture from "../../images/TableauxVendu/2006/Fruits-Rouges-Et-Confiture.jpg";
import LivresEtRose from "../../images/TableauxVendu/2006/Livres-Et-Rose.jpg";
import PommeEtChocolat from "../../images/TableauxVendu/2006/Pomme-Et-Chocolat.jpg";
import CasseCrouteEnMontagne from "../../images/TableauxVendu/2007/Casse-Croute-En-Montagne.jpg";
import CadreLeTempsDesLumieres from "../../images/TableauxVendu/2008/Cadre-Le-Temps-Des-Lumieres.jpg";
import ConfitureEtFruits from "../../images/TableauxVendu/2008/Confiture-Et-Fruits.jpg";
import Litterature from "../../images/TableauxVendu/2008/Litterature.jpg";

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
              <NavLink to={Theiere}>
                <img
                  src={Theiere}
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
              <NavLink to={FraisesEtPlatEnEtain}>
                <img
                  src={FraisesEtPlatEnEtain}
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
              <NavLink to={CoupeAbricots}>
                <img
                  src={CoupeAbricots}
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
              <NavLink to={PainEtOeufCoque}>
                <img
                  src={PainEtOeufCoque}
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
              <NavLink to={ConfitureDes4FruitsRouges}>
                <img
                  src={ConfitureDes4FruitsRouges}
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
              <NavLink to={PainVinEtLaguiole}>
                <img
                  src={PainVinEtLaguiole}
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
              <NavLink to={CarafeEtPetitsGateaux}>
                <img
                  src={CarafeEtPetitsGateaux}
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
              <NavLink to={VaseLaqueEtPivoines}>
                <img
                  src={VaseLaqueEtPivoines}
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
              <NavLink to={BriocheEtPotALait}>
                <img
                  src={BriocheEtPotALait}
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
              <NavLink to={CorbeilleAbricots}>
                <img
                  src={CorbeilleAbricots}
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
              <NavLink to={ChopeEnEtainEtOlives}>
                <img
                  src={ChopeEnEtainEtOlives}
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
              <NavLink to={BriocheEtChampagne}>
                <img
                  src={BriocheEtChampagne}
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
              <NavLink to={ConfitureDabricot}>
                <img
                  src={ConfitureDabricot}
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
              <NavLink to={Peches}>
                <img src={Peches} alt="Pêches" title="Cliquez pour agrandir" />
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
              <NavLink to={LePainEtLeVin}>
                <img
                  src={LePainEtLeVin}
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
              <NavLink to={PainCuivreEtOeufs}>
                <img
                  src={PainCuivreEtOeufs}
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
              <NavLink to={PommesEtPotEnLaiton}>
                <img
                  src={PommesEtPotEnLaiton}
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
              <NavLink to={JambonEtPain}>
                <img
                  src={JambonEtPain}
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
              <NavLink to={PanierDeFruits}>
                <img
                  src={PanierDeFruitss}
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
              <NavLink to={PauseCafe}>
                <img
                  src={PauseCafe}
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
              <NavLink to={PotPourrisEtDentelle}>
                <img
                  src={PotPourrisEtDentelle}
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
              <NavLink to={GrandPere}>
                <img
                  src={GrandPere}
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
              <NavLink to={SourceDeVie}>
                <img
                  src={SourceDeVie}
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
              <NavLink to={Provence}>
                <img
                  src={Provence}
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
              <NavLink to={CrucheEngres}>
                <img
                  src={CrucheEngres}
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
              <NavLink to={PainCuivreEtCouteau}>
                <img
                  src={PainCuivreEtCouteau}
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
              <NavLink to={JeuxDhier}>
                <img
                  src={JeuxDhier}
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
              <NavLink to={OeufCoqueEtPoussin}>
                <img
                  src={OeufCoqueEtPoussin}
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
              <NavLink to={LheureDuThe}>
                <img
                  src={LheureDuThe}
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
              <NavLink to={Chardons}>
                <img
                  src={Chardons}
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
              <NavLink to={CarafeEtRaisins}>
                <img
                  src={CarafeEtRaisins}
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
              <NavLink to={Cerises}>
                <img
                  src={Cerises}
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
              <NavLink to={LesOeufs}>
                <img
                  src={LesOeufs}
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
              <NavLink to={Degustation}>
                <img
                  src={Degustation}
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
              <NavLink to={PageDecriture}>
                <img
                  src={PageDecriture}
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
              <NavLink to={VaseBleu}>
                <img
                  src={VaseBleu}
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
              <NavLink to={Calligraphie}>
                <img
                  src={Calligraphie}
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
              <NavLink to={LeRomanDesDeuxRoses}>
                <img
                  src={LeRomanDesDeuxRoses}
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
              <NavLink to={LesFraises}>
                <img
                  src={LesFraises}
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
              <NavLink to={LesCerises}>
                <img
                  src={LesCerises}
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
              <NavLink to={CerisesEtWhisky}>
                <img
                  src={CerisesEtWhisky}
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
              <NavLink to={Nocturne}>
                <img
                  src={Nocturne}
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
              <NavLink to={LePetitBouchon}>
                <img
                  src={LePetitBouchon}
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
              <NavLink to={PommeEtNoix}>
                <img
                  src={PommeEtNoix}
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
              <NavLink to={FleursDeLys}>
                <img
                  src={FleursDeLys}
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
              <NavLink to={AutourDuVin}>
                <img
                  src={AutourDuVin}
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
              <NavLink to={Correspondance}>
                <img
                  src={Correspondance}
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
              <NavLink to={Liqueur}>
                <img
                  src={Liqueur}
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
              <NavLink to={AutourDuVinII}>
                <img
                  src={AutourDuVinII}
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
              <NavLink to={LeCidre}>
                <img
                  src={LeCidre}
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
          <figure id="Le-Verre-De-Vin">
            <div className="Div-vendue">
              <NavLink to={LeVerreDeVin}>
                <img
                  src={LeVerreDeVin}
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
              <NavLink to={TireBouchon}>
                <img
                  src={TireBouchon}
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
              <NavLink to={LartDuVin}>
                <img
                  src={LartDuVin}
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
              <NavLink to={LeGouter}>
                <img
                  src={LeGouter}
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
              <NavLink to={Cognac}>
                <img src={Cognac} alt="Cognac" title="Cliquez pour agrandir" />
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
              <NavLink to={PetitDejeuner}>
                <img
                  src={PetitDejeuner}
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
              <NavLink to={CuivreEtPainII}>
                <img
                  src={CuivreEtPainII}
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
              <NavLink to={Automne1}>
                <img
                  src={Automne1}
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
              <NavLink to={AutomneII}>
                <img
                  src={AutomneII}
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
              <NavLink to={PainEtPichet}>
                <img
                  src={PainEtPichet}
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
              <NavLink to={MatinBonheur}>
                <img
                  src={MatinBonheur}
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
              <NavLink to={Quietude}>
                <img
                  src={Quietude}
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
              <NavLink to={CadreReflets}>
                <img
                  src={CadreReflets}
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
              <NavLink to={Fraicheur}>
                <img
                  src={Fraicheur}
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
              <NavLink to={TimbaleAuxFraises}>
                <img
                  src={TimbaleAuxFraises}
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
              <NavLink to={TimbaleAuxCerises}>
                <img
                  src={TimbaleAuxCerises}
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
              <NavLink to={TimbaleAuxFramboises}>
                <img
                  src={TimbaleAuxFramboises}
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
              <NavLink to={PetitesBoites}>
                <img
                  src={PetitesBoites}
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
              <NavLink to={LoiseauDeCristal}>
                <img
                  src={LoiseauDeCristal}
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
              <NavLink to={Londres1924}>
                <img
                  src={Londres1924}
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
              <NavLink to={Dentiste}>
                <img
                  src={Dentiste}
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
              <NavLink to={Senteur}>
                <img
                  src={Senteur}
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
              <NavLink to={Exotique}>
                <img
                  src={Exotique}
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
              <NavLink to={PasseTemps}>
                <img
                  src={PasseTemps}
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
              <NavLink to={TelsQuilsFurent}>
                <img
                  src={TelsQuilsFurent}
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
              <NavLink to={TimbaleALaPipe}>
                <img
                  src={TimbaleALaPipe}
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
              <NavLink to={Vendange}>
                <img
                  src={Vendange}
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
              <NavLink to={LeConfiturier}>
                <img
                  src={LeConfiturier}
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
              <NavLink to={CuivreVaseBleu}>
                <img
                  src={CuivreVaseBleu}
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
              <NavLink to={Souvenirs}>
                <img
                  src={Souvenirs}
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
              <NavLink to={ReveilMatin}>
                <img
                  src={ReveilMatin}
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
              <NavLink to={Douceurs}>
                <img
                  src={Douceurs}
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
              <NavLink to={Lecture}>
                <img
                  src={Lecture}
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
              <NavLink to={LesDeuxTomesDesavoie}>
                <img
                  src={LesDeuxTomesDesavoie}
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
              <NavLink to={SouvenirsDeSavoie}>
                <img
                  src={SouvenirsDeSavoie}
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
              <NavLink to={AlpageLepage}>
                <img
                  src={AlpageLepage}
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
              <NavLink to={Ensavoie}>
                <img
                  src={Ensavoie}
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
              <NavLink to={CoupeDeRaisin}>
                <img
                  src={CoupeDeRaisin}
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
              <NavLink to={LesTroisGres}>
                <img
                  src={LesTroisGres}
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
              <NavLink to={FruitsDete}>
                <img
                  src={FruitsDete}
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
              <NavLink to={Alcools}>
                <img
                  src={Alcools}
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
              <NavLink to={Inspiration}>
                <img
                  src={Inspiration}
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
              <NavLink to={AlcoolEtDentelle}>
                <img
                  src={AlcoolEtDentelle}
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
              <NavLink to={PommeEtCroissants}>
                <img
                  src={PommeEtCroissants}
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
              <NavLink to={EncrierEtTimbale}>
                <img
                  src={EncrierEtTimbale}
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
              <NavLink to={FleurEtFramboises}>
                <img
                  src={FleurEtFramboises}
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
              <NavLink to={FleurDeternite}>
                <img
                  src={FleurDeternite}
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
              <NavLink to={AndrosacesAvecOpinel}>
                <img
                  src={AndrosacesAvecOpinel}
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
              <NavLink to={Printemps}>
                <img
                  src={Printemps}
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
              <NavLink to={PauseCasseCroute}>
                <img
                  src={PauseCasseCroute}
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
              <NavLink to={PauseLecture}>
                <img
                  src={PauseLecture}
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
              <NavLink to={FruitsRouges}>
                <img
                  src={FruitsRouges}
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
              <NavLink to={LesPlaisirsDefendus}>
                <img
                  src={LesPlaisirsDefendus}
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
              <NavLink to={SagesseDeLorient}>
                <img
                  src={SagesseDeLorient}
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
              <NavLink to={MignonneAllonsVoirSiLaRose}>
                <img
                  src={MignonneAllonsVoirSiLaRose}
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
              <NavLink to={CasseCrouteSavoyard}>
                <img
                  src={CasseCrouteSavoyard}
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
              <NavLink to={CerisesEtFraise}>
                <img
                  src={CerisesEtFraise}
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
              <NavLink to={DegustationEnsavoie}>
                <img
                  src={DegustationEnsavoie}
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
              <NavLink to={TommeEtCarlines}>
                <img
                  src={TommeEtCarlines}
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
              <NavLink to={UnGrandBol}>
                <img
                  src={UnGrandBol}
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
              <NavLink to={PainEtOeufs}>
                <img
                  src={PainEtOeufs}
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
              <NavLink to={EncrierI}>
                <img
                  src={EncrierI}
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
              <NavLink to={UnPichetDore}>
                <img
                  src={UnPichetDore}
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
              <NavLink to={Aladin}>
                <img src={Aladin} alt="Aladin" title="Cliquez pour agrandir" />
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
              <NavLink to={EncrierII}>
                <img
                  src={EncrierII}
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
              <NavLink to={PipeEtPichetDoree}>
                <img
                  src={PipeEtPichetDoree}
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
              <NavLink to={PauseCasseCrouteII}>
                <img
                  src={PauseCasseCrouteII}
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
              <NavLink to={UnPetitCroissant}>
                <img
                  src={UnPetitCroissant}
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
              <NavLink to={UnPetitNoir}>
                <img
                  src={UnPetitNoir}
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
              <NavLink to={CognacEtDentelle}>
                <img
                  src={CognacEtDentelle}
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
              <NavLink to={PommeEtChocolat}>
                <img
                  src={PommeEtChocolat}
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
              <NavLink to={FruitsRougesEtConfiture}>
                <img
                  src={FruitsRougesEtConfiture}
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
              <NavLink to={Bonjour}>
                <img
                  src={Bonjour}
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
              <NavLink to={LivresEtRose}>
                <img
                  src={LivresEtRose}
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
              <NavLink to={CasseCrouteEnMontagne}>
                <img
                  src={CasseCrouteEnMontagne}
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
              <NavLink to={CadreLeTempsDesLumieres}>
                <img
                  src={CadreLeTempsDesLumieres}
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
              <NavLink to={Litterature}>
                <img
                  src={Litterature}
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
              <NavLink to={ConfitureEtFruits}>
                <img
                  src={ConfitureEtFruits}
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
