import CountryDao from '../daos/country.dao'
import { CRUD } from "../../common/interfaces/country.crud.interface"
import fs from 'fs'


class CountryService implements CRUD{

    async listCountry(limit: number, page: number){
        return CountryDao.getCountriesList(limit, page)
    }
    async listAllCountry(){
        return CountryDao.getAllCountriesList()
    }

    async listAllCountryNames(){
        return CountryDao.getAllCountriesNamesList()
    }
    
    async getCountryByName(countryName: string){
        return CountryDao.getCountryByName(countryName)
    }

    async getCountryStateByCountryName(countryName: string){
        return CountryDao.getCountryStateByCountryName(countryName)
    }

    async insertAllCountries(){
        var countries:any = fs.readFileSync('country_state_city.json');  
        var country = JSON.parse(countries);  
        return CountryDao.insertAllCountries(country)
    }
    

}

export default new CountryService()