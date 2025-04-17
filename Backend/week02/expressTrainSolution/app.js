const express = require("express");
const logger = require("morgan");
const path = require("path");

const app = express();

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs");
app.use(logger("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) =>{
    res.render("index", {name: "Dr. Strange", info: ["I have a 7-month-old daughter", "I grew up crewing for hot air balloons", "I very much enjoy puzzles"]})
})

app.get("/photo-fun", (req, res) =>{
    res.render("photos");
})

app.get("/:pet/:age", (req, res) =>{
    res.render("pets", {pet: req.params.pet, age: req.params.age})
})

app.listen(3000, () =>{
    console.log(`Server is running on PORT: ${3000}`)
})