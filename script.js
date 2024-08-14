var timer = 60;
var score = 0;
var hitrn = 0;

function incresescore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitBtn").textContent = hitrn;
}

function makeBubble() {
    var clutter = "";
    for (var i = 1; i <= 119; i++) {
        var vn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${vn}</div>`;
    }
    document.querySelector("#patb").innerHTML = clutter;
}

function runTimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timerint);
            document.querySelector("#patb").innerHTML="`<h1>Game over</h1>`";
        }
    }, 1000);
}

document.querySelector("#patb").addEventListener("click", function (dets) {
    console.log("Clicked element:", dets.target);  // Log the clicked element
    if (dets.target.classList.contains("bubble")) {  // Ensure the click is on a bubble
        var clickedNum = Number(dets.target.textContent);  // Get the number inside the bubble
        console.log("Clicked number:", clickedNum);  // Log the number
        if (clickedNum === hitrn) {  // Compare with the target number
            incresescore();  // Increase the score
            makeBubble();  // Generate new bubbles
            getNewHit();  // Set a new target number
        }
    } else {
        console.log("Clicked element is not a bubble.");  // Log if the element is not a bubble
    }
});

runTimer();  // Start the timer
makeBubble();  // Generate the initial bubbles
getNewHit();  // Set the initial target number
