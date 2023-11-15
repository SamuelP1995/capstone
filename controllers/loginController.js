"use strict";
const Models = require("../models");



const login = async (req, res) => {
    const { email, password } = req.body;
  
    const user = await Models.User.findOne({ where: { email }});

    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    if (user.password === password) {
        return res.json({ success: true });
    } else {
        return res.status(401).json({ error: 'Incorrect password' });
    }
}



module.exports = {
    login
}