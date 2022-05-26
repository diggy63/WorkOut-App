const express = require("express");
const router = express.Router();
const likeCtrl = require("../../controllers/likes");

router.get('/', likeCtrl.findAll)
router.post('/:id', likeCtrl.createOne)
router.delete('/:id', likeCtrl.deleteOne)






module.exports = router