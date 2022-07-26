function linearSearch(arr, n) {
  for (let i in arr) {
    if (arr[i] === n) return Number(i)
  }

  return -1
}
