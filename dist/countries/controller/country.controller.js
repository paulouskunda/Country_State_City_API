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
const country_service_1 = __importDefault(require("../services/country.service"));
const response_util_1 = require("../../common/utils/response.util");
const log = (0, debug_1.default)('app:country-controller');
class CountryController {
    listAllCountries(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const country = yield country_service_1.default.listAllCountry();
            res.status(200).send((0, response_util_1.createResponse)(200, country));
        });
    }
    getCountryByName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const country = yield country_service_1.default.getCountryByName(req.params.countryName);
            res.status(200).send((0, response_util_1.createResponse)(200, country));
        });
    }
    getCountryProvinceByCountryName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const country = yield country_service_1.default.getCountryProvinceByCountryName(req.params.countryName);
            res.status(200).send((0, response_util_1.createResponse)(200, country));
        });
    }
    getCountryCitiesByCountryNameAndProvinceName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const country = yield country_service_1.default.getCountryCitiesByCountryNameAndProvinceName(req.params.countryName, req.params.provinceName);
            res.status(200).send((0, response_util_1.createResponse)(200, country));
        });
    }
    getCountryCitiesByCountryIdAndProvinceId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const country = yield country_service_1.default.getCountryCitiesByCountryIdAndProvinceId(req.params.countryId, req.params.provinceId);
            res.status(200).send((0, response_util_1.createResponse)(200, country));
        });
    }
    getCountryProvinceByCountryId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const country = yield country_service_1.default.getCountryProvinceByCountryId(req.params.countryId);
            res.status(200).send((0, response_util_1.createResponse)(200, country));
        });
    }
}
exports.default = new CountryController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRyeS5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvdW50cmllcy9jb250cm9sbGVyL2NvdW50cnkuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLGtEQUF5QjtBQUV6QixrRkFBd0Q7QUFDeEQsb0VBQWtFO0FBQ2xFLE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQyx3QkFBd0IsQ0FBQyxDQUFBO0FBRzVELE1BQU0saUJBQWlCO0lBS2IsZ0JBQWdCLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDOUQsTUFBTSxPQUFPLEdBQUcsTUFBTSx5QkFBYyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3RELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUEsOEJBQWMsRUFBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUN2RCxDQUFDO0tBQUE7SUFFSyxnQkFBZ0IsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUM5RCxNQUFNLE9BQU8sR0FBRyxNQUFNLHlCQUFjLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUM5RSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFBLDhCQUFjLEVBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDdkQsQ0FBQztLQUFBO0lBRUssK0JBQStCLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDN0UsTUFBTSxPQUFPLEdBQUcsTUFBTSx5QkFBYyxDQUFDLCtCQUErQixDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDN0YsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBQSw4QkFBYyxFQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELENBQUM7S0FBQTtJQUVLLDRDQUE0QyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQzFGLE1BQU0sT0FBTyxHQUFHLE1BQU0seUJBQWMsQ0FBQyw0Q0FBNEMsQ0FDN0UsR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQ3RCLEdBQUcsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUMxQixDQUFDO1lBQ0YsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBQSw4QkFBYyxFQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELENBQUM7S0FBQTtJQUVLLHdDQUF3QyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQ3RGLE1BQU0sT0FBTyxHQUFHLE1BQU0seUJBQWMsQ0FBQyx3Q0FBd0MsQ0FDekUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQ3BCLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUN4QixDQUFDO1lBQ0YsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBQSw4QkFBYyxFQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELENBQUM7S0FBQTtJQUVLLDZCQUE2QixDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQzNFLE1BQU0sT0FBTyxHQUFHLE1BQU0seUJBQWMsQ0FBQyw2QkFBNkIsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3pGLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUEsOEJBQWMsRUFBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUN2RCxDQUFDO0tBQUE7Q0FFSjtBQUVELGtCQUFlLElBQUksaUJBQWlCLEVBQUUsQ0FBQSJ9