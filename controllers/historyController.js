"use strict";
const Models = require("../models");


const getHistory = (res) => {
    Models.History.findAll({})
        .then(data => {
        res.send({result: 200 , data: data})
    }).catch(err => {
        console.log(err)
    })
}

const createHistory = (req, res) => {
    Models.History.create(req.body)
        .then(data => {
            res.send({ result: 200 , data: data })
        }).catch(err => {
            console.log(err)
        })
}

const updateHistory = (req, res) => {
    Models.History.update(req.body, { where: { id: req.params.id }})
        .then(data => {
            res.send({ result: 200, data: data })
        }).catch(err => {
            console.log(err)
        })
}

const deleteHistory = (req, res) => {
    Models.History.destroy({ where: { id: req.params.id }})
        .then(data => {
            res.send({ result: 200, data: data })
        }).catch(err => {
            console.log(err)
        })
}


module.exports = {
    createHistory, getHistory, updateHistory, deleteHistory
}