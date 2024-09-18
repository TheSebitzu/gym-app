const inputkg = document.getElementById("weight");
const inputreps = document.getElementById("reps");

let worknum = localStorage.wknr;

let key = worknum + ".ex" + nr_ex;

let keyMaxKg = key + ".maxkg";
let keyMaxReps = key + ".maxreps";


document.getElementById("maxkg").textContent = "Previous max weight: " + localStorage.getItem(keyMaxKg);
document.getElementById("maxreps").textContent = "Previous max reps: " + localStorage.getItem(keyMaxReps);


if (localStorage.getItem(keyMaxKg) === null) {
    localStorage.setItem(keyMaxKg, "-1");
}
if (localStorage.getItem(keyMaxReps) === null) {
    localStorage.setItem(keyMaxReps, "-1");
}

function save() {
    let workouts = JSON.parse(localStorage.workouts);
    let ex = workouts[worknum].at(-1)["ex" + nr_ex];
    ex.kg = inputkg.value;
    ex.reps = inputreps.value;


    if (ex.kg === localStorage.getItem(keyMaxKg) && ex.reps > localStorage.getItem(keyMaxReps)) {
        localStorage.setItem(keyMaxReps, ex.reps);
    }
    if (ex.kg > localStorage.getItem(keyMaxKg)) {
        localStorage.setItem(keyMaxReps, ex.reps);
        localStorage.setItem(keyMaxKg, ex.kg);
    }

    localStorage.workouts = JSON.stringify(workouts);


}

