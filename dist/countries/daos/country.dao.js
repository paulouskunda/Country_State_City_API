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
    getCountryByName(countryName) {
        return __awaiter(this, void 0, void 0, function* () {
            const collection = yield (0, database_config_1.default)();
            const query = { name: countryName };
            //const countryfound 
            return yield collection.find(query).toArray();
        });
    }
    getAllCountriesList() {
        return __awaiter(this, void 0, void 0, function* () {
            const collection = yield (0, database_config_1.default)();
            //const countryfound 
            var country = yield collection.find({}, {
                projection: {
                    _id: 0,
                    id: 1,
                    name: 1,
                    currency: 1,
                    phone_code: 1,
                    iso3: 1,
                    capital: 1
                }
            }).sort({ name: 1 }).toArray();
            return country;
        });
    }
    getCountryProvinceByCountryName(countryName) {
        return __awaiter(this, void 0, void 0, function* () {
            const collection = yield (0, database_config_1.default)();
            return yield collection.findOne({ name: countryName }, { projection: { provinces: 1, _id: 0 } });
        });
    }
    getCountryProvinceByCountryId(countryId) {
        return __awaiter(this, void 0, void 0, function* () {
            const collection = yield (0, database_config_1.default)();
            return yield collection.findOne({ id: countryId }, { projection: { provinces: 1, _id: 0 } });
        });
    }
    getCountryCitiesByCountryNameAndProvinceName(countryName, provinceName) {
        return __awaiter(this, void 0, void 0, function* () {
            const collection = yield (0, database_config_1.default)();
            return yield collection.findOne({ name: countryName, 'provinces.name': provinceName }, { projection: { 'provinces.$': 1, _id: 0 } });
        });
    }
    getCountryCitiesByCountryIdAndProvinceId(countryId, provinceId) {
        return __awaiter(this, void 0, void 0, function* () {
            const collection = yield (0, database_config_1.default)();
            return yield collection.findOne({ 'id': countryId, 'provinces.id': provinceId }, { projection: { 'provinces.$': 1, _id: 0 } })
                .toArray();
        });
    }
}
exports.default = new CountryDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRyeS5kYW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY291bnRyaWVzL2Rhb3MvY291bnRyeS5kYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSwwRkFBNEQsQ0FBQyxtQkFBbUI7QUFFaEYsTUFBTSxVQUFVO0lBR04sZ0JBQWdCLENBQUMsV0FBbUI7O1lBQ3RDLE1BQU0sVUFBVSxHQUFHLE1BQU0sSUFBQSx5QkFBUyxHQUFFLENBQUM7WUFDckMsTUFBTSxLQUFLLEdBQUcsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLENBQUM7WUFDcEMscUJBQXFCO1lBQ3JCLE9BQU8sTUFBTSxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2xELENBQUM7S0FBQTtJQUdLLG1CQUFtQjs7WUFDckIsTUFBTSxVQUFVLEdBQUcsTUFBTSxJQUFBLHlCQUFTLEdBQUUsQ0FBQztZQUdyQyxxQkFBcUI7WUFDckIsSUFBSSxPQUFPLEdBQUcsTUFBTSxVQUFVLENBQUMsSUFBSSxDQUMvQixFQUFFLEVBQ0Y7Z0JBQ0ksVUFBVSxFQUFFO29CQUNSLEdBQUcsRUFBRSxDQUFDO29CQUNOLEVBQUUsRUFBRSxDQUFDO29CQUNMLElBQUksRUFBRSxDQUFDO29CQUNQLFFBQVEsRUFBRSxDQUFDO29CQUNYLFVBQVUsRUFBRSxDQUFDO29CQUNiLElBQUksRUFBRSxDQUFDO29CQUNQLE9BQU8sRUFBRSxDQUFDO2lCQUNiO2FBQ0osQ0FDSixDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzlCLE9BQU8sT0FBTyxDQUFDO1FBQ25CLENBQUM7S0FBQTtJQUVLLCtCQUErQixDQUFDLFdBQW1COztZQUNyRCxNQUFNLFVBQVUsR0FBRyxNQUFNLElBQUEseUJBQVMsR0FBRSxDQUFDO1lBQ3JDLE9BQU8sTUFBTSxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3JHLENBQUM7S0FBQTtJQUVLLDZCQUE2QixDQUFDLFNBQWlCOztZQUNqRCxNQUFNLFVBQVUsR0FBRyxNQUFNLElBQUEseUJBQVMsR0FBRSxDQUFDO1lBQ3JDLE9BQU8sTUFBTSxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pHLENBQUM7S0FBQTtJQUVLLDRDQUE0QyxDQUFDLFdBQW1CLEVBQUUsWUFBb0I7O1lBQ3hGLE1BQU0sVUFBVSxHQUFHLE1BQU0sSUFBQSx5QkFBUyxHQUFFLENBQUM7WUFDckMsT0FBTyxNQUFNLFVBQVUsQ0FBQyxPQUFPLENBQzNCLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsRUFDckQsRUFBRSxVQUFVLEVBQUUsRUFBRSxhQUFhLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFDakQsQ0FBQztLQUFBO0lBRUMsd0NBQXdDLENBQUMsU0FBaUIsRUFBRSxVQUFrQjs7WUFDaEYsTUFBTSxVQUFVLEdBQUcsTUFBTSxJQUFBLHlCQUFTLEdBQUUsQ0FBQztZQUNyQyxPQUFPLE1BQU0sVUFBVSxDQUFDLE9BQU8sQ0FDM0IsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxVQUFVLEVBQUUsRUFDL0MsRUFBRSxVQUFVLEVBQUUsRUFBRSxhQUFhLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2lCQUNoRCxPQUFPLEVBQUUsQ0FBQztRQUNmLENBQUM7S0FBQTtDQUlKO0FBRUQsa0JBQWUsSUFBSSxVQUFVLEVBQUUsQ0FBQSJ9