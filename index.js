
const returnFirstTwoDrivers = (drivers) => [...drivers.slice(0, 2)]

const returnLastTwoDrivers = (drivers) => [...drivers.slice(drivers.length-2)]

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier){
    return function fareMultiplier (fareAmt) {
       return multiplier*fareAmt
    }
}

const fareDoubler = (fare) => createFareMultiplier(2)(fare)

const fareTripler = (fare) => createFareMultiplier(3)(fare)

const selectDifferentDrivers = (drivers, funktion) => funktion(drivers)
