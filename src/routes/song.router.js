const { getAll, creaty } = require('../controllers/song.controllers');
const express = require('express');

const songRouter = express.Router();

songRouter.route("/")
		.get(getAll)
		.post(creaty)

module.exports = songRouter;