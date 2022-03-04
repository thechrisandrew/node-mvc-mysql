const express = require("express");
const itemController = require("./../controllers/itemController");

const router = express.Router();

router.get("/", itemController.index);
router.get("/add", itemController.create);

module.exports = router;
