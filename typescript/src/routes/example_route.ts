import express from 'express'
const router = express.Router()

const exampleController = require("../controllers/example_controller")

// An example route using controllers and models to get a list of users
router.get('/', exampleController.getAllUsers);


module.exports = router