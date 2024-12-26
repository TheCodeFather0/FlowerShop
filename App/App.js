import express from "express";
import dotenv from "dotenv";
import { MainRoute } from "./Routers/index.js";
import { FlowersRouters } from "./Routers/flowers.js";
import { connect } from "mongoose";

dotenv.config();
const app = express();
const port = process.env.NODE_PORT;
const CONNECTION_STRING = process.env.MONG0_CONNECTION;

app.use("/", MainRoute);
app.use("/flowers", FlowersRouters);

//make connection
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
  connect(CONNECTION_STRING).then(() => {
    console.log("Mongo db connected");
  });
});
