import { Request, Response } from "express";
import { RepositoryLoader } from "src/database/repositoryLoader";

export class UserController {
  constructor(private repositoryLoader: RepositoryLoader) {}
  
  async userRouterCheck(req: Request, res: Response) {
    res.status(200).send();
  }
}
