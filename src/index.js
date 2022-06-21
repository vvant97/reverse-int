module.exports = function reverse (n) {
  
  let numberToString = String(n);
  let string = '';

  for (let i = numberToString.length - 1; i >= 0; i--) {
    string += numberToString[i];
  }

  if (n < 0) {
    string = string.replace(string[string.length - 1], '');
  }
  
  return Number(string);

};