// Code your solution in this file!

//const exampleDrivers = ['Sarah', 'Julian', 'Cyrus', 'Sophie']

const returnFirstTwoDrivers = function(driverList){
    return([driverList[0], driverList[1]])
}

//console.log(returnFirstTwoDrivers(exampleDrivers))

const returnLastTwoDrivers = function(driverList){
    return([driverList[driverList.length-2], driverList[driverList.length-1]])
}

const selectingDrivers = [returnFirstTwoDrivers , returnLastTwoDrivers]

const createFareMultiplier = function(multiplierNumber){
    
    return (fare) => fare*multiplierNumber
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(driverList, selectionFunction){
    return(selectionFunction(driverList))
}