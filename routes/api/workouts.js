const express = require("express");
const router = express.Router();
const woCtrl = require("../../controllers/workouts");

router.get('/', woCtrl.getAll)
router.get('/getdone', woCtrl.getDone)
router.post('/:wid/add/:eid', woCtrl.addEx)
router.post('/exs/repset', woCtrl.changeRepSet);
router.post('/exs/weight', woCtrl.changeWeight);
router.post('/', woCtrl.create);
router.get('/:id', woCtrl.find)
router.post('/track/:id', woCtrl.track)






module.exports = router;