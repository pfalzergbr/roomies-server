"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeRouter = void 0;
const express_1 = require("express");
const home_controller_1 = require("../controllers/home.controller");
const homeController = new home_controller_1.HomeController();
exports.homeRouter = (0, express_1.Router)();
exports.homeRouter.get("/check", homeController.homeRouterCheck);
//# sourceMappingURL=home.routes.js.map