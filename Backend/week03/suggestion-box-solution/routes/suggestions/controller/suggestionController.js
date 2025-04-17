const Suggestion = require("../model/Suggestion");

async function getAllSuggestions(req, res){
    try{
        let foundAllSuggestions = await Suggestion.find({});
        res.json({message: "success", foundAllSuggestions})
    }catch(e){
        res.json({message: "error", e})
    }
}

async function getSingleSuggestion(req, res){
    try{
        let foundSuggestion = await Suggestion.find({_id:req.params.id});
        res.json({message: "success", foundSuggestion});
    }catch(e){
        res.json({message: "error", error: e.message})
    }
}

async function createSuggestion(req, res){
    try{
        let newSuggestion = new Suggestion({
            title: req.body.title,
            author: req.body.author,
            suggestion: req.body.suggestion,
            });
        
        let created = newSuggestion.save();

        res.json({message: "success", created});
    }catch(e){
        res.json({message: "error", error: e.message})
    }
}

async function updateSuggestion(req, res){
    try{
        let updatedSuggestion = await Suggestion.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json({message: "success", updatedSuggestion});
    }catch(e){
        res.json({message: "error", error: e.message})
    }
}

async function deleteSuggestion(req, res){
    try{
        let deleted = await Suggestion.findByIdAndRemove(req.params.id);
        res.json({message: "success", deleted});
    }catch(e){
        res.json({message: "error", error: e.message})
    }
}

module.exports = {
    getAllSuggestions,
    getSingleSuggestion,
    updateSuggestion,
    deleteSuggestion,
    createSuggestion
};