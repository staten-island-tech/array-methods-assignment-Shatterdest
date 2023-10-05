
function listPeople(people) {
  people.forEach(person => console.log(`Name: ${person.name}, Age: ${person.age}, Favorite Numbers: ${person.favoriteNumbers}`));
}

function listFavNum(people) {
  const favNums =[];
  people.forEach(person => person.favoriteNumbers.forEach(num => console.log(num)));
}

function init() {
  const people = [
    { name: "John Doe", age: 32, favoriteNumbers: [1, 2, 3, 4, 5] },
    { name: "Jane Doe", age: 31, favoriteNumbers: [11, 22, 33, 44, 55] },
    { name: "Jim Doe", age: 8, favoriteNumbers: [111, 222, 333, 444, 555] },
    {
      name: "Josh Doe",
      age: 6,
      favoriteNumbers: [1111, 2222, 3333, 4444, 5555],
    },
    {
      name: "Jill Doe",
      age: 4,
      favoriteNumbers: [11111, 22222, 33333, 44444, 55555],
    },
  ];
  console.log(`Here are the list of people:${JSON.stringify(people)}`)
  listPeople(people);
  listFavNum(people);
}

init();