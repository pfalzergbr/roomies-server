"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServer = void 0;
const express_1 = __importDefault(require("express"));
const home_routes_1 = require("../routes/home.routes");
const user_routes_1 = require("../routes/user.routes");
const createServer = () => {
    const app = (0, express_1.default)();
    // Middleware Setups
    app.use(express_1.default.json());
    // Route Setups
    app.use("/user", user_routes_1.userRouter);
    app.use("/home", home_routes_1.homeRouter);
    return app;
};
exports.createServer = createServer;
//# sourceMappingURL=createServer.js.map