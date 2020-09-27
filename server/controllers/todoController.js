const Todo = require("../models/todoModel");

exports.todoList = async (request, response) => {
    try {
        console.log(request.query);
        // Instantiating todos variable
        let todos = null;
        if (request.query.user) {
            todos = await Todo.find({ user: request.query.user });
        } else {
            todos = await Todo.find();
        }
        response.status(200).json(todos);
    } catch (err) {
        console.log(err);
        response.status(400).json(err);
    }
};

exports.todoDetail = async (request, response) => {
    try {
        const todo = await Todo.findById(request.params.id);
        response.status(200).json(todo);
    } catch (err) {
        response.status(400).json(err);
    }
};

exports.todoCreate = async (request, response) => {
    try {
        const todo = await Todo.create({
            title: request.body.title,
            content: request.body.content,
            user: request.body.user,
        });
        response.status(200).json(todo);
    } catch (err) {
        response.status(400).json(err);
    }
};

exports.todoUpdate = async (request, response) => {
    try {
        const todo = await Todo.findById(request.params.id);
        todo.title = request.body.title;
        todo.content = request.body.content;
        const savedTodo = await todo.save();
        response.status(200).json(savedTodo);
    } catch (err) {
        response.status(400).json(err);
    }
};

exports.todoDelete = async (request, response) => {
    try {
        const todo = await Todo.findOneAndRemove({ _id: request.params.id });
        response.status(200).json(todo);
    } catch (err) {
        response.status(400).json(err);
    }
};
