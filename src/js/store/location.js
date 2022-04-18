import api from "../service/apiServises";
class LocationData{
    constructor(api){
        this.api = api;
        this.countries = null;
        this.cities = null;
        this.short = null;
        this.airlines = {};
    }
    async init(){
        const response = await Promise.all([
            this.api.countries(),
            this.api.cities(),
            this.api.airLines()
        ])
        const [countries, cities, airlines] = response
        this.countries = this.serializeCountry(countries);
        this.cities = this.serializeCities(cities)
        this.short = this.shortListCities(this.cities)
        this.airlines = airlines
        return response
    }
    async fetchTicket(params){
        const responce = await api.prices(params)
        
        return responce
    }
    shortListCities(cities){
        return Object.entries(cities).reduce((acc,[key])=>{
            acc[key]= null;
            return acc
        },{})
    }
    serializeCountry(countries){
        return countries.reduce((acc, contry)=>{
            acc[contry.code]=contry
            return acc
        },{})
    }
    serializeCities(cities){
        return cities.reduce((acc, city)=>{
            const country_name = this.getCountryNameByCode(city.country_code)
            const key = `${city.name || city.name_translations.en}, ${country_name}`;
            acc[key]= city
            return acc
        },{})
    }
    getCountryNameByCode(code){
        return this.countries[code].name
    }
    getCitiesCodeByName(name){
        return this.cities[name].code
    }
}
const dataLock = new LocationData(api)
export default dataLock;