import {  Router } from "express";
import { HomeController } from "./home.controller";


const homeController = new HomeController()
export const userRouter = Router();
userRouter.get("/check", homeController.homeRouterCheck)