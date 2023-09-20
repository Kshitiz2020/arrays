function check() {
    const a = prompt('write a number' );
    if (a < 0) {
        alert ('Please enter positive number')
    } else { 
        for (let i = 0; i <= a; ) {
            if (a % 2 === 0) {
            console.log('the  positive even number is' + a);
            break;
            } else {
            console.log('the  positive odd number is' + a);
            break;
            } 
        }      
     }   
}
check()