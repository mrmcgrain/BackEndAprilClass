const express = require("express");
const router = express.Router();
const uuidv4 = require("uuid").v4;

let todos = [
        {
            id: "haf24jd",
            todo: "do laundry",
            done: "false"
        },
        {
            id: "jp2nkl2",
            todo: "wash dishes",
            done: "true"
        }
    ];

router.get("/get-all-todos", (req, res) =>{
    res.json({todos});
})

router.get("/get-todo-by-id/:id", (req, res) =>{
    const foundId = todos.findIndex(item => item.id === req.params.id);
    if(foundId > -1){
        res.json({foundTodo : todos[foundId]});
    }else{
        res.json({message: "The Todo ID you are looking for does not exists, please check ID"})
    }
})

router.get("/get-todos-by-done/:isDone", (req, res) =>{
    let newDoneArray;
    newDoneArray = todos.filter(item => item.done == req.params.isDone);
    
    res.json({newDoneArray});
})

router.post("/create-new-todo/:todo", (req, res) =>{
    
    let newTodo = {
        id : uuidv4(),
        todo : req.params.todo,
        done : false
    }
    todos.push(newTodo);
    res.json({todos});
})

module.exports = router;