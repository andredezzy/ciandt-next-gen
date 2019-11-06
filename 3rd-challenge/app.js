const START_AT = 1;
const UNTIL = 1958;

function run() {
  const _getNumberSequenceString = (startAt, until) => {
    let str = "";

    for (let i = startAt; i <= until; i++) {
      str += i;
    }

    return str;
  };

  const _findBiggestString = arr => {
    return arr.reduce((total, current) => {
      if (current.length > total.length) total = current;
      return total;
    }, "");
  };

  const sequenceString = _getNumberSequenceString(START_AT, UNTIL);
  const biggestSequence = _findBiggestString(
    sequenceString.match(/([0-9])\1+/g)
  );

  console.log("The biggest sequence is:", biggestSequence);
  console.log({
    number: biggestSequence[0],
    sequenceSize: biggestSequence.length
  });
}

run();
