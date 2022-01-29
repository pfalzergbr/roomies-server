import { Router } from "express";
import { userRouteCheck } from "./user.controller";

export const userRouter = Router();

userRouter.get("/check", userRouteCheck);
