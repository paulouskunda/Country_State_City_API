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
                log('MongoDB is connected');
            })
                .catch((err) => {
                const retrySeconds = 5;
                log(`MongoDB connection unsuccessful (will retry #${++this
                    .count} after ${retrySeconds} seconds):`, err);
                setTimeout(this.connectWithRetry, retrySeconds * 1000);
            });
        };
        this.connectWithRetry();
    }
    getMongoose() {
        return mongoose_1.default;
    }
}
exports.default = new MongooseService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ29vc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tb24vc2VydmljZXMvbW9uZ29vc2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHdEQUErQjtBQUMvQixrREFBeUI7QUFFekIsTUFBTSxHQUFHLEdBQW9CLElBQUEsZUFBSyxFQUFDLHNCQUFzQixDQUFDLENBQUE7QUFFMUQsTUFBTSxlQUFlO0lBUWpCO1FBUFEsVUFBSyxHQUFHLENBQUMsQ0FBQTtRQUNULG9CQUFlLEdBQUc7WUFDdEIsZUFBZSxFQUFFLElBQUk7WUFDckIsa0JBQWtCLEVBQUUsSUFBSTtZQUN4Qix3QkFBd0IsRUFBRSxJQUFJO1NBQ2pDLENBQUM7UUFVRixxQkFBZ0IsR0FBRyxHQUFHLEVBQUU7WUFDcEIsTUFBTSxFQUFDLG1CQUFtQixFQUFDLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQTtZQUN6QyxtQkFBbUI7WUFDbkIsTUFBTSxpQkFBaUIsR0FBVSxtQkFBbUIsQ0FBQTtZQUVwRCxHQUFHLENBQUMscURBQXFELENBQUMsQ0FBQTtZQUMxRCxrQkFBUTtpQkFDSCxPQUFPLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQztpQkFDaEQsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDUCxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQTtZQUMvQixDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7Z0JBQ1gsTUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFBO2dCQUN0QixHQUFHLENBQ0MsZ0RBQWdELEVBQUUsSUFBSTtxQkFDakQsS0FBSyxVQUFVLFlBQVksWUFBWSxFQUM1QyxHQUFHLENBQ04sQ0FBQTtnQkFDRCxVQUFVLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBQTtZQUMxRCxDQUFDLENBQUMsQ0FBQTtRQUNWLENBQUMsQ0FBQTtRQTNCRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQTtJQUMzQixDQUFDO0lBRUQsV0FBVztRQUNQLE9BQU8sa0JBQVEsQ0FBQTtJQUNuQixDQUFDO0NBd0JKO0FBRUQsa0JBQWUsSUFBSSxlQUFlLEVBQUUsQ0FBQyJ9