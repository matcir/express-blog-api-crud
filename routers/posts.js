const express = require("express");
const router = express.Router();
const { error } = require("console");
const port = process.env.port || 3000;
const postController = require("../controllers/postController");

//index
router.get("/", postController.index);

//show
router.get("/:id", postController.show);

//store
router.post("/", postController.store);

//destroy
router.delete("/:id", postController.destroy);

module.exports = router;
