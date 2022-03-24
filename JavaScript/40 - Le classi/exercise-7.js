class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get firstName() {
    return this.first;
  }
  set firstName(name) {
    this.first = name;
  }
  get lastName() {
    return this.last;
  }
  set lastName(name) {
    this.last = name;
  }
  get personAge() {
    return this.age;
  }
  set personAge(age) {
    this.age = age;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName} ${this.age}`;
  }
}

const person = new Person("Mario", "Rossi", 25);
console.log(person.fullName);

person.firstName = "Maria";
person.lastName = "Verdi";
console.log(person.fullName);
