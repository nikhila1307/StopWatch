$(document).ready(function () {
  // DOM element references
  const hour = $("#hour");
  const min = $("#min");
  const sec = $("#sec");
  const start = $("#start");
  const stop = $("#stop");
  const pause = $("#pause");
  const clear = $("#clear");

  // Timer variables
  let sec_val = 0;
  let min_val = 0;
  let hr_val = 0;
  let counter; // Holds the interval ID for the timer
  let is_paused = false; // Tracks whether the timer is paused or not

  // Update the timer display
  function updateDisplay() {
    sec.text(sec_val < 10 ? `0${sec_val}` : sec_val);
    min.text(min_val < 10 ? `0${min_val}` : min_val);
    hour.text(hr_val < 10 ? `0${hr_val}` : hr_val);
  }
  // Function to increment the timer values
  function startCounter() {
    sec_val++;
    if (sec_val >= 60) {
      min_val++;
      sec_val = 0;
      if (min_val >= 60) {
        hr_val++;
        min_val = 0;
      }
    }
    updateDisplay();
  }
  // Function to pause or resume the timer
  function pauseResumeTimer() {
    // Resume the timer
    if (is_paused) {
      counter = setInterval(startCounter, 1000);
      pause.text("Pause");
    } else {
      // Pause the timer
      clearInterval(counter);
      pause.text("Resume");
    }
    // Toggle the paused state
    is_paused = !is_paused;
  }
  /*-----------------------Event handlers for buttons ---------------------*/

  // Start button click event
  start.click(function () {
    counter = setInterval(startCounter, 1000);
  });
  // Stop button click event
  stop.click(function () {
    clearInterval(counter);
  });
  // Pause/Resume button click event
  pause.click(pauseResumeTimer);
  // Clear button click event
  clear.click(function () {
    clearInterval(counter);
    sec_val = min_val = hr_val = 0;
    updateDisplay();
  });
});
