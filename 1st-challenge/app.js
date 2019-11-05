const START_AT = 1;
const LIMIT = 1985;

function run() {
  var pairSum = 0;
  var oddSum = 0;

  for (let i = START_AT; i <= LIMIT; i++) {
    if (i % 2 == 0) {
      pairSum += i;
    } else {
      oddSum += i;
    }
  }

  const difference = oddSum - pairSum;

  console.log(
    `The difference between the sum of odd numbers and sum of pair numbers of ${START_AT} until ${LIMIT}, is: ${difference}.`
  );
}

run();
