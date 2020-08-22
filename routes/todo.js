const express = require('express');
const router = express.Router();
const controller = require('../controllers/todo');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

router.get('/', jsonParser, controller.getAllTodos);

router.get('/todo/:id', jsonParser, controller.getTodo);

router.post('/create', jsonParser, controller.createTodo);

router.post('/edit/:id', jsonParser, controller.updateTodo);

router.post('/delete/:id', jsonParser, controller.updateTodo);

router.post('/check/:id', jsonParser, controller.checkTodo);

router.post('/uncheck/:id', jsonParser, controller.uncheckTodo);

module.exports = router