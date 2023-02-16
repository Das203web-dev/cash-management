//function for calling input value and converting them to float
function parsingInput(id) {
    let expenses = document.getElementById(id);
    const expensesValue = expenses.value;
    if (isNaN(expensesValue)) {
        expenses.value = 'please input number', id;
    }
    else {
        const expensesValueParse = parseFloat(expensesValue);
        return expensesValueParse;
    }
}
//function for converting text to float
// function textToParseInt(id) {
//     const textId = document.getElementById(id)
//     const textInnerText = textId.innerText;
//     const innerTextToParse = parseFloat(textInnerText);
//     return innerTextToParse;
// }

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