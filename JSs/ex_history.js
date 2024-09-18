let pushed = localStorage.pushed;
let workouts = JSON.parse(localStorage.workouts);

if (pushed === "push1") {
    document.getElementById("wkname").innerHTML = "Push 1 history";
}
if (pushed === "pull1") {
    document.getElementById("wkname").innerHTML = "Pull 1 history";
}
if (pushed === "legs1") {
    document.getElementById("wkname").innerHTML = "Legs 1 history";
}
if (pushed === "push2") {
    document.getElementById("wkname").innerHTML = "Push 2 history";
}
if (pushed === "pull2") {
    document.getElementById("wkname").innerHTML = "Pull 2 history";
}
if (pushed === "legs2") {
    document.getElementById("wkname").innerHTML = "Legs 2 history";
}


const historyDiv = document.getElementById("history");

for (let i = workouts[pushed].length - 1; i >= 0; i--) {
    const exercise = workouts[pushed][i];
    console.log(exercise);

    // Create a heading for the table number
    const heading = document.createElement("h5");
    heading.textContent = `${exercise.date}`;
    historyDiv.appendChild(heading);

    // Create a new table for each exercise
    const table = document.createElement("table");


    // Create a header row
    const header = table.createTHead();
    const headerRow = header.insertRow(0);
    const exerciseHeader = headerRow.insertCell(0);
    const weightHeader = headerRow.insertCell(1);
    const repsHeader = headerRow.insertCell(2);
    exerciseHeader.innerHTML = "<b>Exercise</b>";
    weightHeader.innerHTML = "<b>Weight (kg)</b>";
    repsHeader.innerHTML = "<b>Reps</b>";

    // Create a body for the table
    const tableBody = table.createTBody();

    for (const [exerciseName, details] of Object.entries(exercise)) {
        const row = document.createElement("tr");

        const exerciseCell = document.createElement("td");
        exerciseCell.textContent = exerciseName;
        row.appendChild(exerciseCell);

        const weightCell = document.createElement("td");
        weightCell.textContent = details.kg;
        row.appendChild(weightCell);

        const repsCell = document.createElement("td");
        repsCell.textContent = details.reps;
        row.appendChild(repsCell);

        tableBody.appendChild(row);
    }

    // Append the table to the history div
    historyDiv.appendChild(table);
}