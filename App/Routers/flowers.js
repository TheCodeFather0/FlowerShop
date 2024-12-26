import { Router } from "express";

export const FlowersRouters = new Router();

FlowersRouters.get("/", (req, res) => {
  res.send([]);
});
