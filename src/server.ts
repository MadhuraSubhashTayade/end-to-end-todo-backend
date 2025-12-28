import express from "express";
import cors from "cors";
import { config } from "./config/index";
import todoRoutes from "./routes/todoRoutes";
import { errorHandler } from "./utils/errorHandler";
import { connectDb } from "./config/db";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", todoRoutes);
app.use(errorHandler);

connectDb().then(() => {
  app.listen(config.port, () => {
    console.log(`Server started on port ${config.port}`);
  });
});
