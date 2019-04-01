import { question } from 'readline-sync'

// Laptop Builder
// Allow users to select computer parts to create their laptop
// Display total price with selected parts

let laptop = ['', '', '', '']

let totalPrice = 0

const screenResolutionOptions = {
  '1920 x 1080': 200,
}

const hddOptions = {
  '128GB': 200,
  '256GB': 400,
  '1TB': 600,
}

const RAMOptions = {
  '8GB': 200,
  '16GB': 500,
  '32GB': 800,
}
const processorOptions = {
  i5: 400,
  i7: 700,
}

const options = [
  screenResolutionOptions,
  hddOptions,
  RAMOptions,
  processorOptions,
]

for (let index in options) {
  // console.log('Part ')
  const partsOptions = options[index]
  for (let i in partsOptions) {
    console.log(`${i} RM ${partsOptions[i]}`)
  }
  let optionIndex = question('Please select a item option index\n')
  const selectedOption = Object.keys(partsOptions)[optionIndex]

  laptop[index] = selectedOption

  totalPrice = totalPrice + options[index][selectedOption]
  console.log()
}

console.log('\nYour selected options are:')

for (let part of laptop) {
  console.log(part)
}
console.log(`Your total price: ${totalPrice}`)
