const numbers = [ 8, 1, 3, 5, 2, 6, 9, 4, 7 ];
const sortedNumber = numbers.sort();
// console.log( sortedNumber );

const friends = [ 'joshim', 'dildar', 'chunnu', 'riaz', 'purnima' ];
// const sortedFriends = friends.sort(); //sorted only
const sortedFriends = friends.sort().reverse(); //sorted & reverse
// console.log( sortedFriends );

//number sorting fun
const bigNumbers = [ 99, 44, 56, 23, 89, 45, 67, 80,110,120 ];
const sortedBigNumbers = bigNumbers.sort( function ( a, b ) {
    return a - b;
});
console.log( sortedBigNumbers );