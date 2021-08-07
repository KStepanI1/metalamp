import "@assets/scss/_global.scss"

import "@components/header/header.js"
import "@components/search-room-page-content/search-room-page-content.js"
import "@components/footer/footer.js"
import {calendar, guestsDropdown, roomAmenitiesDropdown} from "../../components/search-room-page-content/__filter/__filter";


$(document).mouseup(function (e) {
    calendar.hideIfClickOut(e);
    guestsDropdown.hideIfClickOut(e);
    roomAmenitiesDropdown.hideIfClickOut(e);
})