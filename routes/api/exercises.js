const express = require("express");
const router = express.Router();
const exCtrl = require("../../controllers/exercises");


router.get('/', exCtrl.find);
router.get('/img', exCtrl.findImg)



module.exports = router;