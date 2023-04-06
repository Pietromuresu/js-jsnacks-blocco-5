const students = [
  {
    name: "Marco della Rovere",
    Id: "213",
    grades: 78,
  },
  {
    name: "Paola Cortellessa",
    Id: "110",
    grades: 96,
  },
  {
    name: "Andrea Montegna",
    Id:  "250",
    grades: 48,
  },
  {
    name: "Gaia Borromini",
    Id: "145",
    grades: 74,
  },
  {
    name: "Luigi Grimaldello",
    Id: "196",
    grades: 68,
  },
  {
    name: "Piero della Francesca",
    Id: "102",
    grades: 50,
  },
  {
    name: "Francesca da Polenta",
    Id: "120",
    grades: 84,
  },
  
]


const studentUppercase = students.map(student => 
  {
    return student.name.toUpperCase()
  }
  )
console.log(studentUppercase);


for (let i = 0; i < studentUppercase.length; i++){
  document.querySelector('.listUppercase').innerHTML += `
  <li>${studentUppercase[i]}</li> <br>
  `
}


const studentOver70Scores = students.filter(student => {
    if(student.grades > 70) {
      return student
  }
}

  )
  console.log(studentOver70Scores);


  for (let i = 0; i < studentOver70Scores.length; i++){
    document.querySelector('.listGradesOver70').innerHTML += `
    <li>${studentOver70Scores[i].name} - ${studentOver70Scores[i].grades}</li> <br>
    `
  }


const studentIdover120 = students.filter(student => {
  if(student.grades > 70 && student.Id > 120){
    return student
  }
})


for (let i = 0; i < studentIdover120.length; i++){
  document.querySelector('.listGradesIdOver').innerHTML += `
  <li>${studentIdover120[i].name} - ${studentIdover120[i].grades} - #${studentIdover120[i].Id}</li> <br>
  `
}
