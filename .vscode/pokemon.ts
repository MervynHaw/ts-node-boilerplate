import { question } from 'readline-sync'

// change the pokemon names
// change the each pokemon HP
// battle continues until 1 pokemon faints (0 HP)
// const pokemonA: string = 'Snorlax'
// const pokemonB: string = 'Mr. Mime'
// let aHP: number = 100
// let bHP: number = 200
// const aAtk: number = 15
// const bAtk: number = 10
// const aDef: number = 5
// const bDef: number = 5
// const skillDmg: number = 2
// let aDamage: number
// let bDamage: number
// aDamage = (aAtk - bDef) * skillDmg
// bDamage = (bAtk - aDef) * skillDmg

interface Pokemon {
    name: string
    hp: number
    atk: number
    def: number
    skill: Skill[]
    element: string
}

interface Skill {
    name: string
    damage: number
    element: string
}

const pknA: Pokemon = {
    name : 'Snorlax',
    hp : 2000,
    atk : 80,
    def : 10,
    skill: [
        {
            name: 'Hyper Beam',
            damage: 50,
            element: 'Grass'
        },
        {
            name: 'Pound',
            damage: 10,
            element: 'Physical'
        }
    ],
    element: 'Grass',
    // element:
}

const pknB: Pokemon = {
    name : 'Squirtle',
    hp : 1500,
    atk : 60,
    def : 20,
    skill: [
        {
            name: 'Water Gun',
            damage: 50,
            element: 'Water'
        }
    ],
    element: 'Water'
}

const performMove = (attacker, defender, skill) => {
    let damage = attacker.atk - defender.def + skill.damage
    if (skill.element === 'Grass' && defender.element === 'Water')
    {
        damage = damage * 2
        console.log('It is Super Effective!')
    }
    else if (skill.element === 'Water' && defender.element === 'Grass')
    {
        damage = damage / 2
        console.log('It is not so effective...')
    }
    console.log(`${attacker.name} hits ${defender.name} for ${damage} damage`)
    defender.hp = defender.hp  - damage
    if (defender.hp < 0) {
        defender.hp  = 0
    }
    console.log(`${defender.name}'s HP is reduced to ${defender.hp } HP`)
    return defender.hp 
}

console.log('You are now battling Sabrina')
console.log('I am Sabrina, try to defeat me.')
console.log('Sabrina sent out ' + pknB.name)
console.log('Go, ' + pknA.name)

console.log(`${pknA.name} has ${pknA.hp} HP`)
console.log(`${pknB.name} has ${pknB.hp} HP`)

// start with pokemonA turn
// pokemonA does its move
// check if pokemonB has fainted, stop the whole game
// switch to pokemonB
// pokemonB does its move
// check if pokemonA has fainted, stop the whole game
// repeat

// condition to keep the game going
// pokemonA's HP is more than 0 and pokemonB's HP is more than 0
// pokemonA's HP is less ors equal to 0
console.log('----------------------')
let isMyTurn = true
while (pknA.hp > 0 && pknB.hp > 0) {
  if (isMyTurn) {
    // i can pick a move
    // console.log('You picked Body Slam')
    // my pokemon hits opp pokemon
    // display list of skills
    for (const index in pknA.skill) {
        console.log(`${index}: ${pknA.skill[index].name} Element: ${pknA.skill[index].element}`)
      }
  
      const skillIndex = question('Please pick a skill\n')
      const skill = pknA.skill[skillIndex]
  
      pknB.hp = performMove(pknA, pknB, skill)
  } else {
    // i cannot pick a move
    const skill = pknB.skill[0]
    // opp pokemon hits my pokemon
    pknA.hp = performMove(pknB, pknA, skill)
  }
  console.log('----------------------')
  isMyTurn = !isMyTurn
}

if (pknA.hp <= 0) {
  console.log(pknA.name + ' fainted')
  console.log('You lost, GAME OVER')
} else {
  console.log(pknB.name + ' fainted')
  console.log('You won, GAME OVER')
}

// TODO: 7. Set the trainer's pokemon to 'x' for the defeated one.
// TODO: 8. Another trainer's pokemon wil appear.
// TODO: 9. Repeat step 4 to step 7 untill all trainer's pokemons are defeated.
