import "./dropdown.scss"
import onActionDropdown from "../../js/dropdown";


function toggleDropdown() {
    document.getElementById(this.dropdownId).classList.toggle(`dropdown_show`)
}

export default function setDropdown(dropdownId, textFieldId, dropdownType) {
    onActionDropdown(dropdownId, textFieldId, dropdownType);
    document.getElementById(textFieldId).addEventListener('click',
        {
            handleEvent: toggleDropdown,
            dropdownId: dropdownId
        })
}