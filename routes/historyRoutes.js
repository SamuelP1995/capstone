const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");


router.get('/', (req, res) => {
    Controllers.historyController.getHistory(res);
})

router.get('/:id', (req, res) => {
    Controllers.historyController.getHistoryById(req, res)
})

router.post('/', (req, res) => {
    Controllers.historyController.createHistory(req, res)
})

router.put('/:id', (req, res) => {
    Controllers.historyController.updateHistory(req, res)
})

router.delete('/:id', (req, res) => {
    Controllers.historyController.deleteHistory(req, res)
})

module.exports = router;