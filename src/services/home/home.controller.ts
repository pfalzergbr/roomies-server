import { Request, Response } from "express";

export class HomeController {
  async homeRouterCheck(req: Request, res: Response) {
    res.status(200).send();
  }
}