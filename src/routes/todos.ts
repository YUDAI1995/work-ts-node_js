// ルーティングの設定
// Expressのルータオブジェクトを作成しリクエストを受付けるためのルートを登録する
import { Router } from "express";

import { createTodo, deleteTodo, getTodos, updateTodos } from "../controllers/todos";

// CommonJS, nodeJSでのルータのimport
// const express = require("express");
// const Router = express.Router;

// リクエストを受付けるためのパスを取得
const router = Router();

//CRUD処理
// todoを追加するためのpost API
router.post("/", createTodo);

// todoを取得
router.get("/", getTodos);

// todoを更新
router.patch("/:id", updateTodos);

// 特定のIDを持つtodoを削除するAPI
router.delete("/:id", deleteTodo);

export default router;
