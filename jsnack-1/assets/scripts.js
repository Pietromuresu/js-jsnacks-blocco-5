const users = [
  {
    name: "Lucia",
    surname: "Magri",
    age: 23,
  },
  {
    name: "Marco",
    surname: "Biagi",
    age: 12,
  },
  {
    name: "Maria",
    surname: "Ganau",
    age: 65,
  },
  {
    name: "Riccardo",
    surname: "Rossi",
    age: 18,
  },
  {
    name: "Angela",
    surname: "Magri",
    age: 23,
  },
  {
    name: "Angelica",
    surname: "Magrini",
    age: 13,
  },
  {
    name: "Antonio",
    surname: "Magrissimi",
    age: 81,
  },
]


const listUnderage = document.querySelector('.listUnder');
const listOver65 = document.querySelector('.listOver');

const underage = users.filter(user => (user.age <= 18));
console.log(underage);

const over65 = users.filter(user => (user.age >= 65));
console.log(over65);

const {name, surname, age} = users;

underage.forEach(user => {
displayListInDom(user) 
});

over65.forEach(user => {
  displayListOverInDom(user)
})



function displayListInDom(user) {
  listUnderage.innerHTML += `
  <li>
  ${user.name} ${user.surname} <br>
  anni: ${user.age}<br>
  </li>
   `

};

function displayListOverInDom(user) {
  listOver65.innerHTML += `
  <li>
  ${user.name} ${user.surname} <br>
  anni: ${user.age}<br>
  </li>
   `

};