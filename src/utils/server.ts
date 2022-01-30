import express from "express";
import { userRoutes } from "../user/user.routes";

export const createApp = () => {
  const app = express();
  // Middleware Setups
  app.use(express.json());

  // Route Setups
  userRoutes(app);

  return app;
};
