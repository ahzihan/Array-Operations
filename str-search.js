const phones = [
    'Laptop Hp i5',
    'apple laptop',
    'smart phone htc',
    'apple watch',
    'Dell laptop',
    'Asus Laptop'
];
let searching = 'laptop';
const output = [];

// using indexOf()
for ( const phone of phones ) {
    if ( phone.toLowerCase().indexOf( searching.toLowerCase() ) != -1 ) {
        output.push( phone );
    }
}

// using includes()
for ( const phone of phones ) {
    if ( phone.toLowerCase().includes( searching.toLowerCase() )) {
        output.push( phone );
    }
}

searching = 'apple';
//using startsWith()
for ( const phone of phones ) {
    if ( phone.toLowerCase().startsWith( searching.toLowerCase() )) {
        output.push( phone );
    }
}

searching = 'laptop';
//using startsWith()
for ( const phone of phones ) {
    if ( phone.toLowerCase().endsWith( searching.toLowerCase() )) {
        output.push( phone );
    }
}
console.log( output );
