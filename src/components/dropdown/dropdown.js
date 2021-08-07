import "./dropdown.scss"
import addDropdownListeners from "../../js/dropdown";

class Dropdown {

    constructor(textFieldId, dropdownId, dropdownType) {
        this.textFieldId = textFieldId;
        this.dropdownId = dropdownId;
        this.dropdownType = dropdownType;
        this.dropdownBlock = document.getElementById(dropdownId);
        this.textFieldBlock = document.getElementById(textFieldId);
        addDropdownListeners(dropdownId, textFieldId, dropdownType);
        this.setSwitch();
    }

    toggle() {
        this.dropdownBlock.classList.toggle(`dropdown_opened`)
    }

    setSwitch() {
        this.textFieldBlock.addEventListener('click',
            {
                handleEvent: this.toggle,
                dropdownBlock: this.dropdownBlock
            })
    }

    hideIfClickOut(e) {
        const dropdown = $(`#${this.dropdownId}`);
        if (dropdown.has(e.target).length === 0 && this.textFieldId !== e.target.id && dropdown.hasClass('dropdown_opened')){
            dropdown.removeClass('dropdown_opened');
        }
    }

}

export default Dropdown