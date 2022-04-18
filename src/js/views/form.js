import {instanceAuto, getInstanseDate} from '../plugins/materialize'
class FormUi{
    constructor(instanceAuto, getInstanseDate){
        this._form = document.getElementById('form_tickets')
        this.origin = document.getElementById('autocomplete-origin')
        this.design = document.getElementById('autocomplete-design')
        this.depart = document.getElementById('datepicker-depart')
        this.return = document.getElementById('datepicker-return')
        this.origintAuto = instanceAuto(this.origin)
        this.designAuto = instanceAuto(this.design)
        this.pickDep = getInstanseDate(this.depart)
        this.retPick = getInstanseDate(this.return)
    }
    // get _form(){
    //     return this.form
    // }
    get originValue(){
        return this.origin.value
    }
    get designValue(){
       return this.design.value
    }
    get departValue(){
        return this.depart.value
     }
     get returnValue(){
        return this.return.value
     }
    setAuto(data){
        this.origintAuto.updateData(data)
        this.designAuto.updateData(data)
    }
}
const formUi = new FormUi(instanceAuto, getInstanseDate);
export default formUi;