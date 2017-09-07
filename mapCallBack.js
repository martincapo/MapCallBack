
function map(array, callback) {
  let result = [];
  array.forEach(function(currentValue) {
    result.push(callback(currentValue) );
  })
  return result;
}

// Testing
var words = ["ground", "control", "to", "major", "tom"];

var x = map(words, function(word) {
  return word.length;
});

var y = map(words, function(word) {
  return word.toUpperCase();
});

var z = map(words, function(word) {
  return word.split('').reverse().join('');
});

console.log(x);
console.log(y);
console.log(z);
