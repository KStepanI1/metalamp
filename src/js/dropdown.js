function clearValues() {
    const inputs = document.querySelectorAll('.dropdown-item__value');
    const textField = document.querySelector(`#${this.textFieldId}`)
    inputs.forEach(input => {
        input.value = 0;
    })

    textField.value = ''
}


function createSummaryStr(amount, declensionOfNouns = []) {
    let amountStr = amount.toString();


    if (amount !== 0) {
        const amountStr_lastNum = amountStr[amountStr.length - 1];

        if (amountStr_lastNum === '1' && amountStr[amountStr.length - 2] !== '1') {
            amountStr += ' ' + declensionOfNouns[0];
        } else if (+amountStr_lastNum >= 2 && +amountStr_lastNum <= 4 && amountStr[amountStr.length - 2] !== '1') {
            amountStr += ' ' + declensionOfNouns[1];
        } else {
            amountStr += ' ' + declensionOfNouns[2];
        }
        return amountStr;
    } else {
        return '';
    }
}


function countGuests(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    const dropdownValues = dropdown.querySelectorAll('.dropdown-item__value')

    let guestsAmount = +(dropdownValues[0].value) + +(dropdownValues[1].value);
    let babiesAmount = +(dropdownValues[2].value);

    const guestsAmountStr = createSummaryStr(guestsAmount, ['гость', 'гостя', 'гостей']);
    const babiesAmountStr = createSummaryStr(babiesAmount, ['младенец', 'младенца', 'младенцев']);

    return babiesAmountStr === '' ? guestsAmountStr : guestsAmountStr + ', ' + babiesAmountStr
}


function countRoomAmenities(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    const dropdownValues = dropdown.querySelectorAll('.dropdown-item__value');

    const bedroomsAmount = +dropdownValues[0].value;
    const bedsAmount = +dropdownValues[1].value;
    const bathroomsAmount = +dropdownValues[2].value;

    let bedroomsAmountStr = createSummaryStr(bedroomsAmount, ['спальня', 'спальни', 'спален']);
    let bedsAmountStr = createSummaryStr(bedsAmount, ['кровать', 'кровати', 'кроватей']);
    let bathroomsAmountStr = createSummaryStr(bathroomsAmount, ['ванная', 'ванны', 'ванных']);

    if (bedroomsAmountStr !== '' && (bedsAmountStr !== '' || bathroomsAmountStr !== '')) {
        bedroomsAmountStr += ', ';
    }
    if (bedsAmountStr !== '' && bathroomsAmountStr !== '') {
        bedsAmountStr += ', ';
    }

    return bedroomsAmountStr + bedsAmountStr + bathroomsAmountStr
}


function submitValues() {
    const dropdown = document.getElementById(this.dropdownId);
    const textField = document.getElementById(this.textFieldId);

    if (this.dropdownType === 'guests') {
        textField.value = countGuests(this.dropdownId)
    } else if (this.dropdownType === 'room-amenities') {
        textField.value = countRoomAmenities(this.dropdownId)
    }

    dropdown.classList.toggle('dropdown_show')
}


function observeInputsValues(inputElement) {
    const currentElementButtons = inputElement.parentElement.querySelectorAll('.dropdown-item__button')

    currentElementButtons.forEach(currentButton => {
        if (currentButton.dataset.direction === 'minus') {
            if (+inputElement.value === 0) {
                currentButton.classList.add('dropdown-item__button_inactive')
            } else {
                currentButton.classList.remove('dropdown-item__button_inactive')
            }
        }
    })
}


function onActionDropdown(dropdownId, textFieldId, dropdownType) {
    const dropdown = document.getElementById(dropdownId)
    const buttons = dropdown.querySelectorAll('.dropdown-item__button')
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const direction = this.dataset.direction;
            const input = this.parentElement.querySelector('.dropdown-item__value');
            const currentValue = +input.value;
            let newValue;

            if (direction === 'plus') {
                newValue = currentValue + 1
            } else {
                newValue = currentValue - 1 > 0 ? currentValue - 1 : 0
            }

            input.value = newValue

            observeInputsValues(input)
        })
    })

    let clearButton = dropdown.querySelector('.dropdown__button_clear')
    let submitButton = dropdown.querySelector('.dropdown__button_submit')

    clearButton.addEventListener('click',
        {
            handleEvent: clearValues,
            dropdownId: dropdownId,
            textFieldId: textFieldId
        })
    submitButton.addEventListener('click', {
        handleEvent: submitValues,
        dropdownId: dropdownId,
        textFieldId: textFieldId,
        dropdownType: dropdownType
    })
}

export default onActionDropdown