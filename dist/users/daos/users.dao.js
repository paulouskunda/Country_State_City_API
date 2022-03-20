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
const shortid_1 = __importDefault(require("shortid"));
const debug_1 = __importDefault(require("debug"));
const mongoose_service_1 = __importDefault(require("../../common/services/mongoose.service"));
const log = (0, debug_1.default)('app:in-memory-dao');
class UsersDao {
    constructor() {
        this.Schema = mongoose_service_1.default.getMongoose().Schema;
        this.userShema = new this.Schema({
            _id: String,
            email: String,
            password: { type: String, select: false },
            firstName: String,
            lastName: String,
            permissionFlags: Number,
        }, { id: false });
        this.User = mongoose_service_1.default.getMongoose().model('Users', this.userShema);
        log('Create new instanse of UserDao');
    }
    addUser(userFields) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = shortid_1.default.generate();
            const user = new this.User(Object.assign(Object.assign({ _id: userId }, userFields), { permissionFlags: 1 }));
            yield user.save();
            return userId;
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.User.findOne({ email: email }).exec();
        });
    }
    getUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.User.findOne({ _id: userId }).populate('User').exec();
        });
    }
    getUsers(limit = 25, page = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.User.find()
                .limit(limit)
                .skip(limit * page)
                .exec();
        });
    }
    updateUserById(userId, userFields) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingUser = yield this.User.findOneAndUpdate({ _id: userId }, { $set: userFields }, { new: true }).exec();
            return existingUser;
        });
    }
    removeUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.User.deleteOne({ _id: userId }).exec();
        });
    }
}
exports.default = new UsersDao();
// async addUser(user: CreateUserDto){
//     user.id = shortid.generate()
//     this.users.push(user)
//     return user.id
// }
// async getUsers() {
//    return this.users
// }
// async getUserById(userId: string){
//    return this.users.find((user: { id: string }) => user.id === user.id)
// }
// async putUserById(userId: string, user: PutUserDto){
//    const objIndex = this.users.findIndex(
//        (obj: { id: string }) => obj.id === userId)
//     this.users.splice(objIndex, 1, user)
//     return `${user.id} updated via input`
// }
// async patchUserById(userId: string, user: PatchUserDto) {
// const objIndex = this.users.findIndex(
//     (obj: { id: string }) => obj.id === userId
// );
// let currentUser = this.users[objIndex];
// const allowedPatchFields = [
//     'password',
//     'firstName',
//     'lastName',
//     'permissionLevel',
// ];
// for (let field of allowedPatchFields) {
//     if (field in user) {
//         // @ts-ignore
//         currentUser[field] = user[field];
//     }
// }
// this.users.splice(objIndex, 1, currentUser);
// return `${user.id} patched`;
// }
// async removeUserById(userId: string) {
// const objIndex = this.users.findIndex(
//     (obj: { id: string }) => obj.id === userId
// );
// this.users.splice(objIndex, 1);
// return `${userId} removed`;
// }
// async getUserByEmail(email: string) {
// const objIndex = this.users.findIndex(
//     (obj: { email: string }) => obj.email === email
// );
// let currentUser = this.users[objIndex];
// if (currentUser) {
//     return currentUser;
// } else {
//     return null;
// }
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuZGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3VzZXJzL2Rhb3MvdXNlcnMuZGFvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBR0Esc0RBQTZCO0FBQzdCLGtEQUF5QjtBQUN6Qiw4RkFBb0U7QUFFcEUsTUFBTSxHQUFHLEdBQW9CLElBQUEsZUFBSyxFQUFDLG1CQUFtQixDQUFDLENBQUE7QUFFdkQsTUFBTSxRQUFRO0lBYVY7UUFaQSxXQUFNLEdBQUcsMEJBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUE7UUFFN0MsY0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUN4QixHQUFHLEVBQUUsTUFBTTtZQUNYLEtBQUssRUFBRSxNQUFNO1lBQ2IsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO1lBQ3pDLFNBQVMsRUFBRSxNQUFNO1lBQ2pCLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLGVBQWUsRUFBRSxNQUFNO1NBQzFCLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQTtRQUVoQixTQUFJLEdBQUksMEJBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUVoRSxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQTtJQUN6QyxDQUFDO0lBR0ksT0FBTyxDQUFDLFVBQXlCOztZQUNuQyxNQUFNLE1BQU0sR0FBRyxpQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFBO1lBQ2pDLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksK0JBQ3RCLEdBQUcsRUFBRSxNQUFNLElBQ1IsVUFBVSxLQUNiLGVBQWUsRUFBRSxDQUFDLElBQ3BCLENBQUE7WUFFRixNQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQTtZQUVqQixP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