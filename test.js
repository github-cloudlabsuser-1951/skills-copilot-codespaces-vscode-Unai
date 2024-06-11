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
          console.log('No se puede dividir por cero');
          return;
        }
        break;
      default:
        console.log('Operación no reconocida');
        return;
    }

    console.log(`El resultado es: ${result}`);
  }

  readline.question('Ingrese la primera cifra: ', (num1) => {
    readline.question('Ingrese la operación (+, -, *, /): ', (operation) => {
      readline.question('Ingrese la segunda cifra: ', (num2) => {
        calculator(num1, operation, num2);
        readline.close();
      });
    });
  });
  
