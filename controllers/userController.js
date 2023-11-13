"use strict";
const Models = require("../models");

const getUsers = (res) => {
    Models.User.findAll({})
        .then(data => {
        res.send({result: 200 , data: data})
    }).catch(err => {
        console.log(err)
    })
}

const createUser = (req, res) => {
    Models.User.create(req.body)
        .then(data => {
            res.send({ result: 200 , data: data })
        }).catch(err => {
            console.log(err)
        })
}

const updateUser = (req, res) => {
    Models.User.update(req.body, { where: { id: req.params.id }})
        .then(data => {
            res.send({ result: 200, data: data })
        }).catch(err => {
            console.log(err)
        })
}

const deleteUser = (req, res) => {
    Models.User.destroy({ where: { id: req.params.id }})
        .then(data => {
            res.send({ result: 200, data: data })
        }).catch(err => {
            console.log(err)
        })
}


module.exports = {
    getUsers, createUser, updateUser, deleteUser
}