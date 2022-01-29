import express from "express";
import config from "config";
import logger from "./utils/logger";
import pino from "pino-http";

const app = express();
app.use(pino());

const port = config.get<string>("port");

app.listen(port, () => logger.info(`App is running on port ${port}`));
