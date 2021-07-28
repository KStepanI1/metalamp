
import "../calendar/calendar"
import "../dropdown/dropdown"
import "../text-field/text-field"
import "./search-room.scss"
import createCalendar from '../../js/calendar.js';
import setDropdown from "../dropdown/dropdown";
import Calendar from "../calendar/calendar";

setDropdown('guests-dropdown', 'guests-field', 'guests');

const datepicker = createCalendar().data('datepicker');
const calendar = new Calendar(['date-start', 'date-end'], 'calendar')

const dateStart = document.querySelector('.search-room__date-start');
const dateEnd = document.querySelector('.search-room__date-end');
const submit = document.querySelector('#calendar .datepicker__submit');

calendar.setSwitchCalendar();

submit.addEventListener('click', (e) => {
    e.stopPropagation();
    calendar.toggleCalendar();
    let dates = datepicker.selectedDates;
    if (dates.length > 0) {
        dateStart.value = ("0" + dates[0].getDate()).slice(-2) + "." + ("0"+(dates[0].getMonth()+1)).slice(-2) + "." + dates[0].getFullYear();
        dateEnd.value = ("0" + dates[1].getDate()).slice(-2) + "." + ("0"+(dates[1].getMonth()+1)).slice(-2) + "." + dates[1].getFullYear();
    }
})




