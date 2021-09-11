"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodos = exports.getTodos = exports.createTodo = void 0;
var todo_1 = require("../models/todo");
var TODOS = [];
var createTodo = function (req, res, next) {
    var text = req.body.text;
    var newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: "TODOを作成しました", createdTodo: newTodo });
};
exports.createTodo = createTodo;
var getTodos = function (req, res, next) {
    res.json({ todos: TODOS });
};
exports.getTodos = getTodos;
var updateTodos = function (req, res, next) {
    var todoId = req.params.id;
    var updateText = req.body.text;
    var todoIndex = TODOS.findIndex(function (todo) { return todo.id === todoId; });
    if (todoIndex < 0) {
        throw new Error("対象のTODOが見つかりませんでした");
    }
    TODOS[todoIndex] = new todo_1.Todo(todoId, updateText);
    res.json({ message: "更新しました", updatedText: TODOS[todoIndex] });
};
exports.updateTodos = updateTodos;
var deleteTodo = function (req, res, next) {
    var todoId = req.params.id;
    var todoIndex = TODOS.findIndex(function (todo) { return todo.id === todoId; });
    if (todoIndex < 0) {
        throw new Error("対象のTODOが見つかりませんでした");
    }
    TODOS.splice(todoIndex, 1);
    res.json({ message: "削除しました" });
};
exports.deleteTodo = deleteTodo;
