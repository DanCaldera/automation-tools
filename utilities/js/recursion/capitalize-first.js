// Capitalaze the first letter of a string in an array of strings, and return a new array.

const capitalizeFirst = arr => {
  if (arr.length === 0) return []
  return [arr[0][0].toUpperCase() + arr[0].slice(1)].concat(capitalizeFirst(arr.slice(1)))
}
