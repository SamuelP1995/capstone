"use strict";
const Models = require("../models");



const logout = (req, res) => {
    // Clear user token on the server side
    res.json({ success: true, message: 'User logged out successfully' });
}



module.exports = {
    logout
}