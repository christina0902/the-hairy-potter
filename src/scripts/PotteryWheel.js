let primaryKey = 1

export const makePottery = (s, w, h) => {
    const potteryObj = {
        shape: s,
        weight: w,
        height: h,
        id: primaryKey++
    }
    return  potteryObj
}