const secondsHands = document.getElementById('seconds-hands')
const minutesHands = document.getElementById('minutes-hands')
const hoursHands = document.getElementById('hours-hands')

function getTime() {
    const now = new Date()
    const seconds = now.getSeconds()
    const minutes = now.getMinutes()
    const hours = now.getHours()
    const timeInterval = 6

    

    secondsHands.style.transform = 'rotate('+ (seconds * timeInterval) + 'deg )'
    minutesHands.style.transform = 'rotate('+ (minutes * timeInterval + seconds / 10) + 'deg )'
    hoursHands.style.transform = 'rotate('+ (hours * 30 + minutes / 2 ) + 'deg )'

}

setInterval(getTime, 100)