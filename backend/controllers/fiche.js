// in controllers/peinture.js
const Model = require('../models/fiche');
const fs = require('fs');


/* Exporte la fonction Administrateur pour supprimer les Fiches des utilisateurs*/

exports.deleteAdminModelsFiche = (req, res, next) => {
    Model.Fiche.findOne({ where: { userId: req.params.id } })
        .then(models => {
            const filename = models.image.split('/images/')[1];
            fs.unlink(`images/${filename}`, () => {
                Model.Fiche.destroy({ where: { userId: req.params.id } })
                    .then(() => res.status(200).json({ message: 'Fiche supprimé !' }))
                    .catch(error => res.status(400).json({ error }));
            });
        })
        .catch(error => res.status(500).json({ error }));
};

exports.createFiche = (req, res, next) => {
    var date = new Date();
    // date = date.toString("MMM,yyy");
    const dateParser = (date) => {
        let newDate = new Date(date).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
        });
        return newDate;
    };
    date = dateParser(date);

    Model.Fiche.create({
        userId: req.body.userId,
        reference: req.body.reference,
        description: req.body.description,
        prix: req.body.prix,
        date: date,
        image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
        titre: req.body.titre,
    }).then(() => res.status(201).json({ message: 'Fiche créé !' }))
        .catch(error => res.status(400).json({ message: error.message }));
};

exports.getOneFiche = (req, res, next) => {
    Model.findOne({
        _id: req.params.id
    }).then(
        (Model) => {
            res.status(200).json(Model);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};
exports.modifyFiche = (req, res, next) => {
    const peinture = req.file ? {
        ...JSON.parse(req.body.peinture),
        image: req.file == undefined ? "" : `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };
    Model.updateOne({ _id: req.params.id }, { ...peinture, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet modifié !' }))
        .catch(error => res.status(400).json({ error }));
};

exports.deleteFiche = (req, res, next) => {
    Model.findOne({ _id: req.params.id })
        .then(peinture => {
            const filename = peinture.imageUrl.split('/images/')[1];
            fs.unlink(`images/${filename}`, () => {
                Model.deleteOne({ _id: req.params.id })
                    .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
                    .catch(error => res.status(400).json({ error }));
            });
        })
        .catch(error => res.status(500).json({ error }));
};

exports.getAllFiche = (req, res, next) => {
    Model.find().then(
        (Models) => {
            res.status(200).json(Models);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};