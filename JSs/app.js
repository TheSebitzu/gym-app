import push1 from '../JSONs/push1.json' with {type: 'json'};

// console.log(push1);



// document.getElementById("salut").innerHTML += users[0].firstName;
// document.getElementById("salut").innerHTML += users[0].lastName;
// document.getElementById("salut").innerHTML += users[1].firstName;
// document.getElementById("salut").innerHTML += users[1].lastName;

// for (var i in push1) {
//     document.getElementById("salut").innerHTML += push1[i].ex1kg;
// }

let timestamp = Date.now();
var date = new Date(timestamp);
let year = date.getFullYear();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = months[date.getMonth()];
let day = date.getDate();

// console.log(year + " " + month + " " + year);

push1[0].date = year + " " + month + " " + year;

// console.log(push1.date);

console.log(push1);

