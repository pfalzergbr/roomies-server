import { Router } from "express";
import { HomeController } from "./home.controller";

const homeController = new HomeController();

export const homeRouter = Router();
homeRouter.get("/check", homeController.homeRouterCheck);
