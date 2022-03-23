const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;
person2.firstName = `simon`;

// Modifica la proprietà "firstName" di person2 in "Simon"

// Gli oggetti in Javascript sono molto flessibili, in questo caso quello che viene fatto è passare il riferimento alla locazione di memoria. Quindi sia la variabile person1 che la variabile person2, punteranno allo stesso spazio di memoria.
console.log(person1);
console.log(person2);
