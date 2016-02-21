describe("Fizzbuzz", function(){
  var number;
  var fizzbuzz = new Fizzbuzz()

  it("should return fizz when 3", function() {

    expect(fizzbuzz.play(3)).toEqual("Fizz");

  })

  it("should return buzz when 5", function() {

    expect(fizzbuzz.play(5)).toEqual("Buzz");

  })

  it("should return fizzbuzz when 15", function() {

    expect(fizzbuzz.play(15)).toEqual("Fizzbuzz");

  })

  it("should return the number when passed a number not divisible by 3, 5 or 15", function() {

    expect(fizzbuzz.play(11)).toEqual(11);

  })
})
