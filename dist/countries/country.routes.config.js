"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const country_controller_1 = __importDefault(require("./controller/country.controller"));
class CountryRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'CountryRoutes');
    }
    configureRoutes() {
        this.app.route('/country')
            .get(country_controller_1.default.listCountry);
        this.app.route('/countryNames')
            .get(country_controller_1.default.listAllCountriesNames);
        this.app.route('/country/:limit/:page')
            .get(country_controller_1.default.listCountry);
        this.app
            .route('/countryStates/:countryName')
            .get(country_controller_1.default.getCountryStateByCountryName);
        this.app
            .route(`/countries/:countryName`)
            .get(country_controller_1.default.getCountryByName);
        return this.app;
    }
}
exports.CountryRoutes = CountryRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRyeS5yb3V0ZXMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvdW50cmllcy9jb3VudHJ5LnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEseUVBQW9FO0FBRXBFLHlGQUFnRTtBQUVoRSxNQUFhLGFBQWMsU0FBUSx5Q0FBa0I7SUFFakQsWUFBWSxHQUF3QjtRQUNoQyxLQUFLLENBQUMsR0FBRyxFQUFFLGVBQWUsQ0FBQyxDQUFBO0lBQy9CLENBQUM7SUFFRCxlQUFlO1FBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO2FBQ3pCLEdBQUcsQ0FBQyw0QkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUduQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUM7YUFDOUIsR0FBRyxDQUFDLDRCQUFpQixDQUFDLHFCQUFxQixDQUFDLENBQUE7UUFFN0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUM7YUFDdEMsR0FBRyxDQUFDLDRCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBRW5DLElBQUksQ0FBQyxHQUFHO2FBQ1AsS0FBSyxDQUFDLDZCQUE2QixDQUFDO2FBQ3BDLEdBQUcsQ0FBQyw0QkFBaUIsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFBO1FBRXBELElBQUksQ0FBQyxHQUFHO2FBQ1AsS0FBSyxDQUFDLHlCQUF5QixDQUFDO2FBQ2hDLEdBQUcsQ0FBQyw0QkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1FBT3hDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNwQixDQUFDO0NBRUo7QUFqQ0Qsc0NBaUNDIn0=