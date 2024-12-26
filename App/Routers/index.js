import path from "path";
import { Router } from "express";

export const MainRoute = new Router();

MainRoute.get("/", (req, res) => {
  res.sendFile(path.resolve("./main.html"));
});
