import "../../js/calendar"
import "./calendar.scss"
import createCalendar from "../../js/calendar";


class Calendar {
    constructor(fieldsIdArr = [], calendarId) {
        this.calendarId = calendarId;
        this.fieldsIdArr = fieldsIdArr;
        this.calendarBlock = document.getElementById(calendarId);
        this.datepicker = createCalendar().data('datepicker');
        this.setSwitch();
    }

    toggle() {
        this.calendarBlock.classList.toggle('calendar_opened');
    }

    setSwitch() {
        this.fieldsIdArr.forEach(id => {
            document.getElementById(id).addEventListener('click', {
                handleEvent: this.toggle,
                calendarBlock: this.calendarBlock
            })
        })
    }

    hideIfClickOut(e) {
        const calendar = $(`#${this.calendarId}`);
        if (calendar.has(e.target).length === 0 && !this.fieldsIdArr.includes(e.target.id) && calendar.hasClass('calendar_opened')){
            calendar.removeClass('calendar_opened');
        }
    }
}


export default Calendar