// stringify numbers nested in an object

// const stringifyNumbers = o => {
//   for (let key in o) {
//     if (typeof o[key] === 'object') {
//       stringifyNumbers(o[key])
//     } else if (typeof o[key] === 'number') {
//       o[key] = o[key].toString()
//     }
//   }
//   return o
// }

function stringifyNumbers(obj) {
  var newObj = {}
  for (var key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString()
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key])
    } else {
      newObj[key] = obj[key]
    }
  }
  return newObj
}
