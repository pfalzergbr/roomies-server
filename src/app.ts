import express from "express";
import config from "config";
import logger from "./utils/logger";
import pino from "pino-http";
import { userRouter } from "./user/user.routes";

const app = express();
app.use(express.json())
app.use(pino());
app.use(userRouter);

const port = config.get<string>("port");

app.listen(port, () => {
  logger.info(`App is running on port ${port}`);
});
