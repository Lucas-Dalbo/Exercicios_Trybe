// PARTE 1 - Game Actions Simulator
const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

// 1 - Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).
const dragonDMG = () => Math.floor(Math.random() * dragon.strength - 15) + 15;

// 2 - Crie uma função que retorna o dano causado pelo warrior .
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).
const warriorDMG = () => Math.floor(Math.random() * (warrior.weaponDmg * warrior.strength - warrior.strength)) + warrior.strength;

// 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.
const mageDMG = () => {
  let damage;
  let custoMana = 15;
  if( mage.mana >= 15) {
    // mage['mana'] -= custoMana;
    damage = Math.floor(Math.random() * (mage.intelligence * 2 - mage.intelligence)) + mage.intelligence;
  } else {
    damage = 'Sem mana suficiente'
    custoMana = 0;
  };
  return {
    dmg: damage,
    manaCost: custoMana,
  }
}

// console.log(dragonDMG(), warriorDMG(), mageDMG(spell));

// PARTE 2
const gameActions = {
  warriorTurn: (action) => {
    let dmg = action();
    warrior.damage = dmg;
    dragon.healthPoints -= dmg;
    return dmg;
  },
  mageTurn: (action) => {
    let dmg = action();
    mage.damage = dmg.dmg;
    mage.mana -= dmg.manaCost;
    dragon.healthPoints -= dmg.dmg;
    return dmg;
  },
  dragonTurn: (action) => {
    let dmg = action();
    dragon.damage = dmg
    mage.healthPoints -= dmg;
    warrior.healthPoints -= dmg;
    return dmg;
  },
  turnResults: () => battleMembers,
};

gameActions.warriorTurn(warriorDMG),
gameActions.mageTurn(mageDMG),
gameActions.dragonTurn(dragonDMG),

console.log(
gameActions.turnResults(),
)
