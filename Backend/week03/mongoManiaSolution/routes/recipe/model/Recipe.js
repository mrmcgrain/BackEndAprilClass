const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
    recipeName : {
        type : String
    },
    ingredients : {
        type :String,
    },
    directions: {
        type : String,
    },
});

module.exports = mongoose.model("recipe", recipeSchema);