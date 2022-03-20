"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_service_1 = __importDefault(require("../services/users.service"));
const debug_1 = __importDefault(require("debug"));
const http_status_1 = require("../../common/http.status");
const log = (0, debug_1.default)('app:users-controller');
class UsersMiddleware {
    constructor() {
        this.validatePatchEmail = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            if (req.body.email) {
                log('Validate email', req.body.email);
                this.validateSameEmailBelongToSameUser(req, res, next);
            }
            else {
                next();
            }
        });
    }
    validateRequiredUserBodyFields(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.body && req.body.email && req.body.password) {
                next();
            }
            else {
                res.status(http_status_1.statusCodes.HttpStatus_BAD_REQUEST.value).send({ errror: "Missing required fields email and password" });
            }
        });
    }
    validateSameEmailDoesntExist(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield users_service_1.default.getUserByEmail(req.body.email);
            if (user) {
                res.status(http_status_1.statusCodes.HttpStatus_BAD_REQUEST.value).send({ error: "User email already exists" });
            }
            else {
                next();
            }
        });
    }
    validateSameEmailBelongToSameUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield users_service_1.default.getUserByEmail(req.body.email);
            if (user && user.id === req.params.userId) {
                next();
            }
            else {
                res.status(http_status_1.statusCodes.HttpStatus_BAD_REQUEST.value).send({ error: "Invalid Email" });
            }
        });
    }
    validateUserExists(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield users_service_1.default.readById(req.params.userId);
            if (user) {
                next();
            }
            else {
                res.status(http_status_1.statusCodes.HttpStatus_NOT_FOUND.value).send({ error: `User ${req.params.userId} not found` });
            }
        });
    }
    extractUserId(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            req.body.id = req.params.userId;
            next();
        });
    }
}
exports.default = new UsersMiddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMubWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91c2Vycy9taWRkbGV3YXJlL3VzZXJzLm1pZGRsZXdhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSw4RUFBbUQ7QUFDbkQsa0RBQXlCO0FBQ3pCLDBEQUFzRDtBQUV0RCxNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsc0JBQXNCLENBQUMsQ0FBQTtBQUMxRCxNQUFNLGVBQWU7SUFBckI7UUF3Q0ksdUJBQWtCLEdBQUcsQ0FDakIsR0FBb0IsRUFDcEIsR0FBcUIsRUFDckIsSUFBeUIsRUFBRSxFQUFFO1lBQ3pCLElBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUM7Z0JBQ2QsR0FBRyxDQUFDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7Z0JBRXJDLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFBO2FBQ3pEO2lCQUFJO2dCQUNELElBQUksRUFBRSxDQUFBO2FBQ1Q7UUFDVCxDQUFDLENBQUEsQ0FBQTtJQXVCTCxDQUFDO0lBeEVTLDhCQUE4QixDQUNoQyxHQUFvQixFQUNwQixHQUFxQixFQUNyQixJQUF5Qjs7WUFDekIsSUFBRyxHQUFHLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDO2dCQUMvQyxJQUFJLEVBQUUsQ0FBQTthQUNUO2lCQUFJO2dCQUNELEdBQUcsQ0FBQyxNQUFNLENBQUMseUJBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxNQUFNLEVBQUUsNENBQTRDLEVBQUMsQ0FBQyxDQUFBO2FBQ3BIO1FBQ0wsQ0FBQztLQUFBO0lBRUssNEJBQTRCLENBQzlCLEdBQW9CLEVBQ3BCLEdBQXFCLEVBQ3JCLElBQXlCOztZQUVyQixNQUFNLElBQUksR0FBRyxNQUFNLHVCQUFXLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDN0QsSUFBRyxJQUFJLEVBQUM7Z0JBQ0osR0FBRyxDQUFDLE1BQU0sQ0FBQyx5QkFBVyxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSwyQkFBMkIsRUFBQyxDQUFDLENBQUE7YUFDbkc7aUJBQUk7Z0JBQ0QsSUFBSSxFQUFFLENBQUE7YUFDVDtRQUNULENBQUM7S0FBQTtJQUVLLGlDQUFpQyxDQUNuQyxHQUFvQixFQUNwQixHQUFxQixFQUNyQixJQUF5Qjs7WUFFekIsTUFBTSxJQUFJLEdBQUcsTUFBTSx1QkFBVyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQzdELElBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUM7Z0JBQ3JDLElBQUksRUFBRSxDQUFBO2FBQ1Q7aUJBQUk7Z0JBQ0QsR0FBRyxDQUFDLE1BQU0sQ0FBQyx5QkFBVyxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsQ0FBQyxDQUFBO2FBQ3hGO1FBQ0wsQ0FBQztLQUFBO0lBZ0JLLGtCQUFrQixDQUNwQixHQUFvQixFQUNwQixHQUFxQixFQUNyQixJQUF5Qjs7WUFFekIsTUFBTSxJQUFJLEdBQUcsTUFBTSx1QkFBVyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQzFELElBQUcsSUFBSSxFQUFDO2dCQUNKLElBQUksRUFBRSxDQUFBO2FBQ1Q7aUJBQUk7Z0JBQ0QsR0FBRyxDQUFDLE1BQU0sQ0FBQyx5QkFBVyxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxRQUFRLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxZQUFZLEVBQUUsQ0FBQyxDQUFBO2FBQzNHO1FBQ0wsQ0FBQztLQUFBO0lBRUssYUFBYSxDQUNmLEdBQW9CLEVBQ3BCLEdBQXFCLEVBQ3JCLElBQTBCOztZQUUxQixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQTtZQUMvQixJQUFJLEVBQUUsQ0FBQTtRQUNWLENBQUM7S0FBQTtDQUNKO0FBRUQsa0JBQWUsSUFBSSxlQUFlLEVBQUUsQ0FBQSJ9