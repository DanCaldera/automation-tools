const insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    let j = i
    while (j > 0 && arr[j] < arr[j - 1]) {
      let temp = arr[j]
      arr[j] = arr[j - 1]
      arr[j - 1] = temp
      j--
    }
  }

  return arr
}

// function insertionSort(arr) {
//   var currentVal
//   for (var i = 1; i < arr.length; i++) {
//     currentVal = arr[i]
//     for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//       arr[j + 1] = arr[j]
//     }
//     arr[j + 1] = currentVal
//   }
//   return arr
// }

// insertionSort([2, 1, 9, 76, 4])
