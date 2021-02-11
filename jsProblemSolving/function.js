function evenify(num){
    if(num % 2 == 0){
        console.log(num, ':is even number');
    }
    else{
        console.log(num * 2,': is odd number')
    }

}
function evenify_all(num){
    for( let i = 0; i < num.length;i++){
        const num =num[i];
        evenify(num)
    }
}