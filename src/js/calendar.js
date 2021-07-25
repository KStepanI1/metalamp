import "air-datepicker"

import "air-datepicker/dist/css/datepicker.min.css"


export default function (id='#calendar', minDate = new Date()) {
    let calendar = $(id).datepicker({
        clearButton: true,
        navTitles: {
            days: 'MM <i>yyyy</i>',
            months: 'yyyy',
            years: 'yyyy1 - yyyy2'
        },
        classes: 'calendar',
        prevHtml: '<svg width="17" height="18" viewBox="0 0 17 18" fill="none"><path d="M16.1757 8.01562V9.98438H3.98819L9.56632 15.6094L8.16007 17.0156L0.144441 9L8.16007 0.984375L9.56632 2.39062L3.98819 8.01562H16.1757Z" fill="#BC9CFF"/></svg>',
        nextHtml: '<svg width="17" height="18" viewBox="0 0 17 18" fill="none"><path d="M8.36301 0.984375L16.3786 9L8.36301 17.0156L6.95676 15.6094L12.5349 9.98438H0.347383V8.01562H12.5349L6.95676 2.39062L8.36301 0.984375Z" fill="#BC9CFF"/></svg>',
        multipleDates: '3',
        range: true,
        minDate: minDate,
        toggleSelected: false
    })

    $(`${id} .datepicker--buttons`).append('<span class="datepicker--button datepicker__submit">Применить</span>')

    return calendar
}