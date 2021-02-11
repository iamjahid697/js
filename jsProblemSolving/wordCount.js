var speech ="I am  a good person. I don't snore at night";
var totalRent = 0;
for(var i= 0; i<speech.length;i++){
    var char = speech[i];
     if(char == " " && speech[i-1] != " "){
        totalRent++;
    }
}
totalRent++;
console.log(totalRent);

//another

var sentence = "I am hardworking. I am serious. I am sure I will do it";

var totalRent = 0;

for (var i = 0; i < sentence.length; i++) {

    var letter = sentence[i];

    if (letter == 'a') {

        totalRent++;

    }

}

console.log(totalRent)

