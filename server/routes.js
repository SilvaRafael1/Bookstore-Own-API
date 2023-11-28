const express = require("express")
const routes = express.Router()

const BookController = require("./controller/BookController")

routes.get("/books", BookController.index);
routes.get('/courses/:id', BookController.show);
routes.post("/courses", BookController.create)
routes.put('/courses/:id', BookController.update);
routes.delete('/courses/:id', BookController.delete);

module.exports = routes