// Code your solution in this file!
function distanceFromHqInBlocks (num) {
  //returns the number of blocks given a value
  return Math.abs(num - 42)
}

function distanceFromHqInFeet (someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  //the return value of distanceFromHqInBlocks can then be used to calculate feet
}

function distanceTravelledInFeet (x,y) {
  return distanceFromHqInFeet (y) - distanceFromHqInFeet (x)
}
