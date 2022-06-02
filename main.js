const input = require('sync-input');
let action;
let currencies = ["USD", "JPY", "EUR", "RUB", "GBP"]
let usd = 1;
let jpy = 113.5;
let eur = 0.89;
let rub = 74.36;
let gbp = 0.75;
let converted;
let amount;
let convertTo;
let convertFrom;
let lol;
let fromCurrency;
let upper;

function convertUsd() {
    upper = convertFrom.toUpperCase();
    converted = fromCurrency * usd;
    lol = converted.toFixed(4)
    console.log(`Result: ${amount} ${upper} equals ${lol} USD`)
}

function convertEur() {
    upper = convertFrom.toUpperCase();
    converted = fromCurrency * eur
    lol = converted.toFixed(4)
    console.log(`Result: ${amount} ${upper} equals ${lol} EUR`);
}

function convertJpy() {
    upper = convertFrom.toUpperCase();
    converted = fromCurrency * jpy
    lol = converted.toFixed(4)
    console.log(`Result: ${amount} ${upper} equals ${lol} JPY`);
}

function convertRub() {
    upper = convertFrom.toUpperCase();
    converted = fromCurrency * rub
    lol = converted.toFixed(4)
    console.log(`Result: ${amount} ${upper} equals ${lol} RUB`);
}

function convertGbp() {
    upper = convertFrom.toUpperCase();
    converted = fromCurrency * gbp
    lol = converted.toFixed(4)
    console.log(`Result: ${amount} ${upper} equals ${lol} GBP`);
}

function fromEur() {
    switch (convertFrom) {
        case 'EUR':
            fromCurrency = amount / eur;
            break;
        case 'JPY':
            fromCurrency = amount / jpy;
            break;
        case 'RUB':
            fromCurrency = amount / rub;
            break;
        case 'GBP':
            fromCurrency = amount / gbp;
            break;
        case 'USD':
            fromCurrency = amount / usd;
            break;
    }
}
function toDo() {
    action = input(`What do you want to do?
1-Convert currencies 2-Exit program
`); switch (action) {
        case '1':
            main();
            break;
        case '2':
            console.log(`Have a nice day!`);
            break;
        default: console.log(`Unknown input`);
        main();
    }

}
function welcome() {
    console.log(`Welcome to Currency Converter!
1 USD equals  1 USD
1 USD equals  113.5 JPY
1 USD equals  0.89 EUR
1 USD equals  74.36 RUB
1 USD equals  0.75 GBP`);
toDo()
}

welcome()
function main() {
    convertFrom = input(`What do you want to convert?
From:`).toUpperCase();
switch (convertFrom) {
    case currencies[0]:
    case currencies[1]:
    case currencies[2]:
    case currencies[3]:
    case currencies[4]:
        convertTo = input("To:").toUpperCase();
        break;
    default:
        console.log(`Unknown currency`);
        toDo();
}

switch (convertTo) {
    case currencies[0]:
        amount = input("Amount:");
        if (amount < 1) {
            console.log(`The amount can not be less than 1`);
            toDo();
            break;
        } if (isNaN(amount)) {
            console.log(`The amount has to be a number`);
            toDo();
            break;
    }
        fromEur();
        convertUsd();
        toDo();
        break;
    case currencies[1]:
        amount = input("Amount:");
        if (amount < 1) {
            console.log(`The amount can not be less than 1`);
            toDo();
            break;
        } if (isNaN(amount)) {
        console.log(`The amount has to be a number`);
        toDo();
        break;
    }
        fromEur();
        convertJpy();
        toDo();
        break;
    case currencies[2]:
        amount = input("Amount:");
        if (amount < 1) {
            console.log(`The amount can not be less than 1`);
            toDo();
            break;
        } if (isNaN(amount)) {
        console.log(`The amount has to be a number`);
        toDo();
        break;
    }
        fromEur();
        convertEur();
        toDo();
        break;
    case currencies[3]:
        amount = input("Amount:");
        if (amount < 1) {
            console.log(`The amount can not be less than 1`);
            toDo();
            break;
        } if (isNaN(amount)) {
        console.log(`The amount has to be a number`);
        toDo();
        break;
    }
        fromEur();
        convertRub();
        toDo();
        break;
    case currencies[4]:
        amount = input("Amount:");
        if (amount < 1) {
            console.log(`The amount can not be less than 1`);
            toDo();
            break;
        } if (isNaN(amount)) {
        console.log(`The amount has to be a number`);
        toDo();
        break;
    }
        fromEur();
        convertGbp();
        toDo();
        break;
    default:
        console.log(`Unknown currency`);
        toDo();
}
}


