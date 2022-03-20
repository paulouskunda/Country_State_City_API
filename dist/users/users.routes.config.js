"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const users_controller_1 = __importDefault(require("./controller/users.controller"));
const users_middleware_1 = __importDefault(require("./middleware/users.middleware"));
class UserRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, "UserRoutes");
    }
    configureRoutes() {
        this.app
            .route('/users')
            .get(users_controller_1.default.listUsers)
            .post(users_middleware_1.default.validateRequiredUserBodyFields, users_middleware_1.default.validateSameEmailDoesntExist, users_controller_1.default.createUser);
        this.app.param(`userId`, users_middleware_1.default.extractUserId);
        this.app
            .route(`/users/:userId`)
            .all(users_middleware_1.default.validateUserExists)
            .get(users_controller_1.default.getUserById);
        // .delete(UsersController.removeUser) 
        this.app.put(`/users/:userId`, [
            users_middleware_1.default.validateRequiredUserBodyFields,
            users_middleware_1.default.validateSameEmailBelongToSameUser,
            users_controller_1.default.put,
        ]);
        this.app.patch(`/users/:userId`, [
            users_middleware_1.default.validatePatchEmail,
            users_controller_1.default.patch,
        ]);
        return this.app;
    }
}
exports.UserRoutes = UserRoutes;
// this.app.route(`/user`).get((req: express.Request, res: express.Response) => {
//     res.status(statusCodes.HttpStatus_OK.value).send("List of users")
// })
// this.app.route(`/user`).post((req: express.Request, res: express.Response) => {
//     res.status(statusCodes.HttpStatus_CREATED.value).send("User created!")
// })
// this.app.route(`/users/:userId`)
// .all((req: express.Request, res: express.Response, next: express.NextFunction) => {
//     // this middleware function runs before any request to /users/:userId
//     // but it doesn't accomplish anything just yet---
//     // it simply passes control to the next applicable function below using next()
//     next()
// })
// .get((req: express.Request, res: express.Response) => {
//     res.status(statusCodes.HttpStatus_OK.value).send(`GET requested for id ${req.params.userId}`)
// })
// .put((req: express.Request, res: express.Response) => {
//     res.status(203).send(`PUT requested for id ${req.params.userId}`)
// })
// .patch((req: express.Request, res: express.Response) => {
//     res.status(203).send(`PATCH requested for id ${req.params.userId}`)
// })
// .delete((req: express.Request, res: express.Response) => {
//     res.status(204).send(`DELETE requested for id ${req.params.userId}`)
// })
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2Vycy91c2Vycy5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHlFQUFtRTtBQUVuRSxxRkFBMkQ7QUFFM0QscUZBQTJEO0FBRTNELE1BQWEsVUFBVyxTQUFRLHlDQUFrQjtJQUM5QyxZQUFZLEdBQXdCO1FBQ2hDLEtBQUssQ0FBQyxHQUFHLEVBQUUsWUFBWSxDQUFDLENBQUE7SUFDNUIsQ0FBQztJQUdELGVBQWU7UUFFWCxJQUFJLENBQUMsR0FBRzthQUNILEtBQUssQ0FBQyxRQUFRLENBQUM7YUFDZixHQUFHLENBQUMsMEJBQWUsQ0FBQyxTQUFTLENBQUM7YUFDOUIsSUFBSSxDQUNELDBCQUFlLENBQUMsOEJBQThCLEVBQzlDLDBCQUFlLENBQUMsNEJBQTRCLEVBQzVDLDBCQUFlLENBQUMsVUFBVSxDQUM3QixDQUFBO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLDBCQUFlLENBQUMsYUFBYSxDQUFDLENBQUE7UUFDdkQsSUFBSSxDQUFDLEdBQUc7YUFDSCxLQUFLLENBQUMsZ0JBQWdCLENBQUM7YUFDdkIsR0FBRyxDQUFDLDBCQUFlLENBQUMsa0JBQWtCLENBQUM7YUFDdkMsR0FBRyxDQUFDLDBCQUFlLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDakMsdUNBQXVDO1FBRTNDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFO1lBQzNCLDBCQUFlLENBQUMsOEJBQThCO1lBQzlDLDBCQUFlLENBQUMsaUNBQWlDO1lBQ2pELDBCQUFlLENBQUMsR0FBRztTQUN0QixDQUFDLENBQUE7UUFFRixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRTtZQUM3QiwwQkFBZSxDQUFDLGtCQUFrQjtZQUNsQywwQkFBZSxDQUFDLEtBQUs7U0FDeEIsQ0FBQyxDQUFBO1FBRU4sT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFBO0lBQ25CLENBQUM7Q0FDSjtBQXBDRCxnQ0FvQ0M7QUFHRCxpRkFBaUY7QUFDakYsd0VBQXdFO0FBQ3hFLEtBQUs7QUFHTCxrRkFBa0Y7QUFDbEYsNkVBQTZFO0FBQzdFLEtBQUs7QUFFTCxtQ0FBbUM7QUFDbkMsc0ZBQXNGO0FBQ3RGLDRFQUE0RTtBQUM1RSx3REFBd0Q7QUFDeEQscUZBQXFGO0FBQ3JGLGFBQWE7QUFDYixLQUFLO0FBQ0wsMERBQTBEO0FBQzFELG9HQUFvRztBQUNwRyxLQUFLO0FBQ0wsMERBQTBEO0FBQzFELHdFQUF3RTtBQUN4RSxLQUFLO0FBQ0wsNERBQTREO0FBQzVELDBFQUEwRTtBQUMxRSxLQUFLO0FBQ0wsNkRBQTZEO0FBQzdELDJFQUEyRTtBQUMzRSxLQUFLIn0=