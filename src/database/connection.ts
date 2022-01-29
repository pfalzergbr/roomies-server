import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "src/user/entity/user";
import config from "config";

interface DatabaseConfigType {
  port: number;
  host: string;
  username: string;
  password: string;
  database: string;
}

const postgresConfig = config.get<DatabaseConfigType>("postgres");

export default createConnection({
  type: "postgres",
  host: postgresConfig.host,
  port: postgresConfig.port,
  username: postgresConfig.username,
  password: postgresConfig.password,
  database: postgresConfig.database,
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: ["src/user/migration/**/*.ts"],
  subscribers: ["src/subscriber/**/*.ts"],
});
