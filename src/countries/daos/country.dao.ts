import connectDB from '../../common/config/database.config'; // Import connectDB

class CountryDao {
    private collection: any;

    constructor() {
        this.initializeCollection();
    }

    private async initializeCollection() {
        try {
            this.collection = await connectDB(); 
            console.log('CountryDao: MongoDB collection initialized');
        } catch (error) {
            console.error('CountryDao: Failed to initialize MongoDB collection', error);
        }
    }

    async getCountryByName(countryName: string) {
        const query = { name: countryName };
        return await this.collection.find(query).toArray();
    }

    async getAllCountriesList() {
        return await this.collection
            .find(
                {},
                {
                    projection: {
                        _id: 0,
                        id: 1,
                        name: 1,
                        currency: 1,
                        phone_code: 1,
                        iso3: 1,
                        iso2: 1,
                        capital: 1,
                    },
                }
            )
            .sort({ name: 1 })
            .toArray();
    }

    async getCountryProvinceByCountryName(countryName: string) {
        return await this.collection.findOne(
            { name: countryName },
            { projection: { provinces: 1, _id: 0 } }
        );
    }

    async getCountryProvinceByCountryId(countryId: string) {
        return await this.collection.findOne(
            { id: parseInt(countryId) },
            { projection: { provinces: 1, _id: 0 } }
        );
    }

    async getCountryCitiesByCountryNameAndProvinceName(countryName: string, provinceName: string) {
        return await this.collection.findOne(
            { name: countryName, 'provinces.name': provinceName },
            { projection: { 'provinces.$': 1, _id: 0 } }
        );
    }

    async getCountryCitiesByCountryIdAndProvinceId(countryId: string, provinceId: string) {
        return await this.collection
            .findOne(
                { id: parseInt(countryId), 'provinces.id': parseInt(provinceId) },
                { projection: { 'provinces.$': 1, _id: 0 } }
            );
    }
}

export default new CountryDao();