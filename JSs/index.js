if (localStorage.workouts === undefined) {
    reset();
}


function reset() {
    let workouts = {
        "push1": [],
        "push2": [],
        "pull1": [],
        "pull2": [],
        "legs1": [],
        "legs2": []
    };

    localStorage.workouts = JSON.stringify(workouts);
    console.log(localStorage.workouts);
};


