function diagonalDifference(arr) {
  var length = arr.length;
  var indexDiag1 = 0;
  var indexDiag2 = length - 1;

  var diag1 = [];
  var diag2 = [];

  arr.forEach((list) => {
    diag1 = [...diag1, list[indexDiag1]];
    diag2 = [...diag2, list[indexDiag2]];

    indexDiag1++;
    indexDiag2--;
  });

  var sumDiag1 = diag1.reduce((a, b) => {
    return a + b;
  }, 0);

  var sumDiag2 = diag2.reduce((a, b) => {
    return a + b;
  }, 0);

  return Math.abs(sumDiag1 - sumDiag2);
}
