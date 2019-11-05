const fetch = require("node-fetch"); // Import 'node-fetch'

const API_URL =
  "https://api-nextgen.ciandt.com/api/challenge/nextgen/question-4";
const JWT_TOKEN =
  "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkYzAxOTA3NTY2NTUzMGRmZDViNzMxMSIsImlhdCI6MTU3MjkyMDMzMywiZXhwIjoxNTczMDA2NzMzfQ.fEpHPAefeeCG5QpYiWvvzny1hNTpuC1NY0ytZ2Eh64Y";

function run() {
  fetch(API_URL, { headers: { Authorization: JWT_TOKEN } })
    .then(response => response.json())
    .then(json => {
      const matrix = json.matriz;
      const matrixRows = matrix.length;
      const matrixColumns = matrix[0].length;

      // console.log("Original matrix:");
      // console.log(matrix);
      // console.log("\n");

      const primeNumbers = [];

      for (let row = 0; row < matrixRows; row++) {
        for (let column = 0; column < matrixColumns; column++) {
          const number = matrix[row][column];

          if (isPrime(number)) {
            const index = row * matrixRows + column;

            primeNumbers.push(number + index);
          }
        }
      }

      return primeNumbers;
    })
    .then(primes => {
      const matrix = [];
      const matrixRows = 4;
      const matrixColumns = 4;

      for (let i = 0; i < matrixRows; i++) {
        matrix.push([]);
      }

      let currentRow = 0;
      let currentColumn = 0;

      for (primeIndex in primes) {
        const number = primes[primeIndex];

        if (currentColumn >= matrixColumns) {
          currentColumn = 0;

          if (currentRow < matrixRows) currentRow++;
        }

        matrix[currentRow][currentColumn] = number;

        currentColumn++;
      }

      console.log("New matrix:");
      console.log(matrix);
    });

  function isPrime(number) {
    for (let i = 2, s = Math.sqrt(number); i <= s; i++)
      if (number % i === 0) return false;

    return number > 1;
  }
}

run();
