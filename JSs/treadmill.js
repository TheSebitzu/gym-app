function save_treadmill() {
    var time = document.getElementById("time").value;
    var incline = document.getElementById("incline").value;
    var speed = document.getElementById("speed").value;

    var data = {
        time: time,
        incline: incline,
        speed: speed
    };

    var treadmill = JSON.parse(localStorage.getItem('treadmill')) || [];

    treadmill.push(data);

    localStorage.setItem('treadmill', JSON.stringify(treadmill));
}