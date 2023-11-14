"use strict";
const Models = require("../models");


const getPatients = (res) => {
    Models.Patient.findAll({})
        .then(data => {
        res.send({result: 200 , data: data})
    }).catch(err => {
        console.log(err)
    })
}

const getPatientById = (req, res) => {
    Models.Patient.findOne({ where: { id: req.params.id }})
        .then(data => {
            res.send({ result: 200, data: data })
        }).catch(err => {
            console.log(err)
        })
}

const createPatient = (req, res) => {
    Models.Patient.create(req.body)
        .then(data => {
            res.send({ result: 200 , data: data })
        }).catch(err => {
            console.log(err)
        })
}

const updatePatient = (req, res) => {
    Models.Patient.update(req.body, { where: { id: req.params.id }})
        .then(data => {
            res.send({ result: 200, data: data })
        }).catch(err => {
            console.log(err)
        })
}

const deletePatient = (req, res) => {
    Models.Patient.destroy({ where: { id: req.params.id }})
        .then(data => {
            res.send({ result: 200, data: data })
        }).catch(err => {
            console.log(err)
        })
}


module.exports = {
    getPatients, getPatientById ,createPatient, updatePatient, deletePatient
}
