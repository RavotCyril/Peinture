// in controllers/peinture.js
const Model = require('../models/fiche');
const fs = require('fs');


/* Exporte la fonction Administrateur pour supprimer les articles des utilisateurs*/

exports.deleteAdminModelsFiche = (req, res, next) => {
    Model.Article.findOne({ where: { article_id: req.params.id } })
        .then(models => {
            const filename = models.image.split('/images/')[1];
            fs.unlink(`images/${filename}`, () => {
                Models.Article.destroy({ where: { article_id: req.params.id } })
                    .then(() => res.status(200).json({ message: 'article supprimé !' }))
                    .catch(error => res.status(400).json({ error }));
            });
        })
        .catch(error => res.status(500).json({ error }));
};



exports.createFiche = (req, res, next) => {
    // Appel du body de la sauce.
    let peinture = (req.body);

    const model = new Model({
        ...peinture,
        image: `${req.protocol}://${req.get('host')}/images/SansBordure-Grande-Oranges-Et-Dentelle.jpg`,
        likes: 0,
        usersLiked: [],
    });
    model.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !' }))
        .catch(error => res.status(400).json({ error }));
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