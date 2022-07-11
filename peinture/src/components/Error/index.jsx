/* Importations Bibliothèques React - Image Page Error ...   */
import React from "react";
import ImageError from "../../images/404.svg";

function Error() {
  return (
    <div className="container-fluid Menu m-0">
      <div className="row">
        <h1 className="p-1">
          ERROR <br></br>
          Il semblerait que la page que vous cherchez n’existe pas.
        </h1>
        <br></br>
        <div className="col-6 mx-auto">
          <img src={ImageError} alt="Message d'erreur" />;
        </div>
      </div>
    </div>
  );
}

export default Error;
