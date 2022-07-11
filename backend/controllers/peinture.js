// in controllers/peinture.js
const Model = require('../models/Fiche');
const fs = require('fs');

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
    } : {...req.body };
    Model.updateOne({ _id: req.params.id }, {...peinture, _id: req.params.id })
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
// Définit le statut "like" pour l'userId fourni. 

exports.createLikePeinture = (req, res, next) => {
    /* UserId  */
    const userId = req.body.userId;
    /* Like présent dans le body */
    const like = req.body.like;
    /* l'id de la peinture */
    const peinture = req.params.id;
    Model.findOne({ _id: peinture })
        .then(peinture => {
            // console.log("avant " + peinture)
            switch (like) {
                // Je ne sais pas  : Si like = 0, L'utilisateur annule son like ou son dislike.

                case 0:
                    // console.log('je sais pas');
                    if (peinture.usersLiked.indexOf(userId) != -1) {
                        peinture.usersLiked.splice(userId, 1)
                        peinture.likes -= 1;
                    }
                    break;
                    // like : Si like = 1, L'utilisateur aime la peinture.

                case 1:
                    // console.log('j`aime');
                    peinture.usersLiked.push(userId);
                    peinture.likes += 1;
                    break;
            };
            peinture.save()
                .then(() => {
                    // console.log("après " + peinture)
                    res.status(200).json({ message: 'Fiche notée' })
                })
                .catch(error => res.status(403).json({ error }))
        });
    // console.log("Fin de la peinture notée");


};