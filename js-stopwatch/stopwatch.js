const time = document.querySelector('.stopwatch')
const actionButton = document.querySelector('#action-button')
const resetButton = document.querySelector('#reset-button')
const stopwatch = { elapsedTime: 0 }

actionButton.addEventListener('click', () => {
  if (actionButton.innerHTML === 'Start') {
    startStopwatch();
    actionButton.innerHTML = 'Stop'
  } else {
    stopwatch.elapsedTime += Date.now() - stopwatch.startTime
    clearInterval(stopwatch.intervalId)
    actionButton.innerHTML = 'Start'
  }
})

resetButton.addEventListener('click', () => {
  stopwatch.elapsedTime = 0
  stopwatch.startTime = Date.now()
  displayTime(0, 0, 0, 0)
})

function startStopwatch() {
  stopwatch.startTime = Date.now();
  // run 'setInterval()' and save id
  stopwatch.intervalId = setInterval(() => {
    // calculate elapsed time
    const elapsedTime = Date.now() - stopwatch.startTime + stopwatch.elapsedTime
    // calculate the different elapsed time measurements
const milliseconds = parseInt((elapsedTime%1000)/10)    
const seconds = parseInt((elapsedTime/1000)%60)
const minutes = parseInt((elapsedTime/(1000*60))%60)
const hour = parseInt((elapsedTime/(1000*60*60))%24);
    // display the time elapsed
    displayTime(hour, minutes, seconds, milliseconds)
  }, 100);
}

function displayTime(hour, minutes, seconds, milliseconds) {
  const leadZeroTime = [hour, minutes, seconds, milliseconds].map(time => time < 10 ? '0${time}' : time)
time.innerHTML = leadZeroTime.join(':')
};