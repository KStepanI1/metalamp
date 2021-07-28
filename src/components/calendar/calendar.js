import "../../js/calendar"
import "./calendar.scss"


class Calendar {
    constructor(fieldsIdArr = [], calendarId) {
        this.calendarId = calendarId;
        this.fieldsIdArr = fieldsIdArr;
    }

    toggleCalendar() {
        document.getElementById(this.calendarId).classList.toggle('datepicker-here_show');
    }

    setSwitchCalendar() {
        this.fieldsIdArr.forEach(id => {
            document.getElementById(id).addEventListener('click', {handleEvent: this.toggleCalendar, calendarId: this.calendarId})
        })
    }
}


export default Calendar