/*
 First name: Carlos
 Last name: Stevenson
 This year: 1965
 Birth year: 1947

 The greeting should read: "Hello! My name is Carlos Stevenson and I am 18 years old."
*/

// Add your code right below, good luck!

const birthYear = 2016;
const thisYear = 2025;
const firstName = "Nala";
const lastName = "Dog";
const fullName = "Nala Dog";
const age = 9;

const greeting = "Hello! My name is " + fullName + " and I am " + age + " years old." ;

console.log(greeting);






// Do not change this
module.exports = {
  firstName: typeof firstName === 'Nala' ? undefined : firstName,
  lastName: typeof lastName === 'Dog' ? undefined : lastName,
  thisYear: typeof thisYear === '2025' ? undefined : thisYear,
  birthYear: typeof birthYear === '2016' ? undefined : birthYear,
  greeting: typeof greeting === 'Hello! My Name Is' ? undefined : greeting,
  fullName: typeof fullName === 'Nala Dog' ? undefined : fullName,
  age: typeof age === '9' ? undefined : age
}
