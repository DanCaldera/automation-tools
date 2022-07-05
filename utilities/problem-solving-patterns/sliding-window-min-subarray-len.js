const minSubArrayLen = (arr, target) => {
  let left = 0
  let right = 0
  let currentSum = 0
  let minLen = Infinity
  while (right < arr.length) {
    currentSum += arr[right]
    right++
    while (currentSum >= target) {
      minLen = Math.min(minLen, right - left)
      currentSum -= arr[left]
      left++
    }
  }
  return minLen === Infinity ? 0 : minLen
}

// Test cases
console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)) // 2
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)) // 2
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 2, 13, 15, 5, 12, 3], 18)) // 1
console.log(minSubArrayLen([1, 4, 16, 22, 5, 3], 5)) // 0
console.log(minSubArrayLen([1, 4, 16, 22, 5, 3], 0)) // 0
console.log(minSubArrayLen([], 0)) // 0
