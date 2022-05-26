const express = require("express");
const router = express.Router();
const woCtrl = require("../../controllers/workouts");



router.get('/dones', woCtrl.getDone)
router.get('/allofone/:id', woCtrl.findAllofOne)
router.get('/', woCtrl.getAll)
router.post('/:wid/add/:eid', woCtrl.addEx)
router.post('/exs/repset', woCtrl.changeRepSet);
router.post('/exs/weight', woCtrl.changeWeight);
router.post('/', woCtrl.create);
router.post('/track/:id', woCtrl.track)
router.get('/:id', woCtrl.find)






module.exports = router;