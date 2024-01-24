export const firePottery = (potteryObj, fireTemp) => {
    potteryObj.fired = true
    potteryObj.cracked = false
    if (fireTemp > 2200) {
        potteryObj.cracked = true
    } else {
        potteryObj.cracked = false
    }
    return potteryObj
}