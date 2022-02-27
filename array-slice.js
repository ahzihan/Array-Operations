const number = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
//slice
// const sliceNumber = number.slice( 4, 8 );
// console.log( sliceNumber );
// console.log( number );

//splice delete item from an array
// const sliceNumber = number.splice( 4, 3 );
// console.log( sliceNumber );
// console.log( number );

//splice delete item from an array and inser items
const sliceNumber = number.splice( 4, 3 , 77,88,99);
console.log( sliceNumber );
console.log( number );