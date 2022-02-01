import "reflect-metadata";
import { Connection, createConnection } from "typeorm";
import { User } from "../entity/User";
import { Home } from "../entity/Home";
import logger from "./logger";
import config from "config";

interface DatabaseConfigType {
  port: number;
  host: string;
  username: string;
  password: string;
  database: string;
}

export const connectToDatabase = async (): Promise<Connection> => {
  const dbConfig = config.get<DatabaseConfigType>("postgres");

  try {
    return await createConnection({
      type: "postgres",
      host: dbConfig.host,
      port: dbConfig.port,
      username: dbConfig.username,
      password: dbConfig.password,
      database: dbConfig.database,
      synchronize: true,
      logging: false,
      entities: [User, Home],
      // migrations: ["src/migration/**/*.ts"],
      // subscribers: ["src/subscriber/**/*.ts"],
    });
  } catch (error) {
    logger.error(error, "Error creating a database connection");
    process.exit(1);
  }
};
