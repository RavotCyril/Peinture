/* Importations des bibliothèques react + Yarn 
-> React, useState , PasswordChecklist + axios (Api post-get..) */

import React, { useState } from "react";
import PasswordChecklist from "react-password-checklist";
import axios from "axios";
// /* Importations des pages de styles + images */
import "../../Styles/App.css";

function Signup() {
  const [firstName, setfirstNameData] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasswordData] = useState("");
  const [isValid, setIsValid] = useState();
  const [message, setMessage] = useState("");

  /* Fonction pour vérifier ce que l'on écrit dans l'input Password  */
  function handleChangePassword(e) {
    setPasswordData(e.target.value);
  }
  /* Fonction pour vérifier ce que l'on écrit dans l'input FirstName  */

  function handleChangeFirstName(e) {
    setfirstNameData(e.target.value);
  }
  /* Fonction de l'input et du submit de tentative d'enregistrement 
   + Appel Post Api et transmission des proprietés enregistrés 
   -> firstName, email, password et le role_id (2: utilisateur )
   le role_id ( 1: administrateur ) est prit par moi même */
  function testSignup() {
    /* Vérifier le mot de passe et si les valeurs firstName, email, password sont complétés et donc valide.
     La sécurité + la vérification des inputs du mot de passe et de l'émail sur le front
    permet d'être sur que les données sont valides au préalable  */
    if (firstName && email && password) {
      axios
        .post("https://api.rossignol-peinture.fr/api/auth/signup", {
          firstName,
          email,
          password,
          roleId: 2,
        })
        // enregistrer le hash et permet de sécuriser le mot de passe et de le remplacer ( Crypté ).
        .then((res) => {
          window.location.href = "https://rossignol-peinture.fr/login";
        })
        .catch((err) => {
          if (err.status === 400) {
            console.log("l'utilisateur existe déjà");
          } else if (err.status === 500) {
            console.log("erreur serveur");
          }
        });
    } else {
      alert("veuillez remplir correctement les champs Prénom, Email, Password");
    }
  }
  /* L'expression régulière pour valider l'email
  // Permet de détecter si l'email est un émail valide au focus, onblur, onChange
  Avec forcément un  @  et un . + 2 lettre après fr ou com ou autre ..  */
  const emailRegex = /[\w-]+@[\w-]+\.[a-z]{2,4}$/i;

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
    if (emailRegex.test(email)) {
      setIsValid(true);
      setMessage("✔  Votre émail est validé !");
    } else {
      setIsValid(false);
      setMessage("✖  Veuillez saisir une adresse émail valide !");
    }
  };

  return (
    <main>
      <form className="Inscription container-fluid">
        <h1 className="form-group H1Signup col-12 text-center mx-auto">
          Envie de vous rappelez de vos peintures favorites ? <br></br>
          Créer un profil !
        </h1>
        <div className="row">
          <div className="form-group col-8 mx-auto">
            <label htmlFor="FirstName">Prénom</label>
            <input
              title="Merci d'indiquer un prénom valide de maximum 20 caractères"
              maxLength="20"
              name="firstName"
              className="form-control"
              type="text"
              placeholder="mireille"
              onChange={handleChangeFirstName}
            />
          </div>
          <div className="form-group col-8 my-2 mx-auto relative">
            <label htmlFor="Email">Email</label>
            <input
              title="Merci d'indiquer un émail valide"
              autoComplete="email"
              type="email"
              name="email"
              className="form-control"
              placeholder="mireille@hotmail.fr"
              onChange={handleChangeEmail}
              onBlur={handleChangeEmail}
              onFocus={handleChangeEmail}
            />
            <div className="col-12 d-flex text-center">
              <div className={`message ${isValid ? "valid" : "invalid"}`}>
                <br></br>
                {message}
              </div>
            </div>
          </div>
        </div>
        <div className="form-group col-8 my-4 mx-auto">
          <label htmlFor="Password">Mot de passe</label>
          <input
            title="Merci d'indiquer un mot de passe valide"
            id="Password"
            name="password"
            type="password"
            className="form-control"
            aria-describedby="Tapper votre mot de passe"
            onChange={handleChangePassword}
            onBlur={handleChangePassword}
            onFocus={handleChangePassword}
            placeholder="Azerty69"
          />
          <PasswordChecklist
            rules={["minLength", "maxLength", "capital", "lowercase", "number"]}
            minLength={8}
            value={password}
            error="red"
            margin="5px"
            messages={{
              minLength: "Le mot de passe doit contenir au moins 8 caractères",
              maxLength: "Le mot de passe peut contenir maximum 100 caractères",
              capital: "Le mot de passe doit avoir au moins 1 lettre majuscule",
              lowercase: "Le mot de passe contient une lettre minuscule",
              number: "Le mot de passe doit avoir au moins 2 chiffres",
            }}
          />
        </div>
        <div className="col-6 col-sm-4 mx-auto">
          <input
            type="button"
            name="submit"
            onClick={() => {
              testSignup();
            }}
            className="form-control btn btn-primary col-2 my-2 mx-auto"
            value="S'enregistrer"
            aria-describedby="Bouton de validation pour s'enregistrer"
          />
        </div>
      </form>
    </main>
  );
}

export default Signup;
