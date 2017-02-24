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

//I made timer and button variables so I could just refer to them as timer and button and not #timer and #button all over the place. Jeff liked this plan and said that the document part had to go here, too; that I couldn't just leave the variables empty. Is that right? 
var timer = document.querySelector('#timer')
var button = document.querySelector('#start');


//tried to make these double-digit 00s, but couldn't pull it off. Though I am pretty enamored with the way it pulses each second without that extra 0 placeholder.
var ms = 0;
var s = 0;
var m = 0;

var running; // made this in case the trick to the pausing thing was turning off the running function for a while. 

running = button.addEventListener('click', function(){
    setInterval (handlesStartButton, 10)
}); //putting the function here ties the timer to the event of click, instead of it just starting to count on its own. HOWEVER, something is making it double its speed every time you click the button (no matter if the Pause code is commented out or running).

// stopPropagation(); // Tried this, because of what an online article said. I thought it might have something to do with why it was doubling itself, but it didn't stop it from doubling. The article said: At any point, an event handler can call the stopPropagation method on the event object to prevent handlers “further up” from receiving the event. This can be useful when, for example, you have a button inside another clickable element and you don’t want clicks on the button to activate the outer element’s click behavior.

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
    };

    button.innerHTML = 'Pause';
    // pausing(); //call the pausing function here?? Nope.

// trying to make the pausing thing happen within the original function?   Nope.
    if (button.innerHTML==="Pause") {
        // button.removeEventListener('click', running); // thought maybe we needed to cancel out the original click, but no dice.
        button.addEventListener('click', function(){
            clearInterval;
        })
    }

    // else if {

    // };
}

// define the random color changes
function setColor() { 
         var red = Math.round(Math.random() * 255);
         var green = Math.round(Math.random() * 255);
         var blue = Math.round(Math.random() * 255);
         timer.style.color = `rgb(${red}, ${green}, ${blue})`;
}

//pause function? tried putting it here as a function and calling it up there.  no go.
// function pausing() {
//     if (button.innerHTML==="Pause") {
//         button.removeEventListener('click', running); // thought maybe we needed to cancel out the original click, so added running variable. doesn't seem to have helped.
//         button.addEventListener('click', function(){
//             clearInterval;
//         })
//     }

// }