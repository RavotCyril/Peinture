// /* Importation du module Sequelize  */

// const { Sequelize } = require('sequelize');

// /* Il s'agit du chemin de connexion MySQL. Il contient le nom de la base de données,
// le nom d'utilisateur, le mot de passe, le nom d'hôte */

// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//     host: process.env.DB_HOST,
//     dialect: 'mysql',
//     logging: false, //passer a true pour voir les différentes requêtes effectuées par l'ORM

// });
// try {
//     sequelize.authenticate();
//     console.log('Connecté à la base de données MySQL!');
// } catch (error) {
//     console.error('Impossible de se connecter, erreur suivante :', error);
// }
// //on exporte pour utiliser notre connexion depuis les autre fichiers.
// var exports = module.exports = {};
// exports.sequelize = sequelize;

// /* Model Fiche */

// const Fiche = sequelize.define('fiche', {
//     userId: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
//     reference: { type: Sequelize.STRING(255), allowNull: false, },
//     description: { type: Sequelize.STRING(255), allowNull: false, unique: true },
//     prix: { type: Sequelize.INTEGER, allowNull: false },
//     date: { type: Sequelize.STRING(255), allowNull: false },
//     image: { type: Sequelize.STRING(255), allowNull: false },
//     titre: { type: Sequelize.STRING(255), allowNull: false },
// }, { tableName: 'fiche', timestamps: false, underscored: true });

// exports.Fiche = Fiche;

// // Fiche.belongsTo(Vote); //l'utilisateur à un rôle.
// // sequelize.sync({ force: true });