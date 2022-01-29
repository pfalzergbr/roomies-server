"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositoryLoader = void 0;
class RepositoryLoader {
    constructor(connection) {
        this.connection = connection;
    }
    get userRepository() {
        return this.connection.getRepository("User");
    }
}
exports.RepositoryLoader = RepositoryLoader;
//# sourceMappingURL=repositoryLoader.js.map