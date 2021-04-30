const express = require("express");
const app = express();

const {
  create,
  getAll,
  getID,
  modifyID,
  deleteID,
  deleteAll
} = require("../controllers/foodControllers");

app.get("/foods", getAll);

app.get("/food/:id", getID);

app.post("/food", create);

app.patch("/food/:id", modifyID);

app.delete("/food/:id", deleteID);

app.delete("/food", deleteAll);

module.exports = app;
