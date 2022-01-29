import { Request, Response } from "express";

export const userRouteCheck = async (req: Request, res: Response) => {
  res.status(200).send();
};
