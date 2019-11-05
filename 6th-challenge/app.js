const YEAR = 1985;

function run() {
    const _getLineOf = (n) => {
        let squareRoot = Math.sqrt(n);

        if (!isInt(squareRoot)) {
            squareRoot += 1;
        }

        return parseInt(squareRoot);
    }

    const lineOfYear = _getLineOf(YEAR);

    console.log(`The year (${YEAR}) is located at line: ${lineOfYear}`);
}

function isInt(value) {
    return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value))
}

run();
