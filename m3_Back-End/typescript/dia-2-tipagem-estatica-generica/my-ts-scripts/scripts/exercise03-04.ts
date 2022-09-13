interface pizza {
  flavor: string,
  slices: 4 | 6 | 8,
}

let pizza01 :pizza = {
  flavor: 'Calabresa',
  slices: 8,
}

let pizza02 :pizza = {
  flavor: 'Marguerita',
  slices: 6,
}

let pizza03 :pizza = {
  flavor: 'Nutella',
  slices: 4,
}

console.table([pizza01, pizza02, pizza03]);

interface pizzaComum extends pizza {
  flavor: 'Calabresa' | 'Frango' | 'Pepperoni',
}

interface pizzaVegetariana extends pizza {
  flavor: 'Marguerita' |'Palmito' | 'Cogumelo',
}

interface pizzaDoce extends pizza {
  flavor: 'Nutella' | 'Romeu e Julieta' | 'Banana com Canela',
  slices: 4,
}

let newPizza :pizzaComum = {
  flavor: 'Calabresa',
  slices: 8
}

let newerPizza :pizzaVegetariana = {
  flavor: 'Palmito',
  slices: 6,
}

let newNewerPizza :pizzaDoce = {
  flavor: "Banana com Canela",
  slices: 4
}
