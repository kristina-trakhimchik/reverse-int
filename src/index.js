module.exports = function reverse(n) {
  let ar = n.toString();

  let result = [];
  for (let i = ar.length - 1; i >= 0; i--) {
    result.push(ar[i]);
  }
  return parseInt(result.join(''));
}
