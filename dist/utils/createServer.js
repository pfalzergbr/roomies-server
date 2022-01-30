"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServer = void 0;
const express_1 = __importDefault(require("express"));
const user_routes_1 = require("../user/user.routes");
const createServer = () => {
    const app = (0, express_1.default)();
    // Middleware Setups
    app.use(express_1.default.json());
    app.use("/user", user_routes_1.userRouter);
    // Route Setups
    return app;
};
exports.createServer = createServer;
//# sourceMappingURL=createServer.js.map