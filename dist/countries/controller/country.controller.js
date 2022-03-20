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
const debug_1 = __importDefault(require("debug"));
const http_status_1 = require("../../common/http.status");
const country_service_1 = __importDefault(require("../services/country.service"));
const log = (0, debug_1.default)('app:country-controller');
class CountryController {
    listCountry(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const country = yield country_service_1.default.listCountry(100, 0);
            res.status(http_status_1.statusCodes.HttpStatus_OK.value).send(country);
        });
    }
    listAllCountriesNames(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const country = yield country_service_1.default.listAllCountryNames();
            res.status(http_status_1.statusCodes.HttpStatus_OK.value).send(country);
        });
    }
    listAllCountries(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const country = yield country_service_1.default.listAllCountry();
            res.status(http_status_1.statusCodes.HttpStatus_OK.value).send(country);
        });
    }
    getCountryByName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const country = yield country_service_1.default.getCountryByName(req.params.countryName);
            res.status(http_status_1.statusCodes.HttpStatus_OK.value).send(country);
        });
    }
    getCountryStateByCountryName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const country = yield country_service_1.default.getCountryStateByCountryName(req.params.countryName);
            res.status(http_status_1.statusCodes.HttpStatus_OK.value).send(country);
        });
    }
    insertAllCountries(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.status(http_status_1.statusCodes.HttpStatus_OK.value).send(yield country_service_1.default.insertAllCountries());
        });
    }
}
exports.default = new CountryController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRyeS5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvdW50cmllcy9jb250cm9sbGVyL2NvdW50cnkuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLGtEQUF5QjtBQUN6QiwwREFBb0Q7QUFDcEQsa0ZBQXdEO0FBQ3hELE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQyx3QkFBd0IsQ0FBQyxDQUFBO0FBRzVELE1BQU0saUJBQWlCO0lBQ2IsV0FBVyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQ3pELE1BQU0sT0FBTyxHQUFHLE1BQU0seUJBQWMsQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ3ZELEdBQUcsQ0FBQyxNQUFNLENBQUMseUJBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQzdELENBQUM7S0FBQTtJQUVLLHFCQUFxQixDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQ25FLE1BQU0sT0FBTyxHQUFHLE1BQU0seUJBQWMsQ0FBQyxtQkFBbUIsRUFBRSxDQUFBO1lBQzFELEdBQUcsQ0FBQyxNQUFNLENBQUMseUJBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBRTdELENBQUM7S0FBQTtJQUVLLGdCQUFnQixDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQzlELE1BQU0sT0FBTyxHQUFHLE1BQU0seUJBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQTtZQUNyRCxHQUFHLENBQUMsTUFBTSxDQUFDLHlCQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUM3RCxDQUFDO0tBQUE7SUFFSyxnQkFBZ0IsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUU5RCxNQUFNLE9BQU8sR0FBRyxNQUFNLHlCQUFjLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQTtZQUM3RSxHQUFHLENBQUMsTUFBTSxDQUFDLHlCQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUM3RCxDQUFDO0tBQUE7SUFFSyw0QkFBNEIsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUMxRSxNQUFNLE9BQU8sR0FBRyxNQUFNLHlCQUFjLENBQUMsNEJBQTRCLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQTtZQUN6RixHQUFHLENBQUMsTUFBTSxDQUFDLHlCQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUM3RCxDQUFDO0tBQUE7SUFFSyxrQkFBa0IsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUNoRSxHQUFHLENBQUMsTUFBTSxDQUFDLHlCQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLHlCQUFjLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFBO1FBQy9GLENBQUM7S0FBQTtDQUNKO0FBRUQsa0JBQWUsSUFBSSxpQkFBaUIsRUFBRSxDQUFBIn0=