const express = require("express");
const router = express.Router();
const exCtrl = require("../../controllers/exercises");


router.get('/', exCtrl.find);



module.exports = router;