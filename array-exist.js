function megaFriend( friends ) {
    if ( Array.isArray( friends ) == false ) {
        return 'please enter an array';
    }
    let mega = friends[ 0 ];
    for ( const friend of friends ) {
        if ( friend.length > mega.length ) {
            mega = friend;
        }
    }
    return mega;
}
const friends = [ 'akbar hossain', 'Md Arif Billah', 'emon', 'Alamin' ];
// const largeName = megaFriend( friends );
const largeName = megaFriend( 3456 );
console.log( largeName );

//array exist
// if ( friends.indexOf( 'emon' ) != -1 ) {
//     console.log( 'Array is exist' );
// }

if ( friends.includes( 'emon' ) ==true) {
    console.log( 'Array is exist' );
}

//concat array

const num1 = [ 1, 2, 3, 4, 5, 6 ];
const num2 = [ 7, 8, 9, 10 ];
const combined = num1.concat( num2 );
console.log( combined );