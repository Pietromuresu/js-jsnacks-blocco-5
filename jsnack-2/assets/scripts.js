const students = [
  {
    name: "Lucia",
    surname: "Magri",
    numberID: 2323,
    votes: [6, 4, 8, 8, 7] 
  },
  {
    name: "Marco",
    surname: "Biagi",
    numberID: 1254,
    votes: [6, 3, 3, 5, 3] 
  },
  {
    name: "Maria",
    surname: "Ganau",
    numberID: 6545,
    votes: [6, 5, 3, 2, 7] 
  },
  {
    name: "Riccardo",
    surname: "Rossi",
    numberID: 1876,
    votes: [6, 6, 6, 9, 7] 
  },
  {
    name: "Angela",
    surname: "Magri",
    numberID: 2323,
    votes: [6, 6, 9, 8, 9] 
  },
  {
    name: "Angelica",
    surname: "Magrini",
    numberID: 1316,
    votes: [6, 6, 3, 5, 2] 
  },
  {
    name: "Antonio",
    surname: "Magrissimi",
    numberID: 8178,
    votes: [1, 3, 3, 5, 7] 
  },
]

const averageStudents = students.map(student => 
    
  [
    nameComplete = student.name + ' ' + student.surname,
    matricola = student.numberID,
    media = (student.votes.reduce(sum, 0)) / student.votes.length,
    
  ]

  )
console.log(averageStudents);   



function sum(total, vote) {
     return parseInt(total + vote)
}