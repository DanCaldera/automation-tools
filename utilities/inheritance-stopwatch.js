//This is an example of using Inheritance to create a stopwatch
//This is onot valid, demostration only
//Premature optimization is the root of all evil

class StopWatchInheritance {
  constructor() {
    let startTime,
      endTime,
      running,
      duration = 0

    Object.defineProperty(this, 'duration', {
      get: function () {
        return duration
      },
      set: function (value) {
        duration = value
      }
    })

    Object.defineProperty(this, 'startTime', {
      get: function () {
        return startTime
      }
    })

    Object.defineProperty(this, 'endTime', {
      get: function () {
        return endTime
      }
    })

    Object.defineProperty(this, 'running', {
      get: function () {
        return running
      }
    })
  }
  start() {
    if (this.running) throw new Error('Stopwatch has already started')
    this.running = true
    this.startTime = new Date()
  }
  stop() {
    if (!this.running) throw new Error('Stopwatch is not running')
    this.endTime = new Date()
    this.running = false
    this.duration += (this.endTime - this.startTime) / 1000
  }
  reset() {
    if (this.running) throw new Error('Stopwatch is running')
    this.startTime = null
    this.endTime = null
    this.duration = 0
    this.running = false
  }
}

const swi2 = new StopWatchInheritance()
swi2.duration = 0
