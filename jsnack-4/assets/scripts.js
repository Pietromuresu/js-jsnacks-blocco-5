const biciclette = [
  {
    name: "Bici-1",
    weight: 33,
  },
  {
    name: "Bici-2",
    weight: 53,
  },
  {
    name: "Bici-3",
    weight: 73,
  },
  {
    name: "Bici-4",
    weight: 25,
  },
  {
    name: "Bici-5",
    weight: 30,
  },

]


const minorWeight = biciclette.map(bici => {
  return bici.weight
;
})
console.log(minorWeight);

const minor = Math.min.apply(null,minorWeight);
console.log(minor);

const weightless = biciclette.filter(bici => {
  if(bici.weight === minor){
    return bici
  }
})

console.log(weightless);