function clearValues() {
    const inputs = document.querySelectorAll('.dropdown-item__value');
    const textField = document.querySelector('#guests-field')
    console.log(inputs)
    inputs.forEach(input => {
        input.value = 0;
    })

    textField.value = ''
}


function submitValues() {
    const dropdown = document.querySelector('.dropdown')
    const inputs = document.querySelectorAll('.dropdown-item__value');
    const textField = document.querySelector('#guests-field')
    let guestsCount = 0;
    inputs.forEach(input => {
        guestsCount += +input.value
    })

    if (guestsCount !== 0) {
        let guestsCountStr = guestsCount.toString()
        let lastNumPosition = guestsCountStr.length - 1

        if (guestsCountStr[lastNumPosition] === '1') {
            guestsCountStr += ' гость'
        } else if (guestsCountStr[lastNumPosition] >= '2' && guestsCountStr[lastNumPosition] <= '4') {
            guestsCountStr += ' гостя'
        } else {
            guestsCountStr += ' гостей'
        }

        textField.value = guestsCountStr
        dropdown.classList.toggle('dropdown_show')
    }
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


function onActionDropdown() {
    const buttons = document.querySelectorAll('.dropdown-item__button')

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

    let clearButton = document.querySelector('.dropdown__button_clear')
    let submitButton = document.querySelector('.dropdown__button_submit')

    clearButton.addEventListener('click', clearValues)
    submitButton.addEventListener('click', submitValues)
}

export default onActionDropdown