const Food = require("../models/Food");

// list all the food data in the db
exports.showAllFoods = async (req, res) => {
  try {
    const foods = await Food.findAll();
    res.json(foods);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
