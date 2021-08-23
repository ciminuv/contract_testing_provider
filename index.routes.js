const router = require('express').Router();
const controller = require('./intent.controller');

router.post("/api/v2/alfred/intent", controller.create);

module.exports = router;
