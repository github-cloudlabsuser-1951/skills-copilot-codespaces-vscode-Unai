const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function calculate(num1, operation, num2) {
    let result;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (operation) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          throw 'No se puede dividir por cero';
        }
        break;
      default:
        throw  'Operación no reconocida';
    }
    return  result;
  }

  module.exports = calculate;
  
