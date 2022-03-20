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
// import { CreateUserDto } from "../../dto/create.user.dto"
// import { PatchUserDto } from "../../dto/patch.user.dto"
// import { PutUserDto } from "../../dto/put.user.dto"
const debug_1 = __importDefault(require("debug"));
const mongoose_service_1 = __importDefault(require("../../common/services/mongoose.service"));
const log = (0, debug_1.default)('app:mongo-database-dao');
class CountryDao {
    constructor() {
        this.Schema = mongoose_service_1.default.getMongoose().Schema;
        this.countryShema = new this.Schema({
            _id: Object,
            id: Number,
            name: String,
            iso3: String,
            iso2: String,
            numeric_code: String,
            phone_code: String,
            capital: String,
            currency: String,
            currency_name: String,
            currency_symbol: String,
            tld: String,
            native: String,
            region: String,
            subregion: String,
            timezones: Array,
            translations: Object,
            latitude: String,
            longitude: String,
            emoji: String,
            emojiU: String,
            states: Array
        });
        this.Country = mongoose_service_1.default.getMongoose().model('country_state_city', this.countryShema);
        log('Create new instanse of Country');
    }
    getCountryByName(countryName) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.Country.findOne({ name: countryName }).exec();
        });
    }
    getCountriesList(limit = 25, page = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.Country.find()
                .limit(limit)
                .skip(limit * page)
                .exec();
        });
    }
    getAllCountriesList() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.Country.find().exec();
        });
    }
    getAllCountriesNamesList() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.Country.find({}, { name: 1, _id: 0 }).exec();
        });
    }
    getCountryStateByCountryName(countryName) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.Country.find({ name: countryName }, { states: 1, _id: 0 }).exec();
        });
    }
    insertAllCountries(country) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.Country.insertMany(country);
        });
    }
}
exports.default = new CountryDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRyeS5kYW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY291bnRyaWVzL2Rhb3MvY291bnRyeS5kYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0REFBNEQ7QUFDNUQsMERBQTBEO0FBQzFELHNEQUFzRDtBQUN0RCxrREFBeUI7QUFDekIsOEZBQW9FO0FBRXBFLE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQyx3QkFBd0IsQ0FBQyxDQUFBO0FBRTVELE1BQU0sVUFBVTtJQTZCWjtRQTVCQSxXQUFNLEdBQUcsMEJBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUE7UUFFN0MsaUJBQVksR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDM0IsR0FBRyxFQUFDLE1BQU07WUFDVixFQUFFLEVBQUMsTUFBTTtZQUNULElBQUksRUFBRSxNQUFNO1lBQ1osSUFBSSxFQUFFLE1BQU07WUFDWixJQUFJLEVBQUUsTUFBTTtZQUNaLFlBQVksRUFBRSxNQUFNO1lBQ3BCLFVBQVUsRUFBRSxNQUFNO1lBQ2xCLE9BQU8sRUFBRSxNQUFNO1lBQ2YsUUFBUSxFQUFFLE1BQU07WUFDaEIsYUFBYSxFQUFFLE1BQU07WUFDckIsZUFBZSxFQUFFLE1BQU07WUFDdkIsR0FBRyxFQUFFLE1BQU07WUFDWCxNQUFNLEVBQUUsTUFBTTtZQUNkLE1BQU0sRUFBRSxNQUFNO1lBQ2QsU0FBUyxFQUFFLE1BQU07WUFDakIsU0FBUyxFQUFDLEtBQUs7WUFDZixZQUFZLEVBQUMsTUFBTTtZQUNuQixRQUFRLEVBQUUsTUFBTTtZQUNoQixTQUFTLEVBQUUsTUFBTTtZQUNqQixLQUFLLEVBQUUsTUFBTTtZQUNiLE1BQU0sRUFBRSxNQUFNO1lBQ2QsTUFBTSxFQUFFLEtBQUs7U0FDaEIsQ0FBQyxDQUFBO1FBRUYsWUFBTyxHQUFJLDBCQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUVuRixHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQTtJQUN6QyxDQUFDO0lBRUssZ0JBQWdCLENBQUMsV0FBbUI7O1lBQ3RDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUMzRCxDQUFDO0tBQUE7SUFFSyxnQkFBZ0IsQ0FBQyxLQUFLLEdBQUUsRUFBRSxFQUFFLElBQUksR0FBRSxDQUFDOztZQUNyQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO2lCQUNwQixLQUFLLENBQUMsS0FBSyxDQUFDO2lCQUNaLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2lCQUNsQixJQUFJLEVBQUUsQ0FBQTtRQUNoQixDQUFDO0tBQUE7SUFFSyxtQkFBbUI7O1lBQ3JCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUNyQyxDQUFDO0tBQUE7SUFFSyx3QkFBd0I7O1lBRTFCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBRSxHQUFHLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUN4RCxDQUFDO0tBQUE7SUFFSyw0QkFBNEIsQ0FBQyxXQUFtQjs7WUFDbEQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUMsRUFBRSxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsR0FBRyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDM0UsQ0FBQztLQUFBO0lBRUssa0JBQWtCLENBQUMsT0FBWTs7WUFDakMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUMzQyxDQUFDO0tBQUE7Q0FHSjtBQUVELGtCQUFlLElBQUksVUFBVSxFQUFFLENBQUEifQ==