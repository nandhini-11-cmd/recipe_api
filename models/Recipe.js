const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  ingrediants: [String],
  instructions: { type: String },
  cookTime: { type: Number },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Recipe", recipeSchema);