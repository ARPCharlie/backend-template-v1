import express from 'express'
const cors = require("cors")
const bodyParser = require("body-parser")

// App Config
const app = express()
const port = 5000

let corsConfig = {
    origin: 'http://localhost/',
    optionsSuccessStatus: 200
}

app.use('/static', express.static('public'))

// Middleware
app.use(cors(corsConfig))
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())


// Local Routes
app.get("/", (req: express.Request, res: express.Response) => {
    res.send("This is the main route for the Express Template V1 running JS")
})

// Routes
const example_route = require("./routes/example_route")

app.use("/example_route", example_route)

// Run app
app.listen(port, () => {
    console.log(`App running on ${port}`)
})