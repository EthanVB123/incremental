var time = 5
var timePermitted = 5
var timeUpgradeCost = 5

var points = 0
var highScore = 0

var pointsButton = document.getElementsByClassName('gainpointsbtn')[0]
var pointsDisplay = document.getElementsByClassName('pointsdisplay')[0]
var timeDisplay = document.getElementsByClassName('timedisplay')[0]
var HSDisplay = document.getElementsByClassName('highscoredisplay')[0]
var upgradepts = document.getElementsByClassName('upgradepts')[0]
var timeupgradebtn = document.getElementsByClassName('timeupgradebtn')[0]

var upgradePointsSpent = 0
var upgradePointsRemaining = 0



pointsButton.addEventListener('click', gainPoints)
setInterval(tickClock, 100)

timeupgradebtn.addEventListener('click', buyTimeUpgrade)




function gainPoints() {
    points += 1
    pointsDisplay.innerText='This run\'s score is: ' + points
    console.log(points)
}
function tickClock() {
    
    // The clock tick speed is currently 10 FPS, just to make the maths easier.
    time -= 0.1
    if (time < 0) {
        time = timePermitted
        if (points > highScore) {
            highScore = points
            HSDisplay.innerText = 'High score: '+ highScore
        }
        points = 0
        
    }
    time = time.toFixed(1)
    timeDisplay.innerText = 'You have '+time+' seconds remaining.'
    upgradePointsRemaining = highScore - upgradePointsSpent
    upgradepts.innerText = 'Remaining upgrade points: '+upgradePointsRemaining
    
}
function buyTimeUpgrade() {
    if (upgradePointsRemaining >= timeUpgradeCost) {
        upgradePointsSpent += Number(timeUpgradeCost)
        timePermitted += 1
        timeUpgradeCost *= 1.5
        timeUpgradeCost = timeUpgradeCost.toFixed(0)
        timeupgradebtn.innerText = 'Time up 1 second. Cost: '+timeUpgradeCost+' points.'
        console.log(upgradePointsSpent)
    } 
}