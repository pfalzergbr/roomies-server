import express from "express";
import { userRouter } from "../services/user/user.routes";

export const createServer = () => {
  const app = express();
  // Middleware Setups
  app.use(express.json());
  app.use("/user", userRouter);
  // Route Setups

  return app;
};
