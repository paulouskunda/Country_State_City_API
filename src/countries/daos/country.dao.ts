
import connectDB from '../../common/config/database.config'; // Import connectDB

class CountryDao {


    async getCountryByName(countryName: string) {
        const collection = await connectDB();
        const query = { name: countryName };
        //const countryfound 
        return await collection.find(query).toArray();
    }


    async getAllCountriesList() {
        const collection = await connectDB();


        //const countryfound 
        var country = await collection.find(
            {},
            {
                projection: {
                    _id: 0,
                    id: 1,
                    name: 1,
                    currency: 1,
                    phone_code: 1,
                    iso3: 1,
                    capital: 1
                }
            }
        ).sort({ name: 1 }).toArray();
        return country;
    }

    async getCountryProvinceByCountryName(countryName: string) {
        const collection = await connectDB();
        return await collection.findOne({ name: countryName }, { projection: { provinces: 1, _id: 0 } });
    }

    async getCountryProvinceByCountryId(countryId: string) {
        const collection = await connectDB();
        return await collection.findOne({ id: countryId }, { projection: { provinces: 1, _id: 0 } });
    }

    async getCountryCitiesByCountryNameAndProvinceName(countryName: string, provinceName: string) {
        const collection = await connectDB();
        return await collection.findOne(
            { name: countryName, 'provinces.name': provinceName },
            { projection: { 'provinces.$': 1, _id: 0 } })
        }

    async getCountryCitiesByCountryIdAndProvinceId(countryId: string, provinceId: string) {
        const collection = await connectDB();
        return await collection.findOne(
            { 'id': countryId, 'provinces.id': provinceId },
            { projection: { 'provinces.$': 1, _id: 0 } })
        .toArray();
    }
   


}

export default new CountryDao()