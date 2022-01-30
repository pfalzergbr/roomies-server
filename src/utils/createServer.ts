import express from "express";
import { homeRouter } from "src/routes/home.routes";
import { userRouter } from "../routes/user.routes";

export const createServer = () => {
  const app = express();
  // Middleware Setups
  app.use(express.json());
  
  // Route Setups
  app.use("/user", userRouter);
  app.use("/home", homeRouter);

  return app;
};
