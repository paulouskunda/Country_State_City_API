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
const dotenv_1 = __importDefault(require("dotenv"));
const { MongoClient, ServerApiVersion } = require('mongodb');
dotenv_1.default.config();
const uri = process.env.MONGO_DATABASE_LINK;
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
let isConnected = false;
let collection;
function connectDB() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (isConnected && collection) {
                console.log("Reusing existing MongoDB connection.");
                return collection;
            }
            console.log("Establishing new MongoDB connection...");
            yield client.connect();
            console.log("Successfully connected to MongoDB!");
            const dbName = "country_state_city";
            const collectionName = "country_province_cities";
            const database = client.db(dbName);
            collection = database.collection(collectionName);
            isConnected = true;
            return collection;
        }
        catch (error) {
            console.error("Error connecting to MongoDB or accessing the collection:", error);
            isConnected = false;
            throw error;
        }
    });
}
exports.default = connectDB;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWJhc2UuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1vbi9jb25maWcvZGF0YWJhc2UuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQTRCO0FBQzVCLE1BQU0sRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFN0QsZ0JBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVoQixNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDO0FBQzVDLE1BQU0sTUFBTSxHQUFHLElBQUksV0FBVyxDQUFDLEdBQUcsRUFBRTtJQUNoQyxTQUFTLEVBQUU7UUFDUCxPQUFPLEVBQUUsZ0JBQWdCLENBQUMsRUFBRTtRQUM1QixNQUFNLEVBQUUsSUFBSTtRQUNaLGlCQUFpQixFQUFFLElBQUk7S0FDMUI7Q0FDSixDQUFDLENBQUM7QUFFSCxJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUM7QUFDeEIsSUFBSSxVQUFlLENBQUM7QUFFcEIsU0FBZSxTQUFTOztRQUNwQixJQUFJO1lBQ0EsSUFBSSxXQUFXLElBQUksVUFBVSxFQUFFO2dCQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7Z0JBQ3BELE9BQU8sVUFBVSxDQUFDO2FBQ3JCO1lBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO1lBQ3RELE1BQU0sTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0NBQW9DLENBQUMsQ0FBQztZQUVsRCxNQUFNLE1BQU0sR0FBRyxvQkFBb0IsQ0FBQztZQUNwQyxNQUFNLGNBQWMsR0FBRyx5QkFBeUIsQ0FBQztZQUVqRCxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25DLFVBQVUsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ2pELFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDbkIsT0FBTyxVQUFVLENBQUM7U0FDckI7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsMERBQTBELEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDakYsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUNwQixNQUFNLEtBQUssQ0FBQztTQUNmO0lBQ0wsQ0FBQztDQUFBO0FBRUQsa0JBQWUsU0FBUyxDQUFDIn0=