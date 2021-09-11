"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// ES modulesのimport
var express_1 = __importDefault(require("express"));
var todos_1 = __importDefault(require("./routes/todos"));
var body_parser_1 = require("body-parser");
// commonJSのimport
//const express = require("express");
var app = express_1.default();
app.use(body_parser_1.json());
// router.tsで設定したルータをサーバーに登録する
app.use("/todos", todos_1.default);
// なにかエラーが起きたときにエラーをキャッチするためのミドルウェア関数
app.use(function (err, req, res, next) {
    res.status(500).json({ message: err.message });
});
// ローカルサーバーの起動
app.listen(3000);
