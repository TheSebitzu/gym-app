import users from '../JSONs/users.json' with {type: 'json'};
console.log(users);



// document.getElementById("salut").innerHTML += users[0].firstName;
// document.getElementById("salut").innerHTML += users[0].lastName;
// document.getElementById("salut").innerHTML += users[1].firstName;
// document.getElementById("salut").innerHTML += users[1].lastName;

for (var firstName in users) {
    document.getElementById("salut").innerHTML += users[firstName].firstName;
}

