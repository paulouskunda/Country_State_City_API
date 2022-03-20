import express from 'express'
import debug from 'debug'
import {statusCodes} from '../../common/http.status'
import countryService from '../services/country.service'
const log: debug.IDebugger = debug('app:country-controller')


class CountryController{
    async listCountry(req: express.Request, res: express.Response){
        const country = await countryService.listCountry(100,0)
        res.status(statusCodes.HttpStatus_OK.value).send(country)
    }

    async listAllCountriesNames(req: express.Request, res: express.Response){
        const country = await countryService.listAllCountryNames()
        res.status(statusCodes.HttpStatus_OK.value).send(country)

    }

    async listAllCountries(req: express.Request, res: express.Response){
        const country = await countryService.listAllCountry()
        res.status(statusCodes.HttpStatus_OK.value).send(country)
    }

    async getCountryByName(req: express.Request, res: express.Response){
        
        const country = await countryService.getCountryByName(req.params.countryName)
        res.status(statusCodes.HttpStatus_OK.value).send(country)
    }

    async getCountryStateByCountryName(req: express.Request, res: express.Response){
        const country = await countryService.getCountryStateByCountryName(req.params.countryName)
        res.status(statusCodes.HttpStatus_OK.value).send(country)
    }

    async insertAllCountries(req: express.Request, res: express.Response){
        res.status(statusCodes.HttpStatus_OK.value).send(await countryService.insertAllCountries())
    }
}

export default new CountryController()