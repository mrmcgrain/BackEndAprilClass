const express = require('express')
const app = express()
app.use(express.json()) // allows access to the request.body
const uuid = require('uuid')


// let db = ["test", "eat", "sleep", "walk"]
let db = [
    { id: "1", task: "test" },
    { id: "2", task: "eat" },
    { id: "3", task: "sleep" },
    { id: "4", task: "walk" }
]


app.get("/get", (req, res) => {
    console.log("Get route hit", db, uuid.v4())
    res.json(db)
})
app.get("/query", (req, res) => {
    console.log("query route hit", db, req.query)
    res.send("Hello Pokemon", db, req.query)
})

app.post("/post", (req, res) => {
    console.log("POST route hit", req.body)
    // Create new todo with UUID
    const newTodo = {
        id: uuid.v4(),
        task: req.body.todo
    }
    // Add to database
    db.push(newTodo)
    res.json({ msg: "Todo created", todo: newTodo, db })
})

app.delete("/delete/:id", (req, res) => {
    console.log("Delete route HIT", req.params, db)
    console.log("filter", db.filter((item) => item.id != req.params.id))
    db = db.filter((item) => item.id !== req.params.id)
    console.log("DB", db)
    res.json(db)
})

app.put("/put/:todo", (req, res) => {
    console.log("PUT route hit --", "params:", req.params.todo, "req.body:", req.body)
})


app.listen(3000, () => {
    console.log("Server is Running")
})


