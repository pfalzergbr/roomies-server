import { Request, Response, } from "express";

export const userRouteCheck = (req: Request, res: Response) => {
  res.status(200).send();
}