var time = 5
var points = 0
var pointsButton = document.getElementsByClassName('gainpointsbtn')[0]
var pointsDisplay = document.getElementsByClassName('pointsdisplay')[0]
pointsButton.addEventListener('click', gainPoints)

function gainPoints() {
    points += 1
    pointsDisplay.innerText='You have' + points + 'points.'
    console.log(points)

}