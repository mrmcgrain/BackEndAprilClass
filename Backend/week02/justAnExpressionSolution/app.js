const express = require("express");
const logger = require("morgan");
const path = require("path");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());

const indexRouter = require("./routes/indexRouter");
const todoRouter = require("./routes/todoRouter");

app.use("/", indexRouter);
app.use("/api/todo", todoRouter);

app.listen("3000", () =>{
    console.log("Server started on port 3000");
})
