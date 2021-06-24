'use strict';

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b, 2) - (4 * a * c);
  if (discriminant > 0) {
    let firsArithmeticRoot = ((-1 * b) + Math.sqrt(discriminant)) / (2 * a); 
    arr.push(firsArithmeticRoot);
    let secondArithmeticRoot = ((-1 * b) - Math.sqrt(discriminant)) / (2 * a); 
    arr.push(secondArithmeticRoot);
  }
  else if (discriminant === 0) {
    let singleArithmeticRoot = (-1 * b) / (2 * a);
    arr.push(singleArithmeticRoot);
  }
  return arr; 
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  // validate percent param
  let numberPercent = convert(percent);
  if (!validate(numberPercent)) {
    let message = `Параметр \"Процентная ставка\" содержит неправильное значение \"${percent}\"`;
    return message;
  }
  percent = numberPercent;
  // validate contribution param
  let numberContribution = convert(contribution);
  if (!validate(numberContribution)) {
    let message = `Параметр \"Начальный взнос\" содержит неправильное значение \"${contribution}\"`;
    return message;
  }
  contribution = numberContribution;
  // validate amount param
  let numberAmount = convert(amount);
  if (!validate(numberAmount)) {
    let message = `Параметр \"Общая стоимость\" содержит неправильное значение \"${amount}\"`;
    return message;
  }
  amount = numberAmount;

  // calculations debt 
  let totalDebt = amount - contribution;
  // calculations count months  
  let todayDate = new Date();
  let diffTime = Math.abs(date - todayDate);
  let countMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 31));
  // calculations payment
  let percentPart = (percent / 100) / 12;
  let payment = totalDebt * (percentPart + percentPart / (Math.pow(1 + percentPart, countMonths) - 1));
  // calculations total amount
  let totalAmount = payment * countMonths;
  totalAmount = Number(totalAmount.toFixed(2));
  return totalAmount;
}

function convert(number) {
  if(typeof number === 'string') {
    number = Number(number);
  }
  return number;
}

function validate(number) {
  let result = true;
  if(typeof number !== 'number') {
    result = false;
  }
  if(isNaN(number)) {
    result = false;
  }
  return result;
}