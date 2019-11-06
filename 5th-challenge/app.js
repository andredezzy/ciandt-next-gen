function run() {
  const _permutate = elements => {
    let ret = [];

    for (let i = 0; i < elements.length; i = i + 1) {
      let rest = _permutate(elements.slice(0, i).concat(elements.slice(i + 1)));

      if (!rest.length) {
        ret.push([elements[i]]);
      } else {
        for (let j = 0; j < rest.length; j = j + 1) {
          ret.push([elements[i]].concat(rest[j]));
        }
      }
    }

    return ret;
  };

  const _merge = elements => {
    let merged = "";

    for (elementIndex in elements) {
      const element = elements[elementIndex];

      merged += element;
    }

    return merged;
  };

  const algarisms = [1, 4, 6, 8];
  const permutations = _permutate(algarisms);

  let sumOfPermutations = 0;

  for (permutationIndex in permutations) {
    const permutation = permutations[permutationIndex];

    sumOfPermutations += parseInt(_merge(permutation));
  }

  console.log(`The sum of all permutations is: ${sumOfPermutations}`);
}

run();
