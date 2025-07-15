export interface CRUD {
    listAllCountry: () => Promise<any>
    getCountryByName: (countryName: string) => Promise<any>
    getCountryProvinceByCountryName: (countryName: string) => Promise<any>
    getCountryCitiesByCountryNameAndProvinceName: (countryName: string, provinceName: string) => Promise<any>
    getCountryCitiesByCountryIdAndProvinceId: (countryId: string, provinceId: string) => Promise<any>
    getCountryProvinceByCountryId: (countryId: string) => Promise<any>
}