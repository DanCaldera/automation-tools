const sumZero = arr => {
  let left = 0
  let right = arr.length - 1
  while (left < right) {
    let sum = arr[left] + arr[right]
    if (sum === 0) {
      return [arr[left], arr[right]]
    } else if (sum > 0) {
      right--
    } else {
      left++
    }
  }
  return null
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]))
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3, 4]))
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3, 4, 5]))
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3, 4, 5, 6]))
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]))
