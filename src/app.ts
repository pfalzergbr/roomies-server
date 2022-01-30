import config from "config";
import { connectToDatabase } from "./utils/connectToDatabase";
import logger from "./utils/logger";
import { createServer } from "./utils/createServer";

const port = config.get<string>("port");

connectToDatabase().then();
const app = createServer();

app.listen(port, () => {
  logger.info(`App is running on port ${port}`);
});
