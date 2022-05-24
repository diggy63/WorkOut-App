const express = require("express");
const router = express.Router();
const woCtrl = require("../../controllers/workouts");

router.post('/', woCtrl.create);
router.get('/:id', woCtrl.find)




module.exports = router;