"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("config"));
const logger_1 = __importDefault(require("./utils/logger"));
const pino_http_1 = __importDefault(require("pino-http"));
const user_routes_1 = require("./user/user.routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, pino_http_1.default)());
app.use("/user", user_routes_1.userRouter);
const port = config_1.default.get("port");
app.listen(port, () => {
    logger_1.default.info(`App is running on port ${port}`);
});
//# sourceMappingURL=app.js.map