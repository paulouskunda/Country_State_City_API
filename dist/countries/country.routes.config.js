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
        // this.app.route('/api/country').get(countryController.listCountry);
        /**
         * @swagger
         * /api/countries:
         *   get:
         *     summary: Get all countries
         *     responses:
         *       200:
         *         description: A list of all countries
         */
        this.app.route('/api/countries').get(country_controller_1.default.listAllCountries);
        /**
         * @swagger
         * /api/countryByName/{countryName}:
         *   get:
         *     summary: Get country by name
         *     parameters:
         *       - in: path
         *         name: countryName
         *         required: true
         *         description: The name of the country to retrieve
         *     responses:
         *       200:
         *         description: Country found
         *       404:
         *         description: Country not found
         *       500:
         *         description: Internal server error
         */
        this.app.route('/api/countryByName/:countryName')
            .get(country_controller_1.default.getCountryByName);
        /**
         * @swagger
         * /api/countryProvinces/{countryName}:
         *   get:
         *     summary: Get provinces (referred to as states in countries like the USA) by country name
         *     parameters:
         *       - in: path
         *         name: countryName
         *     responses:
         *          200:
         *            description: {status: 200, message: []}
         *          404:
         *              description: Country not found
         */
        this.app
            .route('/api/countryProvinces/:countryName')
            .get(country_controller_1.default.getCountryProvinceByCountryName);
        /**
         * @swagger
         * /api/countryCities/{countryName}/{provinceName}:
         *   get:
         *     summary: Get cities by country name and province name
         *     parameters:
         *       - in: path
         *         name: countryName
         *         required: true
         *       - in: path
         *         name: provinceName
         *         required: true
         *     responses:
         *       200:
         *         description: {status: 200, message: []}
         */
        this.app
            .route('/api/countryCities/:countryName/:provinceName')
            .get(country_controller_1.default.getCountryCitiesByCountryNameAndProvinceName);
        /**
         * @swagger
         * /api/countryCitiesById/{countryId}/{provinceId}:
         *   get:
         *     summary: Get cities by country ID and province ID, ie for country Zambia is 246
         *     parameters:
         *       - in: path
         *         name: countryId
         *         required: true
         *       - in: path
         *         name: provinceId
         *         required: true
         *     responses:
         *       200:
         *         description: {status: 200, message: []}
         */
        this.app
            .route('/api/countryCitiesById/:countryId/:provinceId')
            .get(country_controller_1.default.getCountryCitiesByCountryIdAndProvinceId);
        /**
         * @swagger
         * /api/countryProvincesById/{countryId}:
         *   get:
         *     summary: Get provinces by country ID
         *     parameters:
         *       - in: path
         *         name: countryId
         *         required: true
         *     responses:
         *       200:
         *         description: {status: 200, message: []}
         */
        this.app
            .route('/api/countryProvincesById/:countryId')
            .get(country_controller_1.default.getCountryProvinceByCountryId);
        return this.app;
    }
}
exports.CountryRoutes = CountryRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRyeS5yb3V0ZXMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvdW50cmllcy9jb3VudHJ5LnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEseUVBQW9FO0FBRXBFLHlGQUFnRTtBQUVoRSxNQUFhLGFBQWMsU0FBUSx5Q0FBa0I7SUFDakQsWUFBWSxHQUF3QjtRQUNoQyxLQUFLLENBQUMsR0FBRyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxlQUFlO1FBQ1gscUVBQXFFO1FBRXJFOzs7Ozs7OztXQVFHO1FBQ0gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxHQUFHLENBQUMsNEJBQWlCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUd6RTs7Ozs7Ozs7Ozs7Ozs7Ozs7V0FpQkc7UUFDSCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQzthQUNoRCxHQUFHLENBQUMsNEJBQWlCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUd6Qzs7Ozs7Ozs7Ozs7OztXQWFHO1FBQ0gsSUFBSSxDQUFDLEdBQUc7YUFDUCxLQUFLLENBQUMsb0NBQW9DLENBQUM7YUFDM0MsR0FBRyxDQUFDLDRCQUFpQixDQUFDLCtCQUErQixDQUFDLENBQUE7UUFFdkQ7Ozs7Ozs7Ozs7Ozs7OztXQWVHO1FBQ0gsSUFBSSxDQUFDLEdBQUc7YUFDUCxLQUFLLENBQUMsK0NBQStDLENBQUM7YUFDdEQsR0FBRyxDQUFDLDRCQUFpQixDQUFDLDRDQUE0QyxDQUFDLENBQUM7UUFFckU7Ozs7Ozs7Ozs7Ozs7OztXQWVHO1FBQ0gsSUFBSSxDQUFDLEdBQUc7YUFDUCxLQUFLLENBQUMsK0NBQStDLENBQUM7YUFDdEQsR0FBRyxDQUFDLDRCQUFpQixDQUFDLHdDQUF3QyxDQUFDLENBQUM7UUFFakU7Ozs7Ozs7Ozs7OztXQVlHO1FBQ0gsSUFBSSxDQUFDLEdBQUc7YUFDUCxLQUFLLENBQUMsc0NBQXNDLENBQUM7YUFDN0MsR0FBRyxDQUFDLDRCQUFpQixDQUFDLDZCQUE2QixDQUFDLENBQUM7UUFTdEQsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ3BCLENBQUM7Q0FFSjtBQS9IRCxzQ0ErSEMifQ==