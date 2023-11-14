"use strict";
const Models = require("../models");



const logout = (req, res) => {
    res.json({ success: true, message: 'User logged out successfully' });
}


module.exports = {
    logout
}