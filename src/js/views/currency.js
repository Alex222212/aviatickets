class Currency{
    constructor(){
        this._currency = document.getElementById('currency')
    }
    get ShowCurrency(){
        return this._currency.value
    }
}
const currencyUI = new Currency();
export default currencyUI