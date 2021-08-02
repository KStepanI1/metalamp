import "../calendar/calendar"
import "../dropdown/dropdown"
import "../text-field/text-field"
import "./search-room.scss"
import createCalendar from '../../js/calendar.js';
import Calendar from "../calendar/calendar";
import Dropdown from "../dropdown/dropdown";


// set dropdown with id "guests-dropdown" (show him when click on text field with id "guests-field")
const dropdown = new Dropdown('guests-field', 'guests-dropdown', 'guests');

dropdown.setDropdown();


const datepicker = createCalendar().data('datepicker');

const dateStart = document.querySelector('.search-room__date-start');
const dateEnd = document.querySelector('.search-room__date-end');
const submit = document.querySelector('#calendar .datepicker__submit');

const calendar = new Calendar(['date-start', 'date-end'], 'calendar');

calendar.setSwitchCalendar();

function updateSelectedValues() {
    let dates = datepicker.selectedDates;
    if (dates.length > 0) {
        if (dates[0] === undefined) {
            dateStart.value = '';
        } else {
            dateStart.value = ("0" + dates[0].getDate()).slice(-2) + "." + ("0" + (dates[0].getMonth() + 1)).slice(-2) + "." + dates[0].getFullYear();
        }
        if (dates[1] === undefined) {
            dateEnd.value = ''
        } else {
            dateEnd.value = ("0" + dates[1].getDate()).slice(-2) + "." + ("0" + (dates[1].getMonth() + 1)).slice(-2) + "." + dates[1].getFullYear();
        }
    }
}

document.getElementById(calendar.calendarId).addEventListener('click', updateSelectedValues);

submit.addEventListener('click', (e) => {
    e.stopPropagation();
    calendar.toggleCalendar();
})

export {calendar, dropdown};



