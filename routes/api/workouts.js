const express = require("express");
const router = express.Router();
const woCtrl = require("../../controllers/workouts");

router.get('/', woCtrl.getAll)
router.post('/:wid/add/:eid', woCtrl.addEx)
router.post('/exs/repset', woCtrl.changeRepSet);
router.post('/', woCtrl.create);
router.get('/:id', woCtrl.find)






module.exports = router;