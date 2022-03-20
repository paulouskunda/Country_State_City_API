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
const fs_1 = __importDefault(require("fs"));
class CountryService {
    listCountry(limit, page) {
        return __awaiter(this, void 0, void 0, function* () {
            return country_dao_1.default.getCountriesList(limit, page);
        });
    }
    listAllCountry() {
        return __awaiter(this, void 0, void 0, function* () {
            return country_dao_1.default.getAllCountriesList();
        });
    }
    listAllCountryNames() {
        return __awaiter(this, void 0, void 0, function* () {
            return country_dao_1.default.getAllCountriesNamesList();
        });
    }
    getCountryByName(countryName) {
        return __awaiter(this, void 0, void 0, function* () {
            return country_dao_1.default.getCountryByName(countryName);
        });
    }
    getCountryStateByCountryName(countryName) {
        return __awaiter(this, void 0, void 0, function* () {
            return country_dao_1.default.getCountryStateByCountryName(countryName);
        });
    }
    insertAllCountries() {
        return __awaiter(this, void 0, void 0, function* () {
            var countries = fs_1.default.readFileSync('country_state_city.json');
            var country = JSON.parse(countries);
            return country_dao_1.default.insertAllCountries(country);
        });
    }
}
exports.default = new CountryService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRyeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvdW50cmllcy9zZXJ2aWNlcy9jb3VudHJ5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzRUFBNEM7QUFFNUMsNENBQW1CO0FBR25CLE1BQU0sY0FBYztJQUVWLFdBQVcsQ0FBQyxLQUFhLEVBQUUsSUFBWTs7WUFDekMsT0FBTyxxQkFBVSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUNuRCxDQUFDO0tBQUE7SUFDSyxjQUFjOztZQUNoQixPQUFPLHFCQUFVLENBQUMsbUJBQW1CLEVBQUUsQ0FBQTtRQUMzQyxDQUFDO0tBQUE7SUFFSyxtQkFBbUI7O1lBQ3JCLE9BQU8scUJBQVUsQ0FBQyx3QkFBd0IsRUFBRSxDQUFBO1FBQ2hELENBQUM7S0FBQTtJQUVLLGdCQUFnQixDQUFDLFdBQW1COztZQUN0QyxPQUFPLHFCQUFVLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDbkQsQ0FBQztLQUFBO0lBRUssNEJBQTRCLENBQUMsV0FBbUI7O1lBQ2xELE9BQU8scUJBQVUsQ0FBQyw0QkFBNEIsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUMvRCxDQUFDO0tBQUE7SUFFSyxrQkFBa0I7O1lBQ3BCLElBQUksU0FBUyxHQUFPLFlBQUUsQ0FBQyxZQUFZLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUMvRCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3BDLE9BQU8scUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNqRCxDQUFDO0tBQUE7Q0FHSjtBQUVELGtCQUFlLElBQUksY0FBYyxFQUFFLENBQUEifQ==