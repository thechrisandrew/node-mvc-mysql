const express = require("express");
const itemController = require("./../controllers/itemController");

const router = express.Router();

// Services Routes
// router.get("/items");

// Api Routes
router.get("/api/items", itemController.item_list);
router.get("/api/items/:id", itemController.item_detail);
router.post("/api/items", itemController.item_create_post);

module.exports = router;
