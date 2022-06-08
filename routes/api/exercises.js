const express = require("express");
const router = express.Router();
const exCtrl = require("../../controllers/exercises");


router.post('/', exCtrl.createOrFind)
router.get('/img', exCtrl.findImg);
router.get('/:qid/queryfor/:bodyid', exCtrl.findSearch)
router.get('/:id', exCtrl.find);






module.exports = router;