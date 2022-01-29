import { User } from "src/user/entity/user";
import { Connection, Repository } from "typeorm";

export class RepositoryLoader {
  constructor(private connection: Connection) {}

  get userRepository(): Repository<User> {
    return this.connection.getRepository("User");
  }
}
