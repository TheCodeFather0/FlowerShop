import { Router } from "express";
import { FlowerModel } from "../Schema/FlowerSchema.js";

export const FlowersRouters = new Router();

FlowersRouters.get("/", (req, res) => {
  FlowerModel.find().then((data) => {
    res.status(200).json(data);
  });
});

FlowersRouters.post("/", async (req, res) => {
  FlowerModel.create(req.body)
    .then(() => {
      res.status(201).json({ message: "Flower created successfully" });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Server error, failed to create flower",
        error: err.message,
      });
    });
});
