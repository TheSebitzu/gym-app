let pushed = localStorage.pushed;
let workouts = JSON.parse(localStorage.workouts);

// document.getElementById("history").innerHTML = JSON.stringify(workouts[pushed]);

const exercises = workouts[pushed][0]; //trb inlocuit acel 0
console.log(exercises);

const tableBody = document.getElementById("history");

for (const [exercise, details] of Object.entries(exercises)) {
    const row = document.createElement("tr");

    const exerciseCell = document.createElement("td");
    exerciseCell.textContent = exercise;
    row.appendChild(exerciseCell);

    const weightCell = document.createElement("td");
    weightCell.textContent = details.kg;
    row.appendChild(weightCell);

    const repsCell = document.createElement("td");
    repsCell.textContent = details.reps;
    row.appendChild(repsCell);

    tableBody.appendChild(row);
} 