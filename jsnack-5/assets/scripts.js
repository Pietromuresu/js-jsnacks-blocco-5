let squadre = [
  {
    nome: "Juventus",
    punti: 0,
    falli: 0,
  },
  {
    nome: "Milan",
    punti: 0,
    falli: 0,
  },
  {
    nome: "Inter",
    punti: 0,
    falli: 0,
  },
  {
    nome: "Hellas Verona",
    punti: 0,
    falli: 0,
  },
  {
    nome: "Sampdoria",
    punti: 0,
    falli: 0,
  },
  {
    nome: "Genoa",
    punti: 0,
    falli: 0,
  },

]

// creo i valori di punti e falli
squadre.forEach(squadra => {
  squadra.punti = getRandomNumbers(0, 40);
  squadra.falli = getRandomNumbers(0, 90);
})


console.log(squadre);

// creo un nuovo array con solo i nomi e i falli subiti
const falliSquadre = squadre.map(squadra => {
const {nome, falli} = squadra;
  return `${nome} - ${falli}`
})


console.log(falliSquadre);


// li inserisco nella lista in pagina
for (let i = 0; i < falliSquadre.length; i++){
  document.querySelector('.listaFalli').innerHTML += `
  <li> ${falliSquadre[i]} </li>
  `
}


function getRandomNumbers(min, max) {
 return Math.floor(Math.random() * (max - min) + min)
}