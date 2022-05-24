const express = require("express");
const router = express.Router();
const woCtrl = require("../../controllers/workouts");

router.post('/', woCtrl.create);
router.get('/:id', woCtrl.find)
router.put('/:wid/add/:eid', woCtrl.addEx)




module.exports = router;