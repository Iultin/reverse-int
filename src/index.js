module.exports = function reverse (n) {
  let number_sign = 1;
  if (n < 0) {
    number_sign = -1;
    n *= -1;
  }
  let string_n = n.toString();
  let result = '';
  for (let i = string_n.length - 1; i >= 0; i--) {
    result += string_n[i];
  }
  return +result
}
