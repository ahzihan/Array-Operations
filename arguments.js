function addNumbers( num1, num2 ) {
    let result = 0;
    for ( const num of arguments ) {
        result = result + num;
    }
    return result;
}
const sum = addNumbers( 20, 40 ,40,100);
console.log( sum );

function getFullName( firstName, lastName ) {
    let fullName = '';
    for ( const part of arguments ) {
        fullName = fullName + part+' ';
    }
    return fullName;
}
const name = getFullName( 'Hanif', 'Ibne', 'Kasim' );
console.log( name );