const calculate = require('./calculator'); // Asegúrate de que este es el camino correcto a tu archivo

describe('calculate', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(calculate(1, '+', 2)).toBe(3);
  });

  test('subtracts 5 - 3 to equal 2', () => {
    expect(calculate(5, '-', 3)).toBe(2);
  });

  test('multiplies 4 * 2 to equal 8', () => {
    expect(calculate(4, '*', 2)).toBe(8);
  });

  test('divides 10 / 2 to equal 5', () => {
    expect(calculate(10, '/', 2)).toBe(5);
  });

  test('throws error when dividing by zero', () => {
    expect(() => calculate(10, '/', 0)).toThrow('No se puede dividir por cero');
  });

  test('throws error when operation is unrecognized', () => {
    expect(() => calculate(10, 'x', 2)).toThrow('Operación no reconocida');
  });
});