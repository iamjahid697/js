var teaLine = ['kalam', 'Salam', 'Ralam'];
teaLine.push('Jalam'); //last e add kora
console.log(teaLine);

teaLine.pop(); //last er element kea remove kora
console.log(teaLine);

teaLine.shift(); //remove from first
console.log(teaLine)

teaLine.unshift('Balam'); //add first
console.log(teaLine)

var userName = ['Palam','Kalam','Salam','Balam','Jalam','Talam'];
var part=userName.slice(2,5); //2 theke 5 er ag porjonto element gula dekha
console.log(part)
console.log(userName)