import express from "express";
import cors from "cors";
import { config } from "./config/index";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "TODO Backend is running!" });
});

app.listen(config.port, () => {
  console.log(`Server started on port ${config.port}`);
});
