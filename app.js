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
            const alarm_sound = new Audio("capybara_song.mp3");

            count.style.display = "none";
            // Play the alarm sound
            alarm_sound.play();
            // Make sure it loops (if required)
            alarm_sound.loop = false; // Set to false if you want it to play once
            alarm_sound.volume = 1; // Ensure full volume when the timer ends
            document.body.style.backgroundImage = "url('finished.gif')";
            document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundSize = "1480px 780px";
        }
    }
}

// Extract the timer value from the URL query string
const urlParams = new URLSearchParams(window.location.search);
const timerValue = urlParams.get('timer') || 6; // Default to 6 minutes if no timer value is found

// Add an event listener to the button
document.getElementById("startButton").addEventListener("click", function() {
    startTimer(parseInt(timerValue));
});

// Preload alarm sound
const alarm_sound = new Audio("capybara_song.mp3"); // Replace with actual audio file
alarm_sound.load();
// Function to preload and play the alarm sound quietly initially
function playSilentAudio() {
    alarm_sound.volume = 0.00001; // Make it almost silent to preload it
    alarm_sound.play();
}

function hide(x){
    x.style.display = "none";
}
