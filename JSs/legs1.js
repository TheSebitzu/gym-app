function start() {

    const today = new Date();

    const day = today.getDate();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = monthNames[today.getMonth()];
    const year = today.getFullYear();


    let legs1day = {
        "date": day + " " + month + " " + year,
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
    workouts.legs1.push(legs1day);
    localStorage.workouts = JSON.stringify(workouts);

}
