const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");


router.get('/', (req, res) => {
    Controllers.patientController.getPatients(res);
})

router.post('/', (req, res) => {
    Controllers.patientController.createPatient(req, res)
})

router.put('/:id', (req, res) => {
    Controllers.patientController.updatePatient(req, res)
})

router.delete('/:id', (req, res) => {
    Controllers.patientController.deletePatient(req, res)
})

module.exports = router;