import axios from 'axios'
import config from '../config/apiCongig'

class API{
constructor(config){
    this.config=config.url
}
async countries(){
 try {
     const responce = await axios.get(`${this.config}/countries`)
     return responce.data
 } catch (error) {
     console.log(error);
 }
}
async cities(){
    try {
        const responce = await axios.get(`${this.config}/cities`)
        return responce.data
    } catch (error) {
        console.log(error);
    }
}
async airLines(){
    try {
        const responce = await axios.get(`${this.config}/airlines`)
        return responce.data
    } catch (error) {
        console.log(error);
    }
}
async prices(params){
    try {
        const responce = await axios.get(`${this.config}/prices/cheap`,{
            params
        })
        return responce.data
    } catch (error) {
        console.log(error);
    }
}
}
const api = new API(config)
export default api