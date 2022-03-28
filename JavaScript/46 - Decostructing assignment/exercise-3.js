function isAdult(person) {
  return person.age >= 18;
}

const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

let { age: a } = person;

console.log(isAdult(person));
