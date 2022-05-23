const express = require("express");
const router = express.Router();
const exCtrl = require("../../controllers/exercises");

router.get('/img', exCtrl.findImg)
router.get('/:id', exCtrl.find);




module.exports = router;