// ES modulesのimport
import express, { Request, Response, NextFunction } from "express";
import todoRoutes from "./routes/todos";
import { json } from "body-parser";

// commonJSのimport
//const express = require("express");

const app = express();

app.use(json());

// router.tsで設定したルータをサーバーに登録する
app.use("/todos", todoRoutes);

// なにかエラーが起きたときにエラーをキャッチするためのミドルウェア関数
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

// ローカルサーバーの起動
app.listen(3000);
