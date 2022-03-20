export interface CRUD {
    listCountry: (limit: number, page: number) => Promise<any>
    listAllCountry: () => Promise<any>
    listAllCountryNames: () => Promise<any>
    getCountryByName: (countryName: string) => Promise<any>
    getCountryStateByCountryName: (countryName: string) => Promise<any>
    insertAllCountries: () => Promise<any>
}