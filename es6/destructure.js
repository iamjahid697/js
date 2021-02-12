const person = { name: 'Jack William', age: 17, job: 'facebooker',gfName:'Sssss', address: 'Dhanmondi', phone: '01405399571'};

const{ phone, gfName, salary} = person;
//const gfName = person.gfName;
//const phone = person.phone;

// console.log(gfName, phone, salary);
// console.log(gfName, phone, salary);
// console.log(gfName, phone, salary);
// console.log(gfName, phone, salary);

// const friends = ['Sakib khan', 'Arman Khan', 'Amir Khan', 'Salman Khan','Sharuk Khan'];
// const [chotoFriend, nextFriend, ...restFriends] = friends;
// console.log(restFriends);


const {phone} = person;

const complexObject = {
    name: 'abc',
    info:{address:'Kola bagan',
leader:'Tiger Leader'}
}
const {leader} = complexObject.info