const START_AT = 1;
const UNTIL = 1985;

function run() {
  let pairSum = 0;
  let oddSum = 0;

  for (let i = START_AT; i <= UNTIL; i++) {
    if (i % 2 == 0) {
      pairSum += i;
    } else {
      oddSum += i;
    }
  }

  const difference = oddSum - pairSum;

  console.log(
    `The difference between the sum of odd numbers and sum of pair numbers of ${START_AT} until ${UNTIL}, is: ${difference}.`
  );
}

run();
