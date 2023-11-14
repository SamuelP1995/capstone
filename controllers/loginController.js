"use strict";
const Models = require("../models");



const login = (req, res) => {
    const { email, password } = req.body;
  
    const user = Models.User.find((u) => u.email === email);

    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    
    if (Models.User.password === password) {
        return res.json({ success: true });
    } else {
        return res.status(401).json({ error: 'Incorrect password' });
    }
}



module.exports = {
    login
}