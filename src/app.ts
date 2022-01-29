import config from "config";
import { connectToDatabase } from "./database/connection";
import logger from "./utils/logger";
import { createApp } from "./utils/server";

const port = config.get<string>("port");

connectToDatabase().then((connection) => {
  const app = createApp(connection);


  app.listen(port, () => {
    logger.info(`App is running on port ${port}`);
  });
});
