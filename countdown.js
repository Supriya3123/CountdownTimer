
let interval;

function updateCountdown(targetDate) {
    const targetTime = new Date(targetDate).getTime();
    
    interval = setInterval(function() {
        const currentTime = new Date().getTime();
        const distance = targetTime - currentTime;

        const years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
        const days = Math.floor(distance % (1000 * 60 * 60 * 24 * 365) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown-years").innerHTML = years;
        document.getElementById("countdown-days").innerHTML = days;
        document.getElementById("countdown-hours").innerHTML = hours;
        document.getElementById("countdown-minutes").innerHTML = minutes;
        document.getElementById("countdown-seconds").innerHTML = seconds;

        if (distance <= 0) {
            clearInterval(interval);
            document.getElementById("countdown").innerHTML = "<h1>It's your Birthday!</h1>";
        }
    }, 1000);
}


document.getElementById("start").addEventListener("click", function() {
    const date = document.getElementById("date").value;

    if (date) {
        const targetDate = date + "T00:00:00"; 
        updateCountdown(targetDate);
    } else {
        alert("Please select a date.");
    }
});

// Function to stop countdown
document.getElementById("stop").addEventListener("click", function() {
    clearInterval(interval);
});
