"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Country State City API',
            version: '1.0.0',
            description: 'API documentation for Country Provinces City project, most of the information was gathered 4 years (pre public ChatGPT) so you need to confirm for other countries and what ever is new in Zambia. The latitude and longitude of some provinces and cities are not accurate, so you need to confirm them.',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Development server',
            },
        ],
    },
    apis: ['./src/**/*.routes.config.ts'], // Path to the route files for Swagger annotations
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(swaggerOptions);
exports.default = swaggerSpec;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dhZ2dlci5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbW9uL2NvbmZpZy9zd2FnZ2VyLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtFQUF5QztBQUV6QyxNQUFNLGNBQWMsR0FBRztJQUNuQixVQUFVLEVBQUU7UUFDUixPQUFPLEVBQUUsT0FBTztRQUNoQixJQUFJLEVBQUU7WUFDRixLQUFLLEVBQUUsd0JBQXdCO1lBQy9CLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLFdBQVcsRUFBRSwyU0FBMlM7U0FDM1Q7UUFDRCxPQUFPLEVBQUU7WUFDTDtnQkFDSSxHQUFHLEVBQUUsdUJBQXVCO2dCQUM1QixXQUFXLEVBQUUsb0JBQW9CO2FBQ3BDO1NBQ0o7S0FDSjtJQUNELElBQUksRUFBRSxDQUFDLDZCQUE2QixDQUFDLEVBQUUsa0RBQWtEO0NBQzVGLENBQUM7QUFFRixNQUFNLFdBQVcsR0FBRyxJQUFBLHVCQUFZLEVBQUMsY0FBYyxDQUFDLENBQUM7QUFFakQsa0JBQWUsV0FBVyxDQUFDIn0=