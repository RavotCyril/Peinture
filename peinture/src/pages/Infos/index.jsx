    /* Importations Bibliothèques React-router-dom  */
import React from "react";
import { NavLink } from "react-router-dom";


function Infos() {

	return (
	 <main>
        <section className="Tarifs">
            <h2 className="H2-Titre-Tarif">Tarifs des natures mortes - Peinture par Mireille Rossignol</h2>
            <div className="Legende">
                <p className="PeintureNonDisponible">*Peinture non disponile à la vente</p>{"\n"}
                <p className="PeintureDisponible">*Peinture disponile à la vente</p>{"\n"}
                <p className="PeintureDisponibleLien">*Lien de la peinture selectionnée</p>{"\n"}
            </div>
            <div className="grid-container">
                <div className="grid-item1">Dimensions</div>
                <div className="grid-item2">Prix</div>
                <div className="grid-item">12F</div>
                <div className="grid-item">61x50</div>
                <div className="grid-item">1200€</div>
                <div className="grid-item">12P</div>
                <div className="grid-item">61x46</div>
                <div className="grid-item">1080€</div>
                <div className="grid-item">10F</div>
                <div className="grid-item">55x46</div>
                <div className="grid-item">980€</div>
                <div className="grid-item"><NavLink to="MesCreations#BleuPorcelaine">10P</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#BleuPorcelaine">55x38</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#BleuPorcelaine">890€</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#DameJeanne">8F</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#DameJeanne">46x38</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#DameJeanne">800€</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#SouvenirsMarins">8F</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#SouvenirsMarins">46x38</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#SouvenirsMarins">800€</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#OutilsDantan">8P</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#OutilsDantan">46x38</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#OutilsDantan">780€</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#CuivreEtRaisin">8P</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#CuivreEtRaisin">46x38</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#CuivreEtRaisin">780€</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#AvantLeDepart">8P</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#AvantLeDepart">46x38</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#AvantLeDepart">780€</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#Aiguiere">6F</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#Aiguiere">41x33</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#Aiguiere">690€</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#CaSePrepare">6P</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#CaSePrepare">41x27</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#CaSePrepare">650€</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#UneAutreEpoque">5F</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#UneAutreEpoque">35x27</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#UneAutreEpoque">580€</NavLink></div>
                <div className="grid-item">5P</div>
                <div className="grid-item">35x24</div>
                <div className="grid-item">550€</div>
                <div className="grid-item"><NavLink to="MesCreations#VinDeSavoie">4F</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#VinDeSavoie">33x24</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#VinDeSavoie">480€</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#RefletsDeSavoie">4F</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#RefletsDeSavoie">33x24</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#RefletsDeSavoie">480€</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#OrangesEtDentelle">4P</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#OrangesEtDentelle">33x22</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#OrangesEtDentelle">450€</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#UnPetitCreux">4P</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#UnPetitCreux">33x22</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#UnPetitCreux">450€</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#PlumeEtOeufDargent">3F</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#PlumeEtOeufDargent">27x22</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#PlumeEtOeufDargent">380€</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#LeTempsDeslumieres">3F</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#LeTempsDeslumieres">27x22</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#LeTempsDeslumieres">380€</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#VieillesDentelles">3P</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#VieillesDentelles">27x19</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#VieillesDentelles">350€</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#ChocolatChaud">3P</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#ChocolatChaud">27x19</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#ChocolatChaud">350€</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#UnPtitNoir">2F</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#UnPtitNoir">24x19</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#UnPtitNoir">310€</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#Cristaux">2F</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#Cristaux">24x19</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#Cristaux">310€</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#CafeEtChocolat">2F</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#CafeEtChocolat">24x19</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#CafeEtChocolat">310€</NavLink></div>
                <div className="grid-item">2P</div>
                <div className="grid-item">24x16</div>
                <div className="grid-item">290€</div>
                <div className="grid-item"><NavLink to="MesCreations#Felins">1F</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#Felins">22x16</NavLink></div>
                <div className="grid-item"><NavLink to="MesCreations#Felins">250€</NavLink></div>
            </div>
        </section>
    </main>
)
}
	 export default Infos;
