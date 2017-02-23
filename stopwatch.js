// Use setInterval() and setTimeout() to create a simple stopwatch app with a live updating counter.

// Explorer Mode
// *Start with your HTML & CSS. Create a page with a single button with id="start". Then create a div with id="timer" and class="well".
// *In your JavaScript file, started by adding a click event listener to the #start element. Call a function called startTimer.
// 1. Clicking when the button says "Start" should...
    // *Start counting up, every 10th of a second
    // *Update the #timer inner HTML to follow this format: Minutes:Seconds:Tenths (00:00:00)
    // *Change the color of the timer text each second
    // *Change button to say "Pause"
// 2. Clicking when the button says "Pause" should...
    // *Pause the timer from counting up
    // *Change button to say "Resume"
// 3. Clicking when the button says "Resume" should...
    // *Resume the count up
    // *Change button to say "Pause"
// 4. Double-clicking when the button says "Pause" should...
    // *Stop counting up
    // *Reset the timer back to 0
    // *Update the #timer inner HTML to be something like 00:00:00
    // *Change button to say "Start"
// 5. If the timer is in Paused mode, and it remains paused for 15 seconds:
    // *Stop counting up
    // *Reset the timer back to 0
    // *Update the #timer inner HTML to be something like 00:00:00
    // *Change button to say "Start"
// 6. Add comments to your code explaining how it's working.

var timer = document.querySelector('#timer')
var button = document.querySelector('#start');
//I made these variables so I could just refer to them as timer and button and not #timer and #button 

var ms = 0;
var s = 0;
var m = 0;

button.addEventListener('click', function(){
    setInterval (handlesStartButton, 10)
}); //putting the function here ties the timer to the event of click, instead of it just starting to count on its own.

function handlesStartButton() {
    ms++;
    timer.innerHTML = `<strong>${m}:${s}:${ms}</strong>`;

    if (ms >= 99) {
        s++
        ms=0
        setColor(); // call the color change function that I wrote beneath this funtion.
    }

    else if (s >= 59) {
        m++
        s=0
    }

    button.innerHTML = 'Pause';

    // if (button.innerHTML==="Pause") {
    //     button.addEventListener('click', function(){
    //         clearInterval;
    //     })
    // }

    // else {

    // };
}

// define the random color changes
function setColor() { 
         var red = Math.round(Math.random() * 255);
         var green = Math.round(Math.random() * 255);
         var blue = Math.round(Math.random() * 255);
         timer.style.color = `rgb(${red}, ${green}, ${blue})`;
}