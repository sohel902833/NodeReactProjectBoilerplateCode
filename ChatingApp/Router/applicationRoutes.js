const express = require("express");
const router = express.Router();
const { getHome } = require("../Controller/applicationController");
router.get("/", getHome);

module.exports = router;
