const Recipe = require('../models/Recipe');

exports.createRecipe = async (req, res) => {
  try {
    const recipe = new Recipe(req.body);
    await recipe.save();
    res.status(201).json({ message: "Recipe added" });
  } catch (err) {
    res.status(500).json({ message: "Error while saving!", err });
  }
};

exports.getAllRecipes = async (req, res) => {
  try {
    const allRecipes = await Recipe.find();
    res.status(200).json(allRecipes);
  } catch (err) {
    res.status(500).json({ message: "Error while fetching!", err });
  }
};

exports.getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });
    res.status(200).json(recipe);
  } catch (err) {
    res.status(500).json({ message: "Error fetching recipe", err });
  }
};

exports.updateRecipe = async (req, res) => {
  try {
    const updated = await Recipe.findByIdAndUpdate(req.params.id, req.body, {new: true,runValidators: true,});
    if (!updated) return res.status(404).json({ message: "Recipe not found" });
    res.status(200).json({ message: "Recipe updated", data: updated });
  } catch (err) {
    res.status(500).json({ message: "Error updating recipe", err });
  }
};

exports.deleteRecipe = async (req, res) => {
  try {
    const deleted = await Recipe.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Recipe not found" });
    res.status(200).json({ message: "Recipe deleted", deleted });
  } catch (err) {
    res.status(500).json({ message: "Error deleting recipe", err });
  }
};
