let push1day = {
    "ex1": {
        "kg": 0,
        "reps": 0
    },
    "ex2": {
        "kg": 0,
        "reps": 0
    },
    "ex3": {
        "kg": 0,
        "reps": 0
    },
    "ex4": {
        "kg": 0,
        "reps": 0
    },
    "ex5": {
        "kg": 0,
        "reps": 0
    },
    "ex6": {
        "kg": 0,
        "reps": 0
    },
    "ex7": {
        "kg": 0,
        "reps": 0
    }

};

let workouts = JSON.parse(localStorage.workouts);
workouts.push1.push(push1day);
localStorage.workouts = JSON.stringify(workouts);

console.log(localStorage.workouts);