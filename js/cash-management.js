//function for calling input value and converting them to float
function parsingInput(id) {
    let expenses = document.getElementById(id);
    const expensesValue = expenses.value;
    if (isNaN(expensesValue)) {
        expenses.value = 'please input number', id;

        //if any error occur the input field will be empty after click
        document.getElementById(id).addEventListener('click', function () {
            const inputFields = document.getElementById(id);
            inputFields.value = '';
        })
    }
    else {
        const expensesValueParse = parseFloat(expensesValue);
        return expensesValueParse;
    }
}

// function for converting text to float
function textToParseInt(id) {
    const textId = document.getElementById(id)
    const textInnerText = textId.innerText;
    const innerTextToParse = parseFloat(textInnerText);
    return innerTextToParse;
}

//calculate button event
document.getElementById('calculate-button').addEventListener('click', function () {
    const incomeInput = parsingInput('income-input-field');
    const foodExpensesInput = parsingInput('food-input-field');
    const rentExpensesInput = parsingInput('rent-input-field');
    const clothsExpensesInput = parsingInput('cloths-input-field');
    const totalExpenses = foodExpensesInput + rentExpensesInput + clothsExpensesInput;
    const expensesTotal = document.getElementById('total-expenses');
    const balance = document.getElementById('balance');

    //handeling total expenses section error
    if (isNaN(totalExpenses)) {
        expensesTotal.innerText = 'Please use numbers inside inputs';
        foodExpensesInput = '';
    }
    else {
        expensesTotal.innerText = totalExpenses;
    }

    //handeling balance section error
    const balanceafterExpenses = incomeInput - totalExpenses;
    if (isNaN(balanceafterExpenses) == true || incomeInput < totalExpenses) {
        balance.innerText = 'LImit Over or wrong input';
    }
    else {
        balance.innerText = balanceafterExpenses;
    }
})

//save button event
document.getElementById('save-button').addEventListener('click', function () {
    let saveInputField = parsingInput('save-input-field');
    const updateBalance = textToParseInt('balance');
    const savings = updateBalance * (saveInputField / 100)
    const savingAmount = document.getElementById('saving-amount');

    if (savings > updateBalance) {
        savingAmount.innerText = 'you cant save more then you have';
        const inputField = document.getElementById('save-input-field');
        inputField.value = '';
    }
    else {
        savingAmount.innerText = savings;
        const remainingBalance = document.getElementById('remaining-balance');
        remainingBalance.innerText = updateBalance - savings;
    }
})