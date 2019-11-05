function run() {
  // 1/x + 1/(x+5) = 1/6
  // 6(x+5) + 6x = x(x+5)
  // 6x + 30 + 6x = x^2 + 5x

  // 12x + 30 - x^2 - 5x = 0
  // -x^2 + 7x + 30 = 0

  // x^2 - 7x - 30 = 0

  const a = 1;
  const b = -7;
  const c = -30;

  // delta = -7^2 - 4*1*(-30) = 49 + 120 = 169
  const delta = Math.pow(b, 2) - 4 * a * c;

  // x = (7 +- 13)/2
  // x¹ = 10

  // x¹ = ((b * -1) + Math.sqrt(delta)) / (2 * a);
  // x² = ((b * -1) - Math.sqrt(delta)) / (2 * a); (we won't use it)
  const firstTap = (b * -1 + Math.sqrt(delta)) / (2 * a);
  const secondTap = firstTap + 5;

  console.log(
    `The remaining tap needs, lonely, ${firstTap} hours to fill fully the pool.`
  );
  console.log(
    `The another, that is broken, needs, lonely, ${secondTap} hours to fill fully the pool.`
  );
}

run();
