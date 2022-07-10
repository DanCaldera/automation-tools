function processLogs(logs, threshold) {
  let result = []
  let map = new Map()
  for (let i = 0; i < logs.length; i++) {
    let log = logs[i].split(' ')
    let sender = log[0]
    let recipient = log[1]
    let count = map.get(sender)
    if (count === undefined) {
      map.set(sender, 1)
    } else {
      map.set(sender, count + 1)
    }
    count = map.get(recipient)
    if (count === undefined) {
      map.set(recipient, 1)
    } else {
      map.set(recipient, count + 1)
    }
  }
  for (let [key, value] of map) {
    if (value > threshold) {
      result.push(key)
    }
  }
  return result.sort((a, b) => map.get(b) - map.get(a))
}
