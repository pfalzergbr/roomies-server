import { Express } from "express";
import { RepositoryLoader } from "src/database/repositoryLoader";
import { userRouteCheck } from "./user.controller";

export const userRoutes = (app: Express, repositories: RepositoryLoader) => {
  app.get("/check", userRouteCheck);
};
