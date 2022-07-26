//This is an example of using Objects to create a stopwatch

function StopWatch() {
  let startTime,
    endTime,
    running,
    duration = 0

  this.start = function () {
    if (running) throw new Error('Stopwatch has already started')
    running = true
    startTime = new Date()
  }

  this.stop = function () {
    if (!running) throw new Error('Stopwatch is not running')
    endTime = new Date()
    running = false
    duration += (endTime - startTime) / 1000
  }

  this.reset = function () {
    if (running) throw new Error('Stopwatch is running')
    startTime = null
    endTime = null
    duration = 0
    running = false
  }

  Object.defineProperty(this, 'duration', {
    get: function () {
      return duration
    }
  })
}

const swo = new StopWatch()
