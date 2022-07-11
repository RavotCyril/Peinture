const mongoose = require('mongoose');

const ficheSchema = mongoose.Schema({
    userId: { type: String},
    reference: { type: Number},
    image: { type: String},
    titre: { type: String},
    prix: { type: Number},
    likes: { type: Number },
    description: { type: String },
    usersLiked: { type: Array },
});

module.exports = mongoose.model('Model', ficheSchema);