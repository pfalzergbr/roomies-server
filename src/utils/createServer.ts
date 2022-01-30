import express from "express";
import { homeRouter } from "src/services/home/home.routes";
import { userRouter } from "../services/user/user.routes";

export const createServer = () => {
  const app = express();
  // Middleware Setups
  app.use(express.json());
  
  // Route Setups
  app.use("/user", userRouter);
  app.use("/home", homeRouter);

  return app;
};
