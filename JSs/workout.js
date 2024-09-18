let workouts = JSON.parse(localStorage.getItem('workouts'));

let push1 = workouts.push1.length;
let pull1 = workouts.pull1.length;
let legs1 = workouts.legs1.length;
let push2 = workouts.push2.length;
let pull2 = workouts.pull2.length;
let legs2 = workouts.legs2.length;

console.log("Push 1 " + push1);
console.log("Pull 1 " + pull1);
console.log("Legs 1 " + legs1);
console.log("Push 2 " + push2);
console.log("Pull 2 " + pull2);
console.log("Legs 2 " + legs2);

let variables = [push1, pull1, legs1, push2, pull2, legs2];
for (let i = 0; i < variables.length; i++) {
    for (let j = i + 1; j < variables.length; j++) {
        if (variables[i] !== variables[j]) {
            if (i === 0) {
                document.getElementById("push1").style.backgroundColor = "green";
            }
            if (i === 1) {
                document.getElementById("pull1").style.backgroundColor = "green";
            }
            if (i === 2) {
                document.getElementById("legs1").style.backgroundColor = "green";
            }
            if (i === 3) {
                document.getElementById("push2").style.backgroundColor = "green";
            }
            if (i === 4) {
                document.getElementById("pull2").style.backgroundColor = "green";
            }
            if (i === 5) {
                document.getElementById("legs2").style.backgroundColor = "green";
            }
        }
    }
}
