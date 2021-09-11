"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ルーティングの設定
// Expressのルータオブジェクトを作成しリクエストを受付けるためのルートを登録する
var express_1 = require("express");
var todos_1 = require("../controllers/todos");
// CommonJS, nodeJSでのルータのimport
// const express = require("express");
// const Router = express.Router;
// リクエストを受付けるためのパスを取得
var router = express_1.Router();
//CRUD処理
// todoを追加するためのpost API
router.post("/", todos_1.createTodo);
// todoを取得
router.get("/", todos_1.getTodos);
// todoを更新
router.patch("/:id", todos_1.updateTodos);
// 特定のIDを持つtodoを削除するAPI
router.delete("/:id", todos_1.deleteTodo);
exports.default = router;
