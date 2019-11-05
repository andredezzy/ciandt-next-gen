const START_AT = 1;
const LIMIT = 1958;

function run() {
    let numberSequenceString = "";

    for (let i = START_AT; i <= LIMIT; i++) {
        numberSequenceString += i;
    }

    const findBiggestString = (arr) => {
        return arr.reduce((total, current) => {
            if (current.length > total.length) total = current;

            return total;
        }, "")
    }

    const biggestSequence = findBiggestString(numberSequenceString.match(/([0-9])\1+/g));

    console.log("The biggest sequence is:", biggestSequence);
    console.log({number: biggestSequence[0], sequenceSize: biggestSequence.length})
}

run();
