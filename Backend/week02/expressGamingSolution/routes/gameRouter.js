const express = require("express");
const router = express.Router();
const uuidv4 = require("uuid").v4;

let games = [
    {
        id: "adowb1b3bb",
        game: "League of Legends",
        description: "League of Legends is a team-based game with over 140 champions to make epic plays with."
    },
    {
        id: "kd7b9ks2nda",
        game: "PlayerUnknown's Battlegrounds",
        description: "PLAYERUNKNOWN'S BATTLEGROUNDS is a last-man-standing shooter being developed with community feedback."
    }
    ]

router.get("/get-all-games", ((req, res) =>{
    res.json({games})
}));

router.get("/get-game-by-id/:id", (req, res) =>{
    let response = {message: "The game with the id does not exist, please check id"};
    games.forEach(item => {
        if(item.id === req.params.id){
            response = item
        }})
    res.json(response);
})

router.get("/get-game-by-name/:game", (req, res) =>{
    let response = {message: "The game with the name does not exist, please check name"};
    
    games.forEach(item => {
        console.log(item, req.params.game)
        if(item.game === req.params.game){
            response = item;
        }})
    res.json(response);
})

router.post("/create-new-game", (req, res) => {
    const newGame = req.body;
    if(!newGame.game || !newGame.description){
        res.json({message: "cannot leave text area blank"});
    }else{
        let gameIndex = games.findIndex(item => item.game === newGame.game);
        console.log(gameIndex)
        if(gameIndex === -1){
            newGame.id = uuidv4();
            games.push(newGame);
            res.json(games)
        }else{
            console.log(gameIndex)
            res.json({message: "Game already exists, cannot add game"});
        }
    }
})

router.put('/update-game/:id', (req, res)=>{
    const {game, description} = req.body //destructure the necessary keys from the body
    let updated = false //boolean to 
    games.forEach(item =>{
        if(item.id === req.params.id){
            item.game = game ? game : item.game
            item.description = description ? description : item.description
            updated = true
        }
    })
    if(updated){
        res.json(games)
    }else
        res.json({message: "game not found, cannot update"})
    }
)
  
router.delete("/delete-game/:id", (req, res) =>{
    const gameIndex = games.findIndex(item => item.id === req.params.id);
    if(gameIndex === -1){
        res.json({message: "game not found, cannot delete"})
    }else{
        games.splice(gameIndex, 1);
        res.json({games})
    }
})



module.exports = router;