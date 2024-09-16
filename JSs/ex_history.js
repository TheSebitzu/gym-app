let pushed = localStorage.pushed;
let workouts = JSON.parse(localStorage.workouts);
document.getElementById("history").innerHTML = JSON.stringify(workouts[pushed]);