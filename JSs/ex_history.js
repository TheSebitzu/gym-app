let pushed = localStorage.pushed;
let workouts = JSON.parse(localStorage.workouts);

const workoutNames = {
    push1: "Push 1 history",
    pull1: "Pull 1 history",
    legs1: "Legs 1 history",
    push2: "Push 2 history",
    pull2: "Pull 2 history",
    legs2: "Legs 2 history"
};

document.getElementById("wkname").innerHTML = workoutNames[pushed];

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
        "ex5": "Dumbbell Lateral Raise",
        "ex6": "Plate Front Raise",
        "ex7": "Dips"
    },
    pull2: {
        "ex1": "1 Arm Half-Kneeling Lat Pulldown",
        "ex2": "Pull-Ups",
        "ex3": "Single Arm Cable Row",
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

const historyDiv = document.getElementById("history");
for (let i = workouts[pushed].length - 1; i >= 0; i--) {
    const exercise = workouts[pushed][i];

    const heading = document.createElement("h5");
    heading.textContent = `${exercise.date}`;
    historyDiv.appendChild(heading);

    const table = document.createElement("table");

    const header = table.createTHead();
    const headerRow = header.insertRow(0);
    const exerciseHeader = headerRow.insertCell(0);
    const weightHeader = headerRow.insertCell(1);
    const repsHeader = headerRow.insertCell(2);
    exerciseHeader.innerHTML = "<b>Exercise</b>";
    weightHeader.innerHTML = "<b>Weight (kg)</b>";
    repsHeader.innerHTML = "<b>Reps</b>";

    const tableBody = table.createTBody();

    for (const [exerciseName, details] of Object.entries(exercise)) {

        if (exerciseName === "date") continue;

        const row = document.createElement("tr");

        const exerciseCell = document.createElement("td");
        exerciseCell.textContent = exerciseNameMapping[pushed][exerciseName] || exerciseName;
        row.appendChild(exerciseCell);

        const weightCell = document.createElement("td");
        weightCell.textContent = details.kg;
        row.appendChild(weightCell);

        const repsCell = document.createElement("td");
        repsCell.textContent = details.reps;
        row.appendChild(repsCell);

        tableBody.appendChild(row);
    }

    historyDiv.appendChild(table);
}
