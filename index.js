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
  result === (ending - beginning) * 264
  return result
}
