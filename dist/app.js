"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("config"));
const connectToDatabase_1 = require("./utils/connectToDatabase");
const logger_1 = __importDefault(require("./utils/logger"));
const createServer_1 = require("./utils/createServer");
const port = config_1.default.get("port");
(0, connectToDatabase_1.connectToDatabase)().then();
const app = (0, createServer_1.createServer)();
app.listen(port, () => {
    logger_1.default.info(`App is running on port ${port}`);
});
//# sourceMappingURL=app.js.map