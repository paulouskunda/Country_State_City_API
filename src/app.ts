import express from 'express'
import * as http from 'http'
import dotenv from 'dotenv'
import connectDB from './common/config/database.config'
import * as winston from 'winston'
import * as expressWinston from 'express-winston'
import cors from 'cors'
import {CommonRoutesConfig} from './common/common.routes.config'
import {CountryRoutes} from './countries/country.routes.config'
import countryDao from './countries/daos/country.dao'
import debug from 'debug'
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './common/config/swagger.config';

const dotEnvResult = dotenv.config()

const app: express.Application = express()
const server: http.Server = http.createServer(app)
const port = process.env.PORT || 3000
const routes: Array<CommonRoutesConfig> = []
const debugLog: debug.IDebugger = debug('app')
app.use(express.json())

app.use(cors())

const loggerOptions: expressWinston.LoggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.json(),
        winston.format.prettyPrint(),
        winston.format.colorize({all: true})
    ),

}

// if(dotEnvResult.error){
//     throw dotEnvResult.error
// }

if(!process.env.DEBUG){
    loggerOptions.meta = false
}

app.use(expressWinston.logger(loggerOptions))

routes.push(new CountryRoutes(app))

const runMessage =  `Server running at ${port}`

app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(runMessage)
})



// Add Swagger middleware
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

connectDB().then(() => {
    server.listen(port, () => {
        routes.forEach((routes: CommonRoutesConfig) => {
            debugLog(`Routes  configured for ${routes.getName}`)
        })
})


    console.log(runMessage)
    console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
})