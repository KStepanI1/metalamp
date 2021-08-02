import "./dropdown.scss"
import onActionDropdown from "../../js/dropdown";

class Dropdown {
    constructor(textFieldId, dropdownId, dropdownType) {
        this.textFieldId = textFieldId;
        this.dropdownId = dropdownId;
        this.dropdownType = dropdownType;
        onActionDropdown(dropdownId, textFieldId, dropdownType);
    }

    toggleDropdown() {
        document.getElementById(this.dropdownId).classList.toggle(`dropdown_show`)
    }

    setDropdown() {
        document.getElementById(this.textFieldId).addEventListener('click',
            {
                handleEvent: this.toggleDropdown,
                dropdownId: this.dropdownId
            })
    }

    setHideDropdownWhenClickOut(e) {
        const dropdown = $(`#${this.dropdownId}`);
        if (dropdown.has(e.target).length === 0 && this.textFieldId !== e.target.id && dropdown.hasClass('dropdown_show')){
            dropdown.removeClass('dropdown_show');
        }
    }

}

export default Dropdown