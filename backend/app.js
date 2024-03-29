/* Application */

/* Framework node.js */
const express = require('express');

/* Dotenv est un module sans dépendance qui charge les variables d'environnement 
d'un fichier .env dans process.env.
Le stockage de la configuration dans l'environnement séparé du code est basé sur
la méthodologie de l'application Twelve-Factor. */
require('dotenv').config()
/* Définit des en têtes http supplémentaires securisés  */
const helmet = require('helmet');
/* Donne accès au chemin de nos fichiers. */
const path = require('path');
/* Importe les routes User et articles */
const userRoutes = require('./routes/user');
// const ficheRoutes = require('./routes/fiche');
const app = express();
// Middlewares
/*   
Configuration des cors (Cross-origin resource sharing) 
Le Cross-Origin Resource Sharing ou CORS est un mécanisme qui permet à des ressources restreintes 
d'une page web d'être récupérées par un autre domaine extérieur au domaine 
à partir duquel la première ressource a été servie.
*/
const cors = require('cors');
const corsOption = {
    origin: '*'
}
app.use(cors(corsOption));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Access-Control-Allow-Origin', 'https://rossignol-peinture.fr');
    // res.setHeader('Access-Control-Allow-Origin', 'https://api.rossignol-peinture.fr');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Parse le body des requêtes en Json ( analyse le corps de la requête )

app.use(express.json());

// Permet de sécuriser les headers de l'application
/*  app.use(helmet());...is equivalent to this:The top-level helmet function is a wrapper around 15 smaller middlewares,
11 of which are enabled by default.
  
app.use(helmet.contentSecurityPolicy());
app.use(helmet.dnsPrefetchControl());
app.use(helmet.expectCt());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(helmet.hsts());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.referrerPolicy());
app.use(helmet.xssFilter());

*/
app.use(helmet());

// Routes Images-article - Authentication 

/* Gestion des fichiers images */
// Journalisation du champ rejeté à partir d'une erreur de multer
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
// app.use('/images', express.static(path.join(__dirname, 'images')));
/* Enregistre les routes des articles et auth de l'application */
app.use('/api/auth', userRoutes);
app.use('/api/user', userRoutes);

// app.use('/api/admin', ficheRoutes);
// app.use('/api/fiche', ficheRoutes);


module.exports = app;
