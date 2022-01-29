"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("config"));
const connection_1 = require("./database/connection");
const logger_1 = __importDefault(require("./utils/logger"));
const server_1 = require("./utils/server");
const port = config_1.default.get("port");
(0, connection_1.connectToDatabase)().then((connection) => {
    const app = (0, server_1.createApp)(connection);
    app.listen(port, () => {
        logger_1.default.info(`App is running on port ${port}`);
    });
});
//# sourceMappingURL=app.js.map