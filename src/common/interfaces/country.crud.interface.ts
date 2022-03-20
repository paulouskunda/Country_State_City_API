export interface CRUD {
    listCountry: (limit: number, page: number) => Promise<any>
    listAllCountry: () => Promise<any>
    listAllCountryNames: () => Promise<any>
    getCountryByName: (countryName: string) => Promise<any>
    getCountryStateByCountryName: (countryName: string) => Promise<any>
    insertAllCountries: () => Promise<any>
    // getStateByName: (stateName: string) => Promise<any>
    // getCityName: (cityName: string) => Promise<any>
    // createCountry: (resource: any) => Promise<any>
    // addStateToCountry: (countryId: string, stateResource: any) => Promise<any>
    // addCityToState: (countryId: string, stateId: string, cityResource: any) => Promise<any>


}