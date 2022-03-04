const express = require("express");
const itemController = require("./../controllers/itemController");

const router = express.Router();

router.get("/", (req, res) => {
	res.render("main");
});

module.exports = router;
