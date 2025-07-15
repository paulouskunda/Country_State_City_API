import CountryDao from '../daos/country.dao'
import { CRUD } from "../../common/interfaces/country.crud.interface"



class CountryService implements CRUD{

 
    async listAllCountry(){
        return CountryDao.getAllCountriesList()
    }

    
    async getCountryByName(countryName: string){
        return CountryDao.getCountryByName(countryName)
    }

    async getCountryProvinceByCountryName(countryName: string){
        return CountryDao.getCountryProvinceByCountryName(countryName)
    }

    async getCountryCitiesByCountryNameAndProvinceName(countryName: string, provinceName: string){
        return CountryDao.getCountryCitiesByCountryNameAndProvinceName(countryName, provinceName)
    }
    
    async getCountryCitiesByCountryIdAndProvinceId(countryId: string, provinceId: string){
        return CountryDao.getCountryCitiesByCountryIdAndProvinceId(countryId, provinceId)
    }   

    async getCountryProvinceByCountryId(countryId: string){
        return CountryDao.getCountryProvinceByCountryId(countryId)
    }

}

export default new CountryService()