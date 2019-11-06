const UNTIL = 10000;

function run() {
  const _getProductOfDigits = n => {
    const numString = n.toString();

    let product = 1;

    for (let i = 0; i < numString.length; i++) {
      product *= numString.charAt(i);
    }

    return product;
  };

  const algarismsProductEqualsTo100 = [];

  for (let i = 0; i < UNTIL; i++) {
    if (_getProductOfDigits(i) === 100) algarismsProductEqualsTo100.push(i);
  }

  console.log(
    "The following numbers has the product of his digits equals to 100:"
  );
  console.log(algarismsProductEqualsTo100);
}

run();
