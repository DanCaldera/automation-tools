// Given an array of integers and a number that is the window, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.
// Note that a subarray must consist of consecutive elements from the original array. In the example below, the maximum sum of a subarray of length 2 is 8; the subarray is [4,5].

function maxSubarraySum(arr, n) {
  let maxSum = -Infinity
  let currentSum = 0
  for (let i = 0; i < n; i++) {
    currentSum += arr[i]
  }
  maxSum = Math.max(maxSum, currentSum)
  for (let i = n; i < arr.length; i++) {
    currentSum = currentSum - arr[i - n] + arr[i]
    maxSum = Math.max(maxSum, currentSum)
  }
  return maxSum
}

// Test cases
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)) // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)) // 17
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 3)) // 10
