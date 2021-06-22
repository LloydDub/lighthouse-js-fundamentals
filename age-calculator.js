function ageCalculator (name, yearOfBirth, currentYear) {
  let age = currentYear - yearOfBirth;
  let msg = name + " is " + age + " years old."
  return msg
}
console.log(ageCalculator("Ferdinand", 1988, 2015));

