import { Express } from "express";
import { UserController } from "./user.controller";

export const userRoutes = (app: Express) => {
  const userController = new UserController();

  app.get("/check", userController.userRouterCheck);
};
