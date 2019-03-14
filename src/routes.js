const express = require('express')

const routes = express.Router()

const productionController = require('./controllers/productionController')

routes.get("/productions", productionController.index)

routes.post("/productions", productionController.store)

routes.post("/Edit/:id", productionController.update)


module.exports = routes