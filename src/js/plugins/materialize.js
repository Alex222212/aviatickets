import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'

const select = document.querySelectorAll('select');
M.FormSelect.init(select);
export function getSelect(elem){
    let instance = M.FormSelect.getInstance(elem);
    return instance
}
const autocomplete = document.querySelectorAll('.autocomplete');
M.Autocomplete.init(autocomplete);
export function instanceAuto (elem){
   return M.Autocomplete.getInstance(elem);
}
let insanseDate = document.querySelectorAll('.datepicker');
M.Datepicker.init(insanseDate,{
    format:'yyyy-mm'
});
export function getInstanseDate(elem){
    return M.Datepicker.getInstance(elem);
}