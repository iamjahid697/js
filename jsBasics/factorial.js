//forloop factorial

function factorial(n){
    var factorial = 1 ;
    for(var i = 1; i<= n; i++){
        factorial = factorial * i;
    }
    return factorial;
}
var result =factorial(0);
console.log(result);

//while loop factorial

function factorial(n){
    var i = 1;
    var factorial = 1;
    while (i <= n) {
        factorial = factorial * i;
        i++;
    }
    return factorial;
}
var result = factorial(10);
console.log(result);