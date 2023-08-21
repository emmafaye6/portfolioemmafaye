const express = require("express");
const projectController = require("../controllers/projectControllers");

const router = express.Router();

// Define routes for projects
router.get("/", projectController.getAllProjects);

module.exports = router;
