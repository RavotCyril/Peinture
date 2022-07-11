/* Importations Bibliothèques React-router-dom  */
import React from "react";

function Fiche () {

return (
	<main id="PartiePrincipaleFiche">
        <section id="SectionArticle">
            <h2 id="H2">Fiche description peinture</h2>
            <article id="peinture" className="Fiche-">
                <figure className="FigureFiche">
                    <p className="Reference"><span>Référence&nbsp;:</span> &nbsp;</p>
                    <div className="Div-Image-">
                        <img className="ImageFiche" src="" alt="Nom de la peinture" />
                    </div>
                    <figcaption className="FigcaptionFiche">
                        <p className="titre"></p>
                        <p className="prix"></p>
                        <p className="description"></p>
                    </figcaption>
                </figure>
                <div className="Ajouter-Au-Panier"><button>Ajouter au panier</button> <i className="fas fa-shopping-cart"></i>
                </div>
            </article>
        </section>
    </main>
)
}
export default Fiche;