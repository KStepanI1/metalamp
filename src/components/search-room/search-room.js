import "../calendar/calendar"
import "../dropdown/dropdown"
import "../text-field/text-field"
import "./search-room.scss"
import createCalendar from '../../js/calendar.js';


function showDropdown() {
    document.querySelector('#guests-dropdown').classList.toggle('dropdown_show')
}
document.querySelector('#guests-field').addEventListener('click', showDropdown);


let datepicker = createCalendar().data('datepicker');

let dateStart = document.querySelector('.search-room__date-start');
let dateEnd = document.querySelector('.search-room__date-end');
let submit = document.querySelector('#calendar .datepicker__submit');

function showCalendar() {
    document.querySelector('#calendar').classList.toggle('datepicker-here_show');
}
document.querySelector('#date-start').addEventListener('click', showCalendar);
document.querySelector('#date-end').addEventListener('click', showCalendar);

submit.addEventListener('click', (e) => {
    e.stopPropagation();
    showCalendar();
    let dates = datepicker.selectedDates;
    if (dates.length > 0) {
        console.log(dateStart)
        dateStart.value = ("0" + dates[0].getDate()).slice(-2) + "." + ("0"+(dates[0].getMonth()+1)).slice(-2) + "." + dates[0].getFullYear();
        dateEnd.value = ("0" + dates[1].getDate()).slice(-2) + "." + ("0"+(dates[1].getMonth()+1)).slice(-2) + "." + dates[1].getFullYear();
    }
})




