import { Router } from "express";
import { HomeController } from "../controllers/home.controller";

const homeController = new HomeController();

export const homeRouter = Router();
homeRouter.get("/check", homeController.homeRouterCheck);
