// function sum(a, b, c, d, e, f, g, h, i) {
//   return a + b + c + d + e + f + g + h + i;
// }

// console.log(sum(1, 3, 4, 5, 6, 7, 8, 9, 0, 5));

function sum(...params) {
  const sumNumbers = params.reduce((acum, val) => {
    return acum + val
  });
  return sumNumbers;
}

console.log(sum(1, 3, 4, 5, 6, 7, 8, 9, 0, 5));



