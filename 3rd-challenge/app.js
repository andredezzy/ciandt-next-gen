const START_AT = 1;
const LIMIT = 1958;

function run() {
  var numbersPrint = "";

  for (let i = START_AT; i <= LIMIT; i++) {
    numbersPrint += i;
  }

  var numbers = {};
  var biggestNumberSequence = {
    number: -1,
    sequenceCount: -1
  };

  for (let algarism = 0; algarism <= 9; algarism++) {
    const number = {
      sequences: [],
      biggestSequence: 0
    };

    var currentSequence = "";
    var sequenceCount = 0;

    for (let i = 0; i < numbersPrint.length; i++) {
      const numberChar = numbersPrint.charAt(i);

      if (numberChar === algarism.toString()) {
        currentSequence += numberChar;

        sequenceCount++;
      } else {
        if (currentSequence.length > 0) number.sequences.push(currentSequence);
        currentSequence = "";

        if (sequenceCount > number.biggestSequence)
          number.biggestSequence = sequenceCount;

        sequenceCount = 0;
      }
    }

    numbers[algarism] = number;

    if (number.biggestSequence > biggestNumberSequence.sequenceCount) {
      biggestNumberSequence = {
        number: algarism,
        sequenceCount: number.biggestSequence
      };
    }
  }

  // console.log("All the numbers sequences:");
  // console.log(numbers);
  // console.log("\n");

  console.log("The biggest sequence is:");
  console.log(biggestNumberSequence);
}

run();
