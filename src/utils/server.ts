import express from "express";
import pino from "pino-http";
import { RepositoryLoader } from "src/database/repositoryLoader";
import { userRoutes } from "src/user/user.routes";
import { Connection } from "typeorm";

export const createApp = (connection: Connection) => {
  const app = express();
  // Middleware Setups
  app.use(express.json());
  app.use(pino());

  // Route Setups
  userRoutes(app, new RepositoryLoader(connection));

  return app;
};
