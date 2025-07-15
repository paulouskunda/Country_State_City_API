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
const country_dao_1 = __importDefault(require("../daos/country.dao"));
class CountryService {
    listAllCountry() {
        return __awaiter(this, void 0, void 0, function* () {
            return country_dao_1.default.getAllCountriesList();
        });
    }
    getCountryByName(countryName) {
        return __awaiter(this, void 0, void 0, function* () {
            return country_dao_1.default.getCountryByName(countryName);
        });
    }
    getCountryProvinceByCountryName(countryName) {
        return __awaiter(this, void 0, void 0, function* () {
            return country_dao_1.default.getCountryProvinceByCountryName(countryName);
        });
    }
    getCountryCitiesByCountryNameAndProvinceName(countryName, provinceName) {
        return __awaiter(this, void 0, void 0, function* () {
            return country_dao_1.default.getCountryCitiesByCountryNameAndProvinceName(countryName, provinceName);
        });
    }
    getCountryCitiesByCountryIdAndProvinceId(countryId, provinceId) {
        return __awaiter(this, void 0, void 0, function* () {
            return country_dao_1.default.getCountryCitiesByCountryIdAndProvinceId(countryId, provinceId);
        });
    }
    getCountryProvinceByCountryId(countryId) {
        return __awaiter(this, void 0, void 0, function* () {
            return country_dao_1.default.getCountryProvinceByCountryId(countryId);
        });
    }
}
exports.default = new CountryService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRyeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvdW50cmllcy9zZXJ2aWNlcy9jb3VudHJ5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzRUFBNEM7QUFLNUMsTUFBTSxjQUFjO0lBR1YsY0FBYzs7WUFDaEIsT0FBTyxxQkFBVSxDQUFDLG1CQUFtQixFQUFFLENBQUE7UUFDM0MsQ0FBQztLQUFBO0lBR0ssZ0JBQWdCLENBQUMsV0FBbUI7O1lBQ3RDLE9BQU8scUJBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUNuRCxDQUFDO0tBQUE7SUFFSywrQkFBK0IsQ0FBQyxXQUFtQjs7WUFDckQsT0FBTyxxQkFBVSxDQUFDLCtCQUErQixDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQ2xFLENBQUM7S0FBQTtJQUVLLDRDQUE0QyxDQUFDLFdBQW1CLEVBQUUsWUFBb0I7O1lBQ3hGLE9BQU8scUJBQVUsQ0FBQyw0Q0FBNEMsQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDLENBQUE7UUFDN0YsQ0FBQztLQUFBO0lBRUssd0NBQXdDLENBQUMsU0FBaUIsRUFBRSxVQUFrQjs7WUFDaEYsT0FBTyxxQkFBVSxDQUFDLHdDQUF3QyxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQTtRQUNyRixDQUFDO0tBQUE7SUFFSyw2QkFBNkIsQ0FBQyxTQUFpQjs7WUFDakQsT0FBTyxxQkFBVSxDQUFDLDZCQUE2QixDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQzlELENBQUM7S0FBQTtDQUVKO0FBRUQsa0JBQWUsSUFBSSxjQUFjLEVBQUUsQ0FBQSJ9