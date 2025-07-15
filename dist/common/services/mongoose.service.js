"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:mongoose-service');
class MongooseService {
    constructor() {
        this.count = 0;
        this.mongooseOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
        };
        this.connectWithRetry = () => {
            const { MONGO_DATABASE_LINK } = process.env;
            // @ts-expect-error
            const mongoDatabaseLink = MONGO_DATABASE_LINK;
            log('Attempting MongoDB connection (will retry if needed');
            mongoose_1.default
                .connect(mongoDatabaseLink, this.mongooseOptions)
                .then(() => {
                console.log('MongoDB is connected');
            })
                .catch((err) => {
                const retrySeconds = 5;
                console.log(`MongoDB connection unsuccessful (will retry #${++this
                    .count} after ${retrySeconds} seconds):`, err);
                setTimeout(this.connectWithRetry, retrySeconds * 1000);
            });
        };
        this.connectWithRetry();
    }
    getMongoose() {
        console.log('MongooseService: getMongoose called');
        return mongoose_1.default;
    }
}
// mongoose.connection.on('connected', () => {
//     console.log('Mongoose connected to the database');
// });
// mongoose.connection.on('error', (err) => {
//     console.error('Mongoose connection error:', err);
// });
// mongoose.connection.on('disconnected', () => {
//     console.log('Mongoose disconnected from the database');
// });
exports.default = new MongooseService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ29vc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tb24vc2VydmljZXMvbW9uZ29vc2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHdEQUErQjtBQUMvQixrREFBeUI7QUFFekIsTUFBTSxHQUFHLEdBQW9CLElBQUEsZUFBSyxFQUFDLHNCQUFzQixDQUFDLENBQUE7QUFFMUQsTUFBTSxlQUFlO0lBUWpCO1FBUFEsVUFBSyxHQUFHLENBQUMsQ0FBQTtRQUNULG9CQUFlLEdBQUc7WUFDdEIsZUFBZSxFQUFFLElBQUk7WUFDckIsa0JBQWtCLEVBQUUsSUFBSTtZQUN4Qix3QkFBd0IsRUFBRSxJQUFJO1NBQ2pDLENBQUM7UUFXRixxQkFBZ0IsR0FBRyxHQUFHLEVBQUU7WUFDcEIsTUFBTSxFQUFDLG1CQUFtQixFQUFDLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQTtZQUN6QyxtQkFBbUI7WUFDbkIsTUFBTSxpQkFBaUIsR0FBVSxtQkFBbUIsQ0FBQTtZQUVwRCxHQUFHLENBQUMscURBQXFELENBQUMsQ0FBQTtZQUMxRCxrQkFBUTtpQkFDSCxPQUFPLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQztpQkFDaEQsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUE7WUFDdkMsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUNYLE1BQU0sWUFBWSxHQUFHLENBQUMsQ0FBQTtnQkFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FDUCxnREFBZ0QsRUFBRSxJQUFJO3FCQUNqRCxLQUFLLFVBQVUsWUFBWSxZQUFZLEVBQzVDLEdBQUcsQ0FDTixDQUFBO2dCQUNELFVBQVUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsWUFBWSxHQUFHLElBQUksQ0FBQyxDQUFBO1lBQzFELENBQUMsQ0FBQyxDQUFBO1FBQ1YsQ0FBQyxDQUFBO1FBNUJHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO0lBQzNCLENBQUM7SUFFRCxXQUFXO1FBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO1FBQ25ELE9BQU8sa0JBQVEsQ0FBQTtJQUNuQixDQUFDO0NBd0JKO0FBRUQsOENBQThDO0FBQzlDLHlEQUF5RDtBQUN6RCxNQUFNO0FBRU4sNkNBQTZDO0FBQzdDLHdEQUF3RDtBQUN4RCxNQUFNO0FBRU4saURBQWlEO0FBQ2pELDhEQUE4RDtBQUM5RCxNQUFNO0FBRU4sa0JBQWUsSUFBSSxlQUFlLEVBQUUsQ0FBQyJ9