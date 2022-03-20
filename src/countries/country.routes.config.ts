import { CommonRoutesConfig } from "../common/common.routes.config";
import express from 'express'
import countryController from "./controller/country.controller";

export class CountryRoutes extends CommonRoutesConfig{

    constructor(app: express.Application){
        super(app, 'CountryRoutes')
    }

    configureRoutes(): express.Application {
        this.app.route('/country')
        .get(countryController.listCountry)


        this.app.route('/countryNames')
        .get(countryController.listAllCountriesNames)

        this.app.route('/country/:limit/:page')
        .get(countryController.listCountry)

        this.app
        .route('/countryStates/:countryName')
        .get(countryController.getCountryStateByCountryName)
        
        this.app
        .route(`/countries/:countryName`)
        .get(countryController.getCountryByName)


   

        

        return this.app;
    }
    
}

