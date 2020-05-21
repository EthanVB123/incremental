var time = 5
var points = 0
var pointsButton = document.getElementsByClassName('gainpointsbtn')[0]
var pointsDisplay = document.getElementsByClassName('pointsdisplay')[0]
var timeDisplay = document.getElementsByClassName('timedisplay')[0]
pointsButton.addEventListener('click', gainPoints)
setInterval(tickClock, 100)

function gainPoints() {
    points += 1
    pointsDisplay.innerText='This run\'s score is: ' + points
    console.log(points)
}
function tickClock() {
    // The clock tick speed is currently 10 FPS, just to make the maths easier.
    time -= 0.1
    if (time < 0) {
        time = 0
        playSound(foghorn1)
    }
    time = time.toFixed(2)
    timeDisplay.innerText = 'You have '+time+' seconds remaining.'
    
}
function playSound(sound) {
    var sound = document.getElementsByClassName(sound)[0]
    sound.Play();
}