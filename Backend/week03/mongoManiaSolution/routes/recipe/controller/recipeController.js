const Recipe = require('../model/Recipe');

module.exports = {
    getAllRecipes: (callback) => {
        Recipe.find({}, (err, payload) => {
            if(err){
                callback(err, null);
            }else{
                callback(null, payload);
            }
        })
    },
    createRecipe: (body, callback) => {
        let createdRecipe = new Recipe({
            recipeName: body.recipeName,
            ingredients: body.ingredients,
            directions: body.directions,
        })

        createdRecipe.save((err, payload)=>{
            if(err){
                callback(err, null);
            }else{
                callback(null, payload);
            }
        })
    },
    updateRecipeById: (id, body, callback) =>{
        Recipe.findByIdAndUpdate(
            {_id:id}, 
            body, 
            {new:true}, 
            (err, updatedPayload) =>{
                if (err) {
                    callback(err, null);
                  } else {
                    callback(null, updatedPayload);
                  }
        })
    },
    deleteRecipeById: (id, callback) =>{
        Recipe.findByIdAndRemove({_id:id}, (err, deletedPayload) =>{
            if (err) {
                callback(err, null);
            } else {
                callback(null, deletedPayload);
            }
        })
    }
};