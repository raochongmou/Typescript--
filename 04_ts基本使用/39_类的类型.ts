class Person {
  name: string = "curry";

  eating() {
    console.log('eating');
  }
}

const p1: Person = {
  name: 'james',
  eating() {
    console.log('p1 eating');
  }
}
p1.eating();

console.log(p1.name);

function printPerson(p: Person) {
  console.log(p.name);
}

printPerson(new Person());

export{}