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
const database_config_1 = __importDefault(require("../../common/config/database.config")); // Import connectDB
class CountryDao {
    constructor() {
        this.initializeCollection();
    }
    initializeCollection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.collection = yield (0, database_config_1.default)();
                console.log('CountryDao: MongoDB collection initialized');
            }
            catch (error) {
                console.error('CountryDao: Failed to initialize MongoDB collection', error);
            }
        });
    }
    getCountryByName(countryName) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = { name: countryName };
            return yield this.collection.find(query).toArray();
        });
    }
    getAllCountriesList() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.collection
                .find({}, {
                projection: {
                    _id: 0,
                    id: 1,
                    name: 1,
                    currency: 1,
                    phone_code: 1,
                    iso3: 1,
                    iso2: 1,
                    capital: 1,
                },
            })
                .sort({ name: 1 })
                .toArray();
        });
    }
    getCountryProvinceByCountryName(countryName) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.collection.findOne({ name: countryName }, { projection: { provinces: 1, _id: 0 } });
        });
    }
    getCountryProvinceByCountryId(countryId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.collection.findOne({ id: parseInt(countryId) }, { projection: { provinces: 1, _id: 0 } });
        });
    }
    getCountryCitiesByCountryNameAndProvinceName(countryName, provinceName) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.collection.findOne({ name: countryName, 'provinces.name': provinceName }, { projection: { 'provinces.$': 1, _id: 0 } });
        });
    }
    getCountryCitiesByCountryIdAndProvinceId(countryId, provinceId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.collection
                .findOne({ id: parseInt(countryId), 'provinces.id': parseInt(provinceId) }, { projection: { 'provinces.$': 1, _id: 0 } });
        });
    }
}
exports.default = new CountryDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRyeS5kYW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY291bnRyaWVzL2Rhb3MvY291bnRyeS5kYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwRkFBNEQsQ0FBQyxtQkFBbUI7QUFFaEYsTUFBTSxVQUFVO0lBR1o7UUFDSSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRWEsb0JBQW9COztZQUM5QixJQUFJO2dCQUNBLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxJQUFBLHlCQUFTLEdBQUUsQ0FBQztnQkFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO2FBQzdEO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxxREFBcUQsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUMvRTtRQUNMLENBQUM7S0FBQTtJQUVLLGdCQUFnQixDQUFDLFdBQW1COztZQUN0QyxNQUFNLEtBQUssR0FBRyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsQ0FBQztZQUNwQyxPQUFPLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdkQsQ0FBQztLQUFBO0lBRUssbUJBQW1COztZQUNyQixPQUFPLE1BQU0sSUFBSSxDQUFDLFVBQVU7aUJBQ3ZCLElBQUksQ0FDRCxFQUFFLEVBQ0Y7Z0JBQ0ksVUFBVSxFQUFFO29CQUNSLEdBQUcsRUFBRSxDQUFDO29CQUNOLEVBQUUsRUFBRSxDQUFDO29CQUNMLElBQUksRUFBRSxDQUFDO29CQUNQLFFBQVEsRUFBRSxDQUFDO29CQUNYLFVBQVUsRUFBRSxDQUFDO29CQUNiLElBQUksRUFBRSxDQUFDO29CQUNQLElBQUksRUFBRSxDQUFDO29CQUNQLE9BQU8sRUFBRSxDQUFDO2lCQUNiO2FBQ0osQ0FDSjtpQkFDQSxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUM7aUJBQ2pCLE9BQU8sRUFBRSxDQUFDO1FBQ25CLENBQUM7S0FBQTtJQUVLLCtCQUErQixDQUFDLFdBQW1COztZQUNyRCxPQUFPLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQ2hDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxFQUNyQixFQUFFLFVBQVUsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQzNDLENBQUM7UUFDTixDQUFDO0tBQUE7SUFFSyw2QkFBNkIsQ0FBQyxTQUFpQjs7WUFDakQsT0FBTyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUNoQyxFQUFFLEVBQUUsRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFDM0IsRUFBRSxVQUFVLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUMzQyxDQUFDO1FBQ04sQ0FBQztLQUFBO0lBRUssNENBQTRDLENBQUMsV0FBbUIsRUFBRSxZQUFvQjs7WUFDeEYsT0FBTyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUNoQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLEVBQ3JELEVBQUUsVUFBVSxFQUFFLEVBQUUsYUFBYSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FDL0MsQ0FBQztRQUNOLENBQUM7S0FBQTtJQUVLLHdDQUF3QyxDQUFDLFNBQWlCLEVBQUUsVUFBa0I7O1lBQ2hGLE9BQU8sTUFBTSxJQUFJLENBQUMsVUFBVTtpQkFDdkIsT0FBTyxDQUNKLEVBQUUsRUFBRSxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRSxjQUFjLEVBQUUsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQ2pFLEVBQUUsVUFBVSxFQUFFLEVBQUUsYUFBYSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FDL0MsQ0FBQztRQUNWLENBQUM7S0FBQTtDQUNKO0FBRUQsa0JBQWUsSUFBSSxVQUFVLEVBQUUsQ0FBQyJ9