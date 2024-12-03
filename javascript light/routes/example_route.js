const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.send("Example route path on @app/example_route")
})

module.exports = router