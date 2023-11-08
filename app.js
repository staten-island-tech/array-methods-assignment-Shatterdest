function list(people) {
  people.forEach((person) => {
    console.log(`This person's name is ${person.name}.`);
    person.favoriteNumbers.forEach((number) => {
      console.log(`A number this person likes is ${number}.`);
    });
  });
}

function init() {
  const people = [
    { name: "John Doe", age: 32, favoriteNumbers: [1, 2, 3, 4, 5], adult: true },
    { name: "Jane Doe", age: 31, favoriteNumbers: [11, 22, 33, 44, 55], adult: true },
    { name: "Jim Doe", age: 8, favoriteNumbers: [111, 222, 333, 444, 555], adult: false },
    {
      name: "Josh Doe",
      age: 6,
      favoriteNumbers: [1111, 2222, 3333, 4444, 5555], adult: false
    },
    {
      name: "Jill Doe",
      age: 4,
      favoriteNumbers: [11111, 22222, 33333, 44444, 55555], adult: false
    },
  ];
  console.log(`Here are the list of people:${JSON.stringify(people)}`);
  list(people);
  console.log('Here are a list of adults:')
  
  console.log(people.filter((person) => person.adult))
}

init();
