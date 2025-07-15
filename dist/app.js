"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http = __importStar(require("http"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_config_1 = __importDefault(require("./common/config/database.config"));
const winston = __importStar(require("winston"));
const expressWinston = __importStar(require("express-winston"));
const cors_1 = __importDefault(require("cors"));
const country_routes_config_1 = require("./countries/country.routes.config");
const debug_1 = __importDefault(require("debug"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_config_1 = __importDefault(require("./common/config/swagger.config"));
const dotEnvResult = dotenv_1.default.config();
const app = (0, express_1.default)();
const server = http.createServer(app);
const port = process.env.PORT || 3000;
const routes = [];
const debugLog = (0, debug_1.default)('app');
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const loggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(winston.format.json(), winston.format.prettyPrint(), winston.format.colorize({ all: true })),
};
// if(dotEnvResult.error){
//     throw dotEnvResult.error
// }
if (!process.env.DEBUG) {
    loggerOptions.meta = false;
}
app.use(expressWinston.logger(loggerOptions));
routes.push(new country_routes_config_1.CountryRoutes(app));
const runMessage = `Server running at ${port}`;
app.get('/', (req, res) => {
    res.status(200).send(runMessage);
});
// Add Swagger middleware
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_config_1.default));
(0, database_config_1.default)().then(() => {
    server.listen(port, () => {
        routes.forEach((routes) => {
            debugLog(`Routes  configured for ${routes.getName}`);
        });
    });
    console.log(runMessage);
    console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQTZCO0FBQzdCLDJDQUE0QjtBQUM1QixvREFBMkI7QUFDM0Isc0ZBQXVEO0FBQ3ZELGlEQUFrQztBQUNsQyxnRUFBaUQ7QUFDakQsZ0RBQXVCO0FBRXZCLDZFQUErRDtBQUUvRCxrREFBeUI7QUFDekIsNEVBQTJDO0FBQzNDLG9GQUF5RDtBQUV6RCxNQUFNLFlBQVksR0FBRyxnQkFBTSxDQUFDLE1BQU0sRUFBRSxDQUFBO0FBRXBDLE1BQU0sR0FBRyxHQUF3QixJQUFBLGlCQUFPLEdBQUUsQ0FBQTtBQUMxQyxNQUFNLE1BQU0sR0FBZ0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUNsRCxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUE7QUFDckMsTUFBTSxNQUFNLEdBQThCLEVBQUUsQ0FBQTtBQUM1QyxNQUFNLFFBQVEsR0FBb0IsSUFBQSxlQUFLLEVBQUMsS0FBSyxDQUFDLENBQUE7QUFDOUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7QUFFdkIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFBLGNBQUksR0FBRSxDQUFDLENBQUE7QUFFZixNQUFNLGFBQWEsR0FBaUM7SUFDaEQsVUFBVSxFQUFFLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzlDLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FDMUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFDckIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsRUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FDdkM7Q0FFSixDQUFBO0FBRUQsMEJBQTBCO0FBQzFCLCtCQUErQjtBQUMvQixJQUFJO0FBRUosSUFBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFDO0lBQ2xCLGFBQWEsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFBO0NBQzdCO0FBRUQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUE7QUFFN0MsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLHFDQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtBQUVuQyxNQUFNLFVBQVUsR0FBSSxxQkFBcUIsSUFBSSxFQUFFLENBQUE7QUFFL0MsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsRUFBRTtJQUN6RCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtBQUNwQyxDQUFDLENBQUMsQ0FBQTtBQUlGLHlCQUF5QjtBQUN6QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSw0QkFBUyxDQUFDLEtBQUssRUFBRSw0QkFBUyxDQUFDLEtBQUssQ0FBQyx3QkFBVyxDQUFDLENBQUMsQ0FBQztBQUVwRSxJQUFBLHlCQUFTLEdBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO0lBQ2xCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRTtRQUNyQixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBMEIsRUFBRSxFQUFFO1lBQzFDLFFBQVEsQ0FBQywwQkFBMEIsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUE7UUFDeEQsQ0FBQyxDQUFDLENBQUE7SUFDVixDQUFDLENBQUMsQ0FBQTtJQUdFLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4Q0FBOEMsSUFBSSxXQUFXLENBQUMsQ0FBQztBQUMvRSxDQUFDLENBQUMsQ0FBQSJ9