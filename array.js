var friendsAge = [15,17,14,16];

var sonaliAge = friendsAge[2];

friendsAge[1] = 21;
var position = friendsAge.indexOf(14); // array er element er position bahir kora

console.log(friendsAge) //array er  dekha

friendsAge.push(15); // array er modde kisu dukano last e
console.log(friendsAge)
console.log(sonaliAge)
console.log(position)

console.log(friendsAge.length) //array er length bahir kora

friendsAge.pop();
console.log(friendsAge)