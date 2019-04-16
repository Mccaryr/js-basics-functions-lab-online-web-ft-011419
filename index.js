function distanceFromHqInBlocks(blockDistance){
  if(blockDistance > 42) {
    return blockDistance - 42;
  } else {
    return 42 - blockDistance;
  }
}

function distanceFromHqInFeet(blockDistance){
return distanceFromHqInBlocks(blockDistance) * 264
}

function distanceTravelledInFeet(beginning, ending){
  if (beginning < ending){
    return (ending - beginning) * 264;
  } else {
    return (beginning - ending) * 264;
  }
}

function calculatesFarePrice(start, destination){
  if (distanceTravelledInFeet < 400){
    return 0
  }
}
