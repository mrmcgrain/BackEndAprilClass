const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

const PORT = 3000


app.get("/test", (req, res) => {
    console.log("Test is good")
    res.send("All good")
})




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})