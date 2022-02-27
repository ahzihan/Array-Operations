const anthem = 'Amr sonar Bangla, Ami tomay valobashi.';
// const words = anthem.split( ' ' );
// const words = anthem.split( ', ' );

//slice
// const words = anthem.slice( 4, 17 );
// console.log( words );

//substr
// const words = anthem.substr( 4, 9 );
// console.log( words );

//substring
// const words = anthem.substring( 4, 9 );
// console.log( words );

//concat
const first = 'Md Akbar ';
const second = 'Hossain';
// const fullName = first + second;
// console.log( fullName );
const fullName = first.concat(second).concat(', Phone: ').concat('01776328578');
console.log( fullName );

const text = [ 'a', 'k', 'b', 'a', 'r' ];
const allJoined = text.join( '' );
console.log( allJoined );