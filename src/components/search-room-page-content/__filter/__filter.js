import "./__filter.scss"

import "../../dropdown/dropdown.js"
import "../../text-field/text-field.js"
import "../../checkbox-button/checkbox-button.js"
import "../../slider/slider.js"
import "../../rich-checkbox-button/rich-checkbox-button.js"

import setDropdown from "../../dropdown/dropdown";
import createCalendar from "../../../js/calendar";
import Calendar from "../../calendar/calendar";
import setSlider from "../../../js/slider";

setDropdown('guests-dropdown', 'guests-field', 'guests');
setDropdown('room-amenities-dropdown', 'room-amenities-field', 'room-amenities');


const datepicker = createCalendar().data('datepicker');
const calendar = new Calendar(['date-range'], 'calendar');
const dateRange = document.getElementById('date-range')
const submit = document.querySelector('#calendar .datepicker__submit');

calendar.setSwitchCalendar();

submit.addEventListener('click', (e) => {
    e.stopPropagation();
    calendar.toggleCalendar();
    let dates = datepicker.selectedDates;
    if (dates.length > 0) {
        dateRange.value = ("0" + dates[0].getDate()).slice(-2) + "." + ("0"+(dates[0].getMonth()+1)).slice(-2)
                            + ' - '
                            + ("0" + dates[1].getDate()).slice(-2) + "." + ("0"+(dates[1].getMonth()+1)).slice(-2);
    }
})

const slider = document.getElementById('filter-slider');
const sliderRangeSpan = document.getElementById('filter-slider-range');

function updateSliderValues() {
    const currentValues = slider.noUiSlider.get();
    sliderRangeSpan.innerText = parseInt(currentValues[0]) + '₽' + ' - ' + parseInt(currentValues[1]) + '₽';
}

setSlider(slider);
updateSliderValues();

slider.noUiSlider.on('update', function () {
    updateSliderValues();
})