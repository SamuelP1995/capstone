const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");


//idk about 'post' maybe something else 
router.post('/', (req, res) => {
    Controllers.createUserController.createUser(req, res);
})

module.exports = router;