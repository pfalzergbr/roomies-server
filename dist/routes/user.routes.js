"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const userController = new user_controller_1.UserController();
exports.userRouter = (0, express_1.Router)();
exports.userRouter.get("/check", userController.userRouterCheck);
//# sourceMappingURL=user.routes.js.map