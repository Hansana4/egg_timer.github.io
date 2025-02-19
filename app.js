function startTimer(startTiming) {
    let time = startTiming * 60;  // Convert to seconds
    const count = document.getElementById("countdown_timer_runny");

    const interval = setInterval(updateTimer, 1000);

    function updateTimer() {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;

        // Format seconds to always show two digits
        seconds = seconds < 10 ? '0' + seconds : seconds;

        // Update the displayed countdown time
        count.innerHTML = `${minutes}:${seconds}`;

        // Decrement the time
        time--;

        // When the time runs out
        if (time < 0) {
            clearInterval(interval);
            count.innerHTML = "DONE!";
            count.style.right = '24%';
            
            backButton.style.display = "block";
        }
    }
    backButton.addEventListener("click", function() {
        window.location.href = "index.html";
    });
}