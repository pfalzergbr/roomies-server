"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const user_controller_1 = require("./user.controller");
const userRoutes = (app, repositoryLoader) => {
    const userController = new user_controller_1.UserController(repositoryLoader);
    app.get("/check", userController.userRouterCheck);
};
exports.userRoutes = userRoutes;
//# sourceMappingURL=user.routes.js.map