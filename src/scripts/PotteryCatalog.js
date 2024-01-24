const soldPottery = []

export const toSellOrNotToSell = (potteryObj) => {
    if (potteryObj.weight >= 6 && potteryObj.cracked === false) {
        potteryObj.price = 40
        soldPottery.push(potteryObj)
    } else if (potteryObj.weight < 6 && potteryObj.cracked === false) {
        potteryObj.price = 20
        soldPottery.push(potteryObj)
    } 
    return potteryObj
}

export const usePottery = () => {
    const soldPotteryCopy = soldPottery.slice().map(obj => ({ ...obj }))
    return soldPotteryCopy
}