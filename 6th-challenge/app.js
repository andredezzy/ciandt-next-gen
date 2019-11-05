const YEAR = 1985;

function run() {
    // The number 1985 is on the line 45
    // The line 45 has 88 numbers, starts at 1937 until 2025

    const _printSequences = () => {
        const LIMIT = 45;

        let printCount = 1;
        let count = 1;

        for (let i = 0; i < LIMIT; i++) {
            let numbers = "";

            for (let j = 0; j < printCount; j++) {
                numbers += `${count++} `;
            }

            printCount += 2;

            console.log(`Line ${i + 1} -> ${numbers}`);
        }
    };

    const _getLineOf = (n) => {
        let squareRoot = Math.sqrt(n);

        if (!isInt(squareRoot)) {
            squareRoot += 1;
        }

        return parseInt(squareRoot);
    }

    const lineOfYear = _getLineOf(YEAR);

    console.log(`The line that the year (${YEAR}) is into, is:`)
    console.log(lineOfYear);
}

function isInt(value) {
    return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value))
}

run();
