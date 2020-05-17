const { Router } = require('express');

const usersController = require('./controller/users');
const productsController = require('./controller/products');

const routes = Router();

routes.get('/users', usersController.findMany);
routes.post('/users', usersController.create);
routes.delete('/users/:id', usersController.destroy);

routes.get('/products', productsController.findMany);
routes.post('/products', productsController.create);
routes.delete('/products/:id', productsController.destroy);


module.exports = routes;
