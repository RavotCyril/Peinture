const express = require('express');
const router = express.Router();

const peintureCtrl = require('../controllers/peinture');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.get('/', auth, peintureCtrl.getAllFiche);
router.get('/:id', auth, peintureCtrl.getOneFiche);
router.post('/', auth, multer, peintureCtrl.createFiche);
router.post('/:id/like', auth, multer, peintureCtrl.createLikePeinture);
router.put('/:id', auth, multer, peintureCtrl.modifyFiche);
router.delete('/:id', auth, peintureCtrl.deleteFiche);


module.exports = router;