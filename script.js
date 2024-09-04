// Function to toggle the dropdown menu in mobile view
function toggleDropdown() {
    var dropdown = document.getElementById("dropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

// Countdown Timer Script
var countdownDate = new Date("2024-12-31T23:59:59").getTime();
var countdownFunction = setInterval(function() {
    var now = new Date().getTime();
    var timeleft = countdownDate - now;

    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;

    if (timeleft < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown-timer").innerHTML = "EXPIRED";
    }
}, 1000);
