const YEAR = 1985;

function run() {
    const _getLineOf = (n) => {
        let squareRoot = Math.sqrt(n);

        if (squareRoot % 1 !== 0) {
            squareRoot += 1;
        }

        return parseInt(squareRoot);
    }

    const lineOfYear = _getLineOf(YEAR);

    console.log(`The year (${YEAR}) is located at line: ${lineOfYear}`);
}

run();
