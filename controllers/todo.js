const model = require("../models/todo");

exports.getAllTodos = async (req,res) => {
    const todoItems = await model.getAll();
    res.send(todoItems);
}

exports.getTodo = async (req,res) => {
    const id = req.params.id;
    const todoItem = await model.getItemById(id);
    res.send(todoItem);
}

exports.createTodo = async (req,res) => {
    const newTodo = {
        title: req.body.title,
        done: false
    }
    const createdTodo = await model.createItem(newTodo);
    res.send(createdTodo);
}

exports.updateTodo = async (req,res) => {
    const id = req.params.id;
    const body = req.body;
    const updatedTodo = await model.updateItem(id, body);
    res.send(updatedTodo);
}

exports.deleteTodo = async (req, res) => {
    const id = req.params.id;
    const deletedTodo = await model.deleteItem(id);
    res.send("Todo with ID: " + id + " was succesfully deleted");
}

exports.checkTodo = async (req, res) => {
    const id = req.params.id;
    const checkedTodo = await model.checkItem(id)
    res.send(checkedTodo);
}

exports.uncheckTodo = async (req, res) => {
    const id = req.params.id;
    const uncheckedTodo = await model.uncheckItem(id)
    res.send(uncheckedTodo);
}