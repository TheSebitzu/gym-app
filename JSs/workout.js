let workouts = JSON.parse(localStorage.getItem('workouts'));

let push1 = workouts.push1.length;
let pull1 = workouts.pull1.length;
let legs1 = workouts.legs1.length;
let push2 = workouts.push2.length;
let pull2 = workouts.pull2.length;
let legs2 = workouts.legs2.length;

let variables = [push1, pull1, legs1, push2, pull2, legs2];

for (let i = 0; i < variables.length; i++) {
    for (let j = 0; j < variables.length; j++) {
        if (i !== j) {
            if (variables[i] !== variables[j]) {
                if (variables[i] > variables[j]) {
                    if (i === 0) {
                        document.getElementById("push1").style.backgroundColor = "#6c757d";
                    }
                    if (i === 1) {
                        document.getElementById("pull1").style.backgroundColor = "#6c757d";
                    }
                    if (i === 2) {
                        document.getElementById("legs1").style.backgroundColor = "#6c757d";
                    }
                    if (i === 3) {
                        document.getElementById("push2").style.backgroundColor = "#6c757d";
                    }
                    if (i === 4) {
                        document.getElementById("pull2").style.backgroundColor = "#6c757d";
                    }
                    if (i === 5) {
                        document.getElementById("legs2").style.backgroundColor = "#6c757d";
                    }
                }
            }
        }
    }
}
