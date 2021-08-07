import "@assets/scss/_global.scss"
import "@components/header/header.js"
import "@components/landing-page-content/landing-page-content.js"
import "@components/footer/footer.js"
import {calendar, dropdown} from "../../components/search-room/search-room.js";

$(document).mouseup(function (e) {
    calendar.hideIfClickOut(e);
    dropdown.hideIfClickOut(e);
})
