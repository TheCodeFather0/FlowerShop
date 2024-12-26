import { Router } from "express";
import { FlowerModel } from "../Schema/FlowerSchema.js";
import { getServerError } from "../Utils/Errors.js";

export const FlowersRouters = new Router();

//get
FlowersRouters.get("/", (req, res) => {
  FlowerModel.find().then((data) => {
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({
        message: "Flower not found",
      });
    }
  });
});

FlowersRouters.get("/:id", (req, res) => {
  const { id } = req.params;
  FlowerModel.findById(id)
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({
          message: "Flower not found",
        });
      }
    })
    .catch((err) => getServerError(res, err));
});

//post
FlowersRouters.post("/", async (req, res) => {
  FlowerModel.create(req.body)
    .then(() => {
      res.status(201).json({ message: "Flower created successfully" });
    })
    .catch((err) => getServerError(res, err));
});

// delete
FlowersRouters.delete("/:id", (req, res) => {
  const { id } = req.params;
  FlowerModel.findByIdAndDelete(id)
    .then(() => {
      res.status(200).json({ message: "Flower deleted successfully" });
    })
    .catch((err) => getServerError(res, err));
});
