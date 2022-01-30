"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const user_1 = require("../user/entity/user");
const logger_1 = __importDefault(require("./logger"));
const config_1 = __importDefault(require("config"));
const connectToDatabase = async () => {
    const dbConfig = config_1.default.get("postgres");
    try {
        return await (0, typeorm_1.createConnection)({
            type: "postgres",
            host: dbConfig.host,
            port: dbConfig.port,
            username: dbConfig.username,
            password: dbConfig.password,
            database: dbConfig.database,
            synchronize: true,
            logging: false,
            entities: [user_1.User],
            migrations: ["src/migration/**/*.ts"],
            subscribers: ["src/subscriber/**/*.ts"],
        });
    }
    catch (error) {
        logger_1.default.error(error, "Error creating a database connection");
        process.exit(1);
    }
};
exports.connectToDatabase = connectToDatabase;
//# sourceMappingURL=connectToDatabase.js.map