import express from 'express'
import debug from 'debug'
import {statusCodes} from '../../common/http.status'
import countryService from '../services/country.service'
import { createResponse } from '../../common/utils/response.util';
const log: debug.IDebugger = debug('app:country-controller')


class CountryController{
  

 

    async listAllCountries(req: express.Request, res: express.Response){
        const country = await countryService.listAllCountry();
        res.status(200).send(createResponse(200, country));
    }

    async getCountryByName(req: express.Request, res: express.Response){
        const country = await countryService.getCountryByName(req.params.countryName);
        res.status(200).send(createResponse(200, country));
    }

    async getCountryProvinceByCountryName(req: express.Request, res: express.Response){
        const country = await countryService.getCountryProvinceByCountryName(req.params.countryName);
        res.status(200).send(createResponse(200, country));
    }

    async getCountryCitiesByCountryNameAndProvinceName(req: express.Request, res: express.Response){
        const country = await countryService.getCountryCitiesByCountryNameAndProvinceName(
            req.params.countryName, 
            req.params.provinceName
        );
        res.status(200).send(createResponse(200, country));
    }

    async getCountryCitiesByCountryIdAndProvinceId(req: express.Request, res: express.Response){
        const country = await countryService.getCountryCitiesByCountryIdAndProvinceId(
            req.params.countryId, 
            req.params.provinceId
        );
        res.status(200).send(createResponse(200, country));
    }

    async getCountryProvinceByCountryId(req: express.Request, res: express.Response){
        const country = await countryService.getCountryProvinceByCountryId(req.params.countryId);
        res.status(200).send(createResponse(200, country));
    }

}

export default new CountryController()