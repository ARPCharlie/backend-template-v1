const express = require("express")

const app = express()
const port = 5000

app.get("/", (req, res) => {
    res.send("This is the main route for the Express Template V1 running JS")
})

// Routes
const example_route = require("./routes/example_route")

app.use("/example_route", example_route)

app.listen(port, () => {
    console.log(`App running on ${port}`)
})