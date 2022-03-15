function getKeys(obj) {
   const all = []; 
    for(let keys in obj) {
     all.push(keys)
  }return all;
}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(person);
console.log(keys);