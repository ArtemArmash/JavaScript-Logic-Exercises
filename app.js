// 1.
let age1 = parseInt(prompt("Введіть ваш вік:"));

if (age1 >= 0 && age1 <= 12) {
    console.log("Ви дитина.");
} else if (age1 > 12 && age1 <= 18) {
    console.log("Ви підліток.");
} else if (age1 > 18 && age1 <= 60) {
    console.log("Ви дорослий.");
} else if (age1 > 60) {
    console.log("Ви пенсіонер.");
} else {
    console.log("Введено некоректний вік.");
}

// 2.
let num2 = parseInt(prompt("Введіть число від 0 до 9:"));
let symbol2;

switch (num2) {
    case 1:
        symbol2 = "!";
        break;
    case 2:
        symbol2 = "@";
        break;
    case 3:
        symbol2 = "#";
        break;
    case 4:
        symbol2 = "$";
        break;
    case 5:
        symbol2 = "%";
        break;
    case 6:
        symbol2 = "^";
        break;
    case 7:
        symbol2 = "&";
        break;
    case 8:
        symbol2 = "*";
        break;
    case 9:
        symbol2 = "(";
        break;
    case 0:
        symbol2 = ")";
        break;
    default:
        symbol2 = "Невірне число!";
}

console.log(`Спеціальний символ: ${symbol2}`);

// 3.
let number3 = prompt("Введіть тризначне число:");

if (number3.length === 3) {
    let digit1_3 = number3[0];
    let digit2_3 = number3[1];
    let digit3_3 = number3[2];

    if (digit1_3 === digit2_3 || digit1_3 === digit3_3 || digit2_3 === digit3_3) {
        console.log("У числі є однакові цифри.");
    } else {
        console.log("У числі немає однакових цифр.");
    }
} else {
    console.log("Введено не тризначне число.");
}

// 4.
let year4 = parseInt(prompt("Введіть рік:"));

if ((year4 % 400 === 0) || (year4 % 4 === 0 && year4 % 100 !== 0)) {
    console.log(`${year4} рік є високосним.`);
} else {
    console.log(`${year4} рік не є високосним.`);
}

// 5.
let number5 = prompt("Введіть п’ятизначне число:");

if (number5.length === 5) {
    if (number5 === number5.split('').reverse().join('')) {
        console.log("Число є паліндромом.");
    } else {
        console.log("Число не є паліндромом.");
    }
} else {
    console.log("Введено не п’ятизначне число.");
}

// 6.
const USD_TO_EUR_6 = 0.85;
const USD_TO_UAN_6 = 27.3;
const USD_TO_AZN_6 = 1.7;

let usdAmount6 = parseFloat(prompt("Введіть кількість USD:"));
let currency6 = prompt("В яку валюту ви хочете конвертувати: EUR, UAN, AZN?").toUpperCase();
let convertedAmount6;

switch (currency6) {
    case "EUR":
        convertedAmount6 = usdAmount6 * USD_TO_EUR_6;
        break;
    case "UAN":
        convertedAmount6 = usdAmount6 * USD_TO_UAN_6;
        break;
    case "AZN":
        convertedAmount6 = usdAmount6 * USD_TO_AZN_6;
        break;
    default:
        convertedAmount6 = "Невірна валюта!";
}

console.log(`Сума в ${currency6}: ${convertedAmount6.toFixed(2)}`);

// 7.
let purchaseAmount7 = parseFloat(prompt("Введіть суму покупки:"));
let discount7;

if (purchaseAmount7 >= 200 && purchaseAmount7 < 300) {
    discount7 = 0.03;
} else if (purchaseAmount7 >= 300 && purchaseAmount7 < 500) {
    discount7 = 0.05;
} else if (purchaseAmount7 >= 500) {
    discount7 = 0.07;
} else {
    discount7 = 0;
}

let finalAmount7 = purchaseAmount7 - (purchaseAmount7 * discount7);
console.log(`Сума до сплати зі знижкою: ${finalAmount7}`);
