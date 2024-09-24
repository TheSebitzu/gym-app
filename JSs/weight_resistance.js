let workouts = JSON.parse(localStorage.workouts);
const inputkg = document.getElementById("weight");
const inputreps = document.getElementById("reps");

let worknum = localStorage.wknr;

let key = worknum + ".ex" + nr_ex;

let keyMaxKg = key + ".maxkg";
let keyMaxReps = key + ".maxreps";

if (localStorage.getItem(keyMaxKg) === null || localStorage.getItem(keyMaxKg) === "-1") {
    document.getElementById("maxkg").textContent = "Have a nice first workout";
}
else {
    document.getElementById("maxkg").textContent = "Previous max weight: " + localStorage.getItem(keyMaxKg);
}
if (localStorage.getItem(keyMaxReps) === null || localStorage.getItem(keyMaxReps) === "-1") {
    document.getElementById("maxreps").textContent = "Have a nice first workout";
}
else {
    document.getElementById("maxreps").textContent = "Previous max reps: " + localStorage.getItem(keyMaxReps);
}


if (localStorage.getItem(keyMaxKg) === null) {
    localStorage.setItem(keyMaxKg, "-1");
}
if (localStorage.getItem(keyMaxReps) === null) {
    localStorage.setItem(keyMaxReps, "-1");
}

let ex = workouts[worknum].at(-1)["ex" + nr_ex];
document.getElementById("weight").placeholder = ex.kg;
document.getElementById("reps").placeholder = ex.reps;


const exerciseNameMapping = {
    push1: {
        "ex1": "Bench Press",
        "ex2": "Larsen Press",
        "ex3": "Standing Arnold Press",
        "ex4": "Press Around",
        "ex5": "Cross-body Y Raise",
        "ex6": "Pressdown + Overhead Ext",
        "ex7": "Tricep Extension"

    },
    pull1: {
        "ex1": "Lat Pulldown",
        "ex2": "Chest Rows",
        "ex3": "Dumbbell Pullover",
        "ex4": "Face Pull",
        "ex5": "Ez Bar Bicep Curl",
        "ex6": "Precher Curl",
        "ex7": "Cable Core Stabilizers"
    },
    legs1: {
        "ex1": "Squat",
        "ex2": "RDL",
        "ex3": "Walking Lounge",
        "ex4": "Lying Leg Curl",
        "ex5": "Toe Press",
        "ex6": "Plate Crunch",
        "ex7": "Roman Chair"
    },
    push2: {
        "ex1": "Incline Bench Press",
        "ex2": "Shoulder Press",
        "ex3": "Skull Crushers",
        "ex4": "Bent-over Cable Flye",
        "ex5": "Cable Lateral Raise",
        "ex6": "Plate Front Raise",
        "ex7": "Dips"
    },
    pull2: {
        "ex1": "1 Arm Half-Kneeling Lat Pulldown",
        "ex2": "Pull-Ups",
        "ex3": "Cable Row",
        "ex4": "Barbell Shrugs",
        "ex5": "Reverse Pec Deck",
        "ex6": "Incline DB Curl",
        "ex7": "Wrist Curl"
    },
    legs2: {
        "ex1": "Deadlift",
        "ex2": "Hip Thrusts",
        "ex3": "Leg Press",
        "ex4": "RDL",
        "ex5": "Leg Extension",
        "ex6": "Calf Raise",
        "ex7": "Plate Crunch",
        "ex8": "Roman Chair"
    }
};



let skipped_text = "";

for (let i = 1; i < nr_ex; i++) {
    let ex = workouts[worknum].at(-1)["ex" + i];
    if (ex.kg === "" || ex.reps === "") {
        skipped_text += exerciseNameMapping[worknum]["ex" + i] + ", ";
    }
}
if (skipped_text.length != 0) {
    skipped_text = skipped_text.slice(0, -2);
    skipped_text = "Skipped ex: " + skipped_text;
    document.getElementById("skipped_text").textContent = skipped_text;
}

function save2() {
    let workouts = JSON.parse(localStorage.workouts);
    let ex = workouts[worknum].at(-1)["ex" + nr_ex];
    ex.kg = inputkg.value;
    ex.reps = inputreps.value;


    if (ex.kg === localStorage.getItem(keyMaxKg) && ex.reps > localStorage.getItem(keyMaxReps)) {
        localStorage.setItem(keyMaxReps, ex.reps);
    }
    if (ex.kg < localStorage.getItem(keyMaxKg)) {
        localStorage.setItem(keyMaxReps, ex.reps);
        localStorage.setItem(keyMaxKg, ex.kg);
    }

    localStorage.workouts = JSON.stringify(workouts);
}

function save() {
    let ex = workouts[worknum].at(-1)["ex" + nr_ex];
    if (inputkg.value === "" || inputreps.value === "") {
        alert("Please input Weight and Reps");
        return false;
    }
    else {
        save2();
        return true;
    }
}


