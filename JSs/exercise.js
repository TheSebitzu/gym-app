const inputkg = document.getElementById("weight");
const inputreps = document.getElementById("reps");

let worknum = localStorage.wknr;

function save() {
    let workouts = JSON.parse(localStorage.workouts);
    let ex = workouts[worknum].at(-1)["ex" + nr_ex];
    ex.kg = inputkg.value;
    ex.reps = inputreps.value;
    localStorage.workouts = JSON.stringify(workouts);
    console.log(localStorage.workouts);
}