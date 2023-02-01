// Code your solution in this file!

function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks - 42)
}

// if (blocks > 42) {
// return blocks - 42
// } else (blocks < 42) {
// return 42 - blocks





function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) * 264
}


function distanceTravelledInFeet(startBlock, endBlock) {
    return Math.abs(startBlock - endBlock) * 264
}

function calculatesFarePrice(startBlock, endBlock) {
    const fareFeet = distanceTravelledInFeet(startBlock, endBlock)
    if (fareFeet <= 400) {
       return 0
    } else if (fareFeet > 400 && fareFeet <= 2000) {
       return (fareFeet - 400) * 0.02
    } else if (fareFeet > 2000 && fareFeet <= 2500) {
       return 25
    } else if (fareFeet > 2500) {
       return 'cannot travel that far'
    }
}

