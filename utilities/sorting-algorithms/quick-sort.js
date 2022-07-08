const pivotHelper = (arr, start = 0, end = arr.length) => {
  let pivot = arr[start]
  let left = start + 1
  let right = end

  while (left <= right) {
    while (left <= right && arr[left] <= pivot) left++
    while (left <= right && arr[right] >= pivot) right--
    if (left < right) {
      let temp = arr[left]
      arr[left] = arr[right]
      arr[right] = temp
    }
  }

  let temp = arr[start]
  arr[start] = arr[right]
  arr[right] = temp

  return right
}

const quickSort = (arr, start = 0, end = arr.length) => {
  if (start >= end) return
  let pivot = pivotHelper(arr, start, end)
  quickSort(arr, start, pivot - 1)
  quickSort(arr, pivot + 1, end)
}
