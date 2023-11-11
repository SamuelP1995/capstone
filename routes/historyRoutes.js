const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");


router.get('/', (req, res) => {
    Controllers.historyController.getHistory(res);
})

router.post('/', (req, res) => {
    Controllers.historyController.createHistory(req.body, res)
})


module.exports = router;