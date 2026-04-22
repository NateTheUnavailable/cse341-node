const routes = require('express').Router();

const myController = require('../controllers');

routes.get('/', myController.coolfunction)
routes.get('/why', myController.whyfunction)


 module.exports = routes;