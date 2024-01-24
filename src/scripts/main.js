// Imports go first
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell } from "./PotteryCatalog.js"
import { PotteryList } from "./PotteryList.js"
import { makePottery } from "./PotteryWheel.js"


// Make 5 pieces of pottery at the wheel
let vase = makePottery("Vase", 6, 30)

let bowl = makePottery("Bowl", 1.5, 15)

let mug = makePottery("Mug", 0.5, 2)

let plate = makePottery("Plate", 7, 2)

let sculpture = makePottery("Sculpture", 3, 40)

// Fire each piece of pottery in the kiln
firePottery(vase, 2300)

firePottery(bowl, 2000)

firePottery(mug, 2100)

firePottery(plate, 2200)

firePottery(sculpture, 2400)

// Determine which ones should be sold, and their price

console.log(toSellOrNotToSell(vase))
console.log(toSellOrNotToSell(bowl))
console.log(toSellOrNotToSell(mug))
console.log(toSellOrNotToSell(plate))
console.log(toSellOrNotToSell(sculpture))



// Invoke the component function that renders the HTML list

const potteryString = PotteryList()
const HTMLElement = document.querySelector(".potteryList")
HTMLElement.innerHTML = potteryString