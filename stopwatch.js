//I made timer and button variables so I could just refer to them as timer and button and not #timer and #button all over the place. Jeff liked this plan and said that the document part had to go here, too; that I couldn't just leave the variables empty. Is that right? 
var timer = document.querySelector('#timer');
var button = document.querySelector('#start');


//tried to make these double-digit 00s, but that didn't do anything. Though I am pretty enamored with the way it pulses each second without that extra 0 placeholder.
var ms = 0;
var s = 0;
var m = 0;

var running; // made this in case the trick to the pausing thing was turning off the running function for a while.
var reset; //made this to deal with extra pause functions, but might not need it?

 button.addEventListener('click', function(e){ //putting the function here ties the timer to the event of click, instead of it just starting to count on its own.
     //not sure why we need the e here; I had it here, but Jeff told me that was wrong and that I should delete it. 
    if (e.target.innerHTML === 'Start') {
        e.target.innerHTML = 'Pause';
        running = setInterval (handlesTimer, 10);
    }

    else if (e.target.innerHTML === 'Pause') {
        e.target.innerHTML = 'Resume';
        clearInterval(running);
        setTimeout(reset, 15000);
    }

    else if (e.target.innerHTML === 'Resume') {
        e.target.innerHTML = 'Pause';
        running = setInterval (handlesTimer, 10);
    }
}); 

//resetting after 15 seconds to 0, called the function in first else if for single click.
function reset () {
    ms = 0;
    s = 0;
    m = 0;
    button.innerText='Start';
    timer.innerText='00:00:00';
};

//timer setup
function handlesTimer() {
    ms++;
    timer.innerHTML = `<strong>${m}:${s}:${ms}</strong>`;

    if (ms >= 99) {
        s++;
        ms=0;
        setColor(); // call the color change function that I wrote beneath this funtion.
    }

    else if (s >= 59) {
        m++;
        s=0;
    }
};

// double clicks on Pause should: stop counting up, reset timer to 0, update timer to 00:00:00, button to Start.
button.addEventListener('dblclick', function(e){
    if (e.target.innerHTML === 'Pause') {
        e.target.innerHTML = 'Start'; 
        clearInterval(running);
        ms = 0;
        s = 0;
        m = 0;
        timer.innerHTML = '00:00:00';
    }
});

// define the random color changes
function setColor() { 
         var red = Math.round(Math.random() * 255);
         var green = Math.round(Math.random() * 255);
         var blue = Math.round(Math.random() * 255);
         timer.style.color = `rgb(${red}, ${green}, ${blue})`;
};