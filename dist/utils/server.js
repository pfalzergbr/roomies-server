"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = void 0;
const express_1 = __importDefault(require("express"));
const repositoryLoader_1 = require("../database/repositoryLoader");
const user_routes_1 = require("../user/user.routes");
const createApp = (connection) => {
    const app = (0, express_1.default)();
    // Middleware Setups
    app.use(express_1.default.json());
    // Route Setups
    (0, user_routes_1.userRoutes)(app, new repositoryLoader_1.RepositoryLoader(connection));
    return app;
};
exports.createApp = createApp;
//# sourceMappingURL=server.js.map