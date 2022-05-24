const express = require("express");
const router = express.Router();
const woCtrl = require("../../controllers/workouts");

router.get('/', woCtrl.getAll)
router.put('/:wid/add/:eid', woCtrl.addEx)
router.post('/', woCtrl.create);
router.get('/:id', woCtrl.find)





module.exports = router;