"use strict";
const Models = require("../models");



const createUser = (req, res) => {
    res.json({ success: true, message: 'New User successfully added' });
}


module.exports = {
    createUser
}