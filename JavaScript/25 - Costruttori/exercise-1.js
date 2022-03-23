const person = {
  get firstName() {
    return this.name;
  },
  set firstName(second) {
    this.name = second;
  },
  get lastName() {
    return this.last;
  },
  set lastName(second) {
    this.last = second;
  },
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

let john = Object.create(person);
let simon = Object.create(person);

john.firstName = "John";
john.lastName = "Doe";
simon.firstName = "Simon";
simon.lastName = "Collins";

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins
