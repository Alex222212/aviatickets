import '../css/style.css'
import dataLock from './store/location'
import '../js/plugins'
import formUi from './views/form'
import currencyUI from './views/currency'
document.addEventListener('DOMContentLoaded',()=>{
    initApp()
    const form = formUi._form

    async function initApp() {
        await dataLock.init()
        formUi.setAuto(dataLock.short)
    }
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        onFormSubmit();
        
    })

    async function onFormSubmit(){
        const origin = dataLock.getCitiesCodeByName(formUi.originValue);
        const destination = dataLock.getCitiesCodeByName(formUi.designValue)
        const depart_date = formUi.departValue
        const return_date = formUi.returnValue
        const currency = currencyUI.ShowCurrency
       await dataLock.fetchTicket({
           origin,
            destination,
            depart_date,
            return_date,
            currency,})
    }
} )



