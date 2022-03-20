// import { CreateUserDto } from "../../dto/create.user.dto"
// import { PatchUserDto } from "../../dto/patch.user.dto"
// import { PutUserDto } from "../../dto/put.user.dto"
import debug from "debug"
import mongooseService from "../../common/services/mongoose.service"

const log: debug.IDebugger = debug('app:mongo-database-dao')

class CountryDao {
    Schema = mongooseService.getMongoose().Schema

    countryShema = new this.Schema({
        _id:Object,
        id:Number,
        name: String,
        iso3: String,
        iso2: String,
        numeric_code: String,
        phone_code: String,
        capital: String,
        currency: String,
        currency_name: String,
        currency_symbol: String,
        tld: String,
        native: String,
        region: String,
        subregion: String,
        timezones:Array,
        translations:Object,
        latitude: String,
        longitude: String,
        emoji: String,
        emojiU: String,
        states: Array
    })

    Country  = mongooseService.getMongoose().model('country_state_city', this.countryShema)
    constructor(){
        log('Create new instanse of Country')
    }

    async getCountryByName(countryName: string){
        return this.Country.findOne({name: countryName}).exec()
    }

    async getCountriesList(limit =25, page =0){
        return this.Country.find()
             .limit(limit)
             .skip(limit * page)
             .exec()
    }

    async getAllCountriesList(){
        return this.Country.find().exec()
    }

    async getAllCountriesNamesList(){

        return this.Country.find({}, {name:1, _id:0}).exec()
    }

    async getCountryStateByCountryName(countryName: string){
        return this.Country.find({name: countryName}, {states:1, _id:0}).exec()
    }

    async insertAllCountries(country: any){
        return this.Country.insertMany(country)
    }


}

export default new CountryDao()