const Project = require("../models/project");

// Controller function to fetch all projects
const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    console.log(projects);
    res.json(projects);
  } catch (err) {
    console.error("Error fetching projects:", err);
    res.status(500).json({ error: "Failed to fetch projects" });
  }
};

module.exports = {
  getAllProjects,
};
