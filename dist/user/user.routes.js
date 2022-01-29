"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
exports.userRouter = (0, express_1.Router)();
exports.userRouter.get("/check", user_controller_1.userRouteCheck);
//# sourceMappingURL=user.routes.js.map