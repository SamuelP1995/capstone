'use strict'

const User = require('./user') 
const Patient = require('./patient')
const History = require('./history')

async function init() {
    await User.sync(); 
    await Patient.sync();
    await History.sync();
};

init();

module.exports = {
    User, 
    Patient,
    History
};