const express = require("express");
const router = express.Router();

const recipeController = require("./controller/recipeController");

router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/get-all-recipes", (req, res) => {
  recipeController.getAllRecipes((err, payload) => {
    if (err) {
      res.status(500).json({ message: "Error", error: err });
    } else {
      res.json({ message: "success", data: payload });
    }
  });
});

router.post("/create-recipe", (req, res) =>{
  recipeController.createRecipe(req.body, (err, payload) =>{
    if (err) {
      res.status(500).json({ message: "Error", error: err });
    } else {
      res.json({ message: "success", data: payload});
    }
  });
});

router.put("/update-recipe-by-id/:id", (req, res) =>{
  recipeController.updateRecipeById(req.params.id, req.body, (err, updatedPayload) =>{
    if (err) {
      res.status(500).json({ message: "Error", error: err });
    } else {
      res.json({ message: "success", data: updatedPayload});
    }
  })
});

router.delete("/delete-recipe-by-id/:id", (req, res) =>{
  recipeController.deleteRecipeById(req.params.id, (err, deletedPayload) =>{
    if (err) {
      res.status(500).json({ message: "Error", error: err });
    } else {
      res.json({ message: "success", data: deletedPayload});
    }
  })
})

module.exports = router;
