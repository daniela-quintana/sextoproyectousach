// Secuencia de Fibonacci utilizando un ciclo while
const fibonacciWhile = (max) => {
  const fibArray = [0, 1];
  let i = 2;

  while (fibArray[i - 1] + fibArray[i - 2] <= max) {
    fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
    i++;
  }
  return fibArray;
};

console.log("a. Secuencia de Fibonacci entre los números 0 y 1000:", fibonacciWhile(1000));

const fibArray = fibonacciWhile(1000);
const pares = fibArray.filter((num) => num % 2 === 0);
console.log("b. Números pares entre 0 y 1000 de la secuencia de Fibonacci:", pares);

const impares = fibArray.filter((num) => num % 2 !== 0);
console.log("c. Números impares entre 0 y 1000 de la secuencia de Fibonacci:", impares);
