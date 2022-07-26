const naiveStringSearch = (string, searchString) => {
  let count = 0
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < searchString.length; j++) {
      if (string[i + j] !== searchString[j]) {
        break
      }
      if (j === searchString.length - 1) {
        count++
      }
    }
  }
  return count
}
