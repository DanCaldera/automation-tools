const maxSubArraySum = (arr, n) => {
  let maxSum = -Infinity
  let currentSum = 0

  for (let i = 0; i < n; i++) {
    currentSum += arr[i]
    maxSum = Math.max(maxSum, currentSum)
    if (currentSum < 0) {
      currentSum = 0
    }
  }
  return maxSum
}

console.log(maxSubArraySum([1, 2, 5, -7, 2, 3], 3))
console.log(maxSubArraySum([1, 2, 5, -7, 2, 3], 4))
console.log(maxSubArraySum([-1, -2, -5, -7, -2, -3], 4))
console.log(maxSubArraySum([-1, -2, -5, -7, -2, -3], 2))
console.log(maxSubArraySum([], 4))
