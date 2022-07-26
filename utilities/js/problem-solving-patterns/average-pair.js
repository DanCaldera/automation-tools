// given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

// Incorrect One
// const averagePair = (arr, target) => {
//   let left = 0
//   let right = arr.length - 1
//   while (left <= right) {
//     let mid = left + right / 2
//     if (arr[mid] === target) {
//       return true
//     } else if (arr[mid] < target) {
//       left = mid + 1
//     } else {
//       right = mid - 1
//     }
//   }
//   return false
// }

// Correct One
// Time Complexity: O(n)
const averagePair = (arr, num) => {
  let left = 0
  let right = arr.length - 1
  while (left < right) {
    let avg = (arr[left] + arr[right]) / 2
    if (avg === num) {
      return true
    } else if (avg < num) {
      left++
    } else {
      right--
    }
  }
  return false
}

// Test cases
console.log(averagePair([1, 2, 3], 2.5)) // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 14, 19], 8)) // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)) // false
console.log(averagePair([], 4)) // false
