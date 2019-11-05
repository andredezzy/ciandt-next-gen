const LIMIT = 45;

function run() {
  // The number 1985 is on the line 45

  var printCount = 1;
  var count = 1;

  for (let i = 0; i < LIMIT; i++) {
    var numbers = "";

    for (let j = 0; j < printCount; j++) {
      numbers += `${count++} `;
    }

    printCount += 2;

    console.log(`Line ${i + 1} -> ${numbers}`);
  }
}

run();
