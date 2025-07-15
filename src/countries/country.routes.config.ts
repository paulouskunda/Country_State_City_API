import { CommonRoutesConfig } from "../common/common.routes.config";
import express from 'express';
import countryController from "./controller/country.controller";

export class CountryRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'CountryRoutes');
    }

    configureRoutes(): express.Application {
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
        this.app.route('/api/countries').get(countryController.listAllCountries);


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
        .get(countryController.getCountryByName);

   
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
        .get(countryController.getCountryProvinceByCountryName)

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
        .get(countryController.getCountryCitiesByCountryNameAndProvinceName);

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
        .get(countryController.getCountryCitiesByCountryIdAndProvinceId);

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
        .get(countryController.getCountryProvinceByCountryId);
        
       


   

        

        return this.app;
    }
    
}

