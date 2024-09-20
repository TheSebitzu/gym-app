if (localStorage.workouts === undefined) {
    reset();
}


function reset() {
    localStorage.clear();
    let workouts = {
        "push1": [],
        "push2": [],
        "pull1": [],
        "pull2": [],
        "legs1": [],
        "legs2": []
    };
    localStorage.workouts = JSON.stringify(workouts);
    console.log("SALUT SIMPLU");
};


