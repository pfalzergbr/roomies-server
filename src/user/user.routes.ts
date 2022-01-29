import { Express } from "express";
import { RepositoryLoader } from "src/database/repositoryLoader";
import { UserController, } from "./user.controller";

export const userRoutes = (app: Express, repositoryLoader: RepositoryLoader) => {
  const userController = new UserController(repositoryLoader);

  app.get("/check", userController.userRouterCheck);
};
