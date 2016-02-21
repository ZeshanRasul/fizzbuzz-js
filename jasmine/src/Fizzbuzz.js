function Fizzbuzz(number) {


}

Fizzbuzz.prototype.play = function(number) {
  if (number % 15 == 0) {
    return ("Fizzbuzz")
  } else if (number % 5 == 0) {
      return ("Buzz")
  } else if (number % 3 == 0) {
    return ("Fizz")
  } else {
    return (number)
  }
}

var fizzbuzz = new Fizzbuzz();

for (x=1; x <= 100; x++) {
  console.log(fizzbuzz.play(x))
}
