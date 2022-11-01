// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(2,4)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fareMultiplier){
    return function (fare){
        return fareMultiplier * fare
    }
}; 

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers (x, returnDriversFunction){
    console.log(x);
    console.log(returnDriversFunction); 
    return returnDriversFunction(drivers);
}
selectDifferentDrivers(drivers, returnLastTwoDrivers)

//const fareDoubler = function(fare){
    //return 2 * fare
//}
    
