//imports
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const projectRoutes = require("./routes/projectRoutes");
require("dotenv").config();

const app = express();

// Middleware to handle JSON requests
app.use(express.json());

// db

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

// CORS middleware
app.use(cors({ origin: true, credentials: true }));

// Use the project routes
app.use("/projects", projectRoutes);

// Port
const port = process.env.PORT || 8080;

// Listener
const server = app.listen(port, () =>
  console.log(`Server is running on port ${port}`)
);
