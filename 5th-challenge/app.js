function run() {
  const algarisms = [1, 4, 6, 8];
  const permutations = permutate(algarisms);

  var sumOfPermutations = 0;

  for (permutationIndex in permutations) {
    const permutation = permutations[permutationIndex];

    sumOfPermutations += parseInt(merge(permutation));
  }

  console.log(`The sum of all permutations is: ${sumOfPermutations}`);

  function merge(elements) {
    var merged = "";

    for (elementIndex in elements) {
      const element = elements[elementIndex];

      merged += element;
    }

    return merged;
  }

  function permutate(elements) {
    let ret = [];

    for (let i = 0; i < elements.length; i = i + 1) {
      let rest = permutate(elements.slice(0, i).concat(elements.slice(i + 1)));

      if (!rest.length) {
        ret.push([elements[i]]);
      } else {
        for (let j = 0; j < rest.length; j = j + 1) {
          ret.push([elements[i]].concat(rest[j]));
        }
      }
    }

    return ret;
  }
}

run();
