import express from "express";
import { RepositoryLoader } from "../database/repositoryLoader";
import { userRoutes } from "../user/user.routes";
import { Connection } from "typeorm";

export const createApp = (connection: Connection) => {
  const app = express();
  // Middleware Setups
  app.use(express.json());

  // Route Setups
  userRoutes(app, new RepositoryLoader(connection));

  return app;
};
