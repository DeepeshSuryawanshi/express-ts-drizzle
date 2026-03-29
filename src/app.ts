import express from "express";
import { logger } from "./config/logger";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  logger.info("Health check hit");
  res.json({ message: "API running" });
});

export default app;