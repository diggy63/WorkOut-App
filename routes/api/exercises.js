const express = require("express");
const router = express.Router();
const exCtrl = require("../../controllers/exercises");


router.post('/', exCtrl.findToAdd)
router.get('/img', exCtrl.findImg);
router.get('/:qid/queryfor/:bodyid', exCtrl.findSearch)
router.get('/:id', exCtrl.find);
router.post('/create', exCtrl.createNew)






module.exports = router;