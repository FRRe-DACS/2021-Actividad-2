const express = require("express");
const app = express();
const {
  getIngredients,
  editIngredient,
  addIngredient,
  deleteIngredient,
  getIngredient,
  deleteAllIngredients,
} = require("../controllers/ingredientController");

app.get("/ingredients", getIngredients);

app.get("/ingredients/:id", getIngredient);

app.post("/ingredients", addIngredient);

app.patch("/ingredients/:id", editIngredient);

app.delete("/ingredients/:id", deleteIngredient);

app.delete("/ingredients", deleteAllIngredients);


module.exports = app;
