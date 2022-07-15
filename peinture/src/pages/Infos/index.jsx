/* Importations Bibliothèques React-router-dom  */
import React from "react";
import { Link } from "react-router-dom";

function Infos() {
  return (
    <main>
      <section className="Tarifs">
        <h2 className="H2-Titre-Tarif">
          Tarifs des natures mortes - Peinture par Mireille Rossignol
        </h2>
        <div className="Legende">
          <p className="PeintureNonDisponible">
            *Peinture non disponile à la vente
          </p>
          {"\n"}
          <p className="PeintureDisponible">*Peinture disponile à la vente</p>
          {"\n"}
          <p className="PeintureDisponibleLien">
            *Lien de la peinture selectionnée
          </p>
          {"\n"}
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
          <div className="grid-item">
            <Link to={{ pathname: "/MesCreations", hash: "BleuPorcelain" }}>
              10P
            </Link>
          </div>
          <div className="grid-item">
            <Link to={{ pathname: "/MesCreations", hash: "BleuPorcelain" }}>
              55x38
            </Link>
          </div>
          <div className="grid-item">
            <Link to={{ pathname: "/MesCreations", hash: "BleuPorcelain" }}>
              890€
            </Link>
          </div>
          <div className="grid-item">
            <Link to={{ pathname: "/MesCreations", hash: "DameJeanne" }}>
              8F
            </Link>
          </div>
          <div className="grid-item">
            <Link to={{ pathname: "/MesCreations", hash: "DameJeanne" }}>
              46x38
            </Link>
          </div>
          <div className="grid-item">
            <Link to={{ pathname: "/MesCreations", hash: "DameJeanne" }}>
              800€
            </Link>
          </div>
          <div className="grid-item">
            <Link to={{ pathname: "/MesCreations", hash: "SouvenirsMarins" }}>
              8F
            </Link>
          </div>
          <div className="grid-item">
            <Link to={{ pathname: "/MesCreations", hash: "SouvenirsMarins" }}>
              46x38
            </Link>
          </div>
          <div className="grid-item">
            <Link to={{ pathname: "/MesCreations", hash: "SouvenirsMarins" }}>
              800€
            </Link>
          </div>
          <div className="grid-item">
            <Link to={{ pathname: "/MesCreations", hash: "OutilsDantan" }}>
              8P
            </Link>
          </div>
          <div className="grid-item">
            <Link to={{ pathname: "/MesCreations", hash: "OutilsDantan" }}>
              46x38
            </Link>
          </div>
          <div className="grid-item">
            <Link to={{ pathname: "/MesCreations", hash: "OutilsDantan" }}>
              780€
            </Link>
          </div>
          <div className="grid-item">
            <Link to={{ pathname: "/MesCreations", hash: "CuivreEtRaisin" }}>
              8P
            </Link>
          </div>
          <div className="grid-item">
            <Link to={{ pathname: "/MesCreations", hash: "CuivreEtRaisin" }}>
              46x38
            </Link>
          </div>
          <div className="grid-item">
            <Link to={{ pathname: "/MesCreations", hash: "CuivreEtRaisin" }}>
              780€
            </Link>
          </div>
          <div className="grid-item">
            <Link to={{ pathname: "/MesCreations", hash: "AvantLeDepart" }}>
              8P
            </Link>
          </div>
          <div className="grid-item">
            <Link to={{ pathname: "/MesCreations", hash: "AvantLeDepart" }}>
              46x38
            </Link>
          </div>
          <div className="grid-item">
            <Link to={{ pathname: "/MesCreations", hash: "AvantLeDepart" }}>
              780€
            </Link>
          </div>
          <div className="grid-item">
            <Link to={{ pathname: "/MesCreations", hash: "Aiguiere" }}>6F</Link>
          </div>
          <div className="grid-item">
            <Link to={{ pathname: "/MesCreations", hash: "Aiguiere" }}>
              41x33
            </Link>
          </div>
          <div className="grid-item">
            <Link to={{ pathname: "/MesCreations", hash: "Aiguiere" }}>
              690€
            </Link>
          </div>
          <div className="grid-item">
            <Link to={{ pathname: "/MesCreations", hash: "CaSePrepare" }}>
              6P
            </Link>
          </div>
          <div className="grid-item">
            <Link to={{ pathname: "/MesCreations", hash: "CaSePrepare" }}>
              41x27
            </Link>
          </div>
          <div className="grid-item">
            <Link to={{ pathname: "/MesCreations", hash: "CaSePrepare" }}>
              650€
            </Link>
          </div>
          <div className="grid-item">
            <Link to={{ pathname: "/MesCreations", hash: "UneAutreEpoque" }}>
              5F
            </Link>
          </div>
          <div className="grid-item">
            <Link to={{ pathname: "/MesCreations", hash: "UneAutreEpoque" }}>
              35x27
            </Link>
          </div>
          <div className="grid-item">
            <Link to={{ pathname: "/MesCreations", hash: "UneAutreEpoque" }}>
              580€
            </Link>
          </div>
          <div className="grid-item">5P</div>
          <div className="grid-item">35x24</div>
          <div className="grid-item">550€</div>
          <div className="grid-item">
            <Link to={{ pathname: "/MesCreations", hash: "VinDeSavoie" }}>
              4F
            </Link>
          </div>
          <div className="grid-item">
            <Link to={{ pathname: "/MesCreations", hash: "VinDeSavoie" }}>
              33x24
            </Link>
          </div>
          <div className="grid-item">
            <Link to={{ pathname: "/MesCreations", hash: "VinDeSavoie" }}>
              480€
            </Link>
          </div>
          <div className="grid-item">
            <Link to={{ pathname: "/MesCreations", hash: "RefletsDeSavoie" }}>
              4F
            </Link>
          </div>
          <div className="grid-item">
            <Link to={{ pathname: "/MesCreations", hash: "RefletsDeSavoie" }}>
              33x24
            </Link>
          </div>
          <div className="grid-item">
            <Link to={{ pathname: "/MesCreations", hash: "RefletsDeSavoie" }}>
              480€
            </Link>
          </div>
          <div className="grid-item">
            <Link to={{ pathname: "/MesCreations", hash: "OrangesEtDentelle" }}>
              4P
            </Link>
          </div>
          <div className="grid-item">
            <Link to={{ pathname: "/MesCreations", hash: "OrangesEtDentelle" }}>
              33x22
            </Link>
          </div>
          <div className="grid-item">
            <Link to={{ pathname: "/MesCreations", hash: "OrangesEtDentelle" }}>
              450€
            </Link>
          </div>
          <div className="grid-item">
            <Link to={{ pathname: "/MesCreations", hash: "UnPetitCreux" }}>
              4P
            </Link>
          </div>
          <div className="grid-item">
            <Link to={{ pathname: "/MesCreations", hash: "UnPetitCreux" }}>
              33x22
            </Link>
          </div>
          <div className="grid-item">
            <Link to={{ pathname: "/MesCreations", hash: "UnPetitCreux" }}>
              450€
            </Link>
          </div>
          <div className="grid-item">
            <Link
              to={{ pathname: "/MesCreations", hash: "PlumeEhrefeufDargent" }}
            >
              3F
            </Link>
          </div>
          <div className="grid-item">
            <Link
              to={{ pathname: "/MesCreations", hash: "PlumeEhrefeufDargent" }}
            >
              27x22
            </Link>
          </div>
          <div className="grid-item">
            <Link
              to={{ pathname: "/MesCreations", hash: "PlumeEhrefeufDargent" }}
            >
              380€
            </Link>
          </div>
          <div className="grid-item">
            <Link
              to={{ pathname: "/MesCreations", hash: "LeTempsDeslumieres" }}
            >
              3F
            </Link>
          </div>
          <div className="grid-item">
            <Link
              to={{ pathname: "/MesCreations", hash: "LeTempsDeslumieres" }}
            >
              27x22
            </Link>
          </div>
          <div className="grid-item">
            <Link
              to={{ pathname: "/MesCreations", hash: "LeTempsDeslumieres" }}
            >
              380€
            </Link>
          </div>
          <div className="grid-item">
            <Link to={{ pathname: "/MesCreations", hash: "VieillesDentelles" }}>
              3P
            </Link>
          </div>
          <div className="grid-item">
            <Link to={{ pathname: "/MesCreations", hash: "VieillesDentelles" }}>
              27x19
            </Link>
          </div>
          <div className="grid-item">
            <Link to={{ pathname: "/MesCreations", hash: "VieillesDentelles" }}>
              350€
            </Link>
          </div>
          <div className="grid-item">
            <Link to={{ pathname: "/MesCreations", hash: "ChocolatChaud" }}>
              3P
            </Link>
          </div>
          <div className="grid-item">
            <Link to={{ pathname: "/MesCreations", hash: "ChocolatChaud" }}>
              27x19
            </Link>
          </div>
          <div className="grid-item">
            <Link to={{ pathname: "/MesCreations", hash: "ChocolatChaud" }}>
              350€
            </Link>
          </div>
          <div className="grid-item">
            <Link to={{ pathname: "/MesCreations", hash: "UnPtitNoir" }}>
              2F
            </Link>
          </div>
          <div className="grid-item">
            <Link to={{ pathname: "/MesCreations", hash: "UnPtitNoir" }}>
              24x19
            </Link>
          </div>
          <div className="grid-item">
            <Link to={{ pathname: "/MesCreations", hash: "UnPtitNoir" }}>
              310€
            </Link>
          </div>
          <div className="grid-item">
            <Link to={{ pathname: "/MesCreations", hash: "Cristaux" }}>2F</Link>
          </div>
          <div className="grid-item">
            <Link to={{ pathname: "/MesCreations", hash: "Cristaux" }}>
              24x19
            </Link>
          </div>
          <div className="grid-item">
            <Link to={{ pathname: "/MesCreations", hash: "Cristaux" }}>
              310€
            </Link>
          </div>
          <div className="grid-item">
            <Link to={{ pathname: "/MesCreations", hash: "CafeEtChocolat" }}>
              2F
            </Link>
          </div>
          <div className="grid-item">
            <Link to={{ pathname: "/MesCreations", hash: "CafeEtChocolat" }}>
              24x19
            </Link>
          </div>
          <div className="grid-item">
            <Link to={{ pathname: "/MesCreations", hash: "CafeEtChocolat" }}>
              310€
            </Link>
          </div>
          <div className="grid-item">2P</div>
          <div className="grid-item">24x16</div>
          <div className="grid-item">290€</div>
          <div className="grid-item">
            <Link to={{ pathname: "/MesCreations", hash: "Felins" }}>1F</Link>
          </div>
          <div className="grid-item">
            <Link to={{ pathname: "/MesCreations", hash: "Felins" }}>
              22x16
            </Link>
          </div>
          <div className="grid-item">
            <Link to={{ pathname: "/MesCreations", hash: "Felins" }}>250€</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
export default Infos;
