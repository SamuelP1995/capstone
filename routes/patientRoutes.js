const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");


router.get('/', (req, res) => {
    Controllers.patientController.getPatient(res);
})

router.post('/', (req, res) => {
    Controllers.patientController.createPatient(req.body, res)
})


module.exports = router;