"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
class UserController {
    constructor(repositoryLoader) {
        this.repositoryLoader = repositoryLoader;
    }
    async userRouterCheck(req, res) {
        res.status(200).send();
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map