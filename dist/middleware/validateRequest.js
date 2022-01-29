"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../utils/logger"));
const validateRequest = (schema) => (req, res, next) => {
    try {
        schema.parse({
            body: req.body,
            query: req.query,
            params: req.params,
        });
        next();
    }
    catch (error) {
        logger_1.default.error(error, `Validation failed. Error: ${error.error}`);
        res.status(400).send({ error: "Invalid Request" });
    }
};
exports.default = validateRequest;
//# sourceMappingURL=validateRequest.js.map