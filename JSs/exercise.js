const inputkg = document.getElementById("weight");
const inputreps = document.getElementById("reps");

function save() {
    let workouts = JSON.parse(localStorage.workouts);
    let ex = workouts.push1.at(-1)["ex" + nr_ex];
    ex.kg = inputkg.value;
    ex.reps = inputreps.value;
    localStorage.workouts = JSON.stringify(workouts);
    console.log(localStorage.workouts);
}