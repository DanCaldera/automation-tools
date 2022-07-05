function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false
  const newStr1 = str1.split('')
  const newStr2 = str2.split('')

  for (let i = 0; i < str1.length; i++) {
    const correctIndex = newStr2.indexOf(newStr1[i])
    if (correctIndex === -1) {
      return false
    }
    newStr2.splice(correctIndex, 1)
  }
  return true
}

console.log(validAnagram('asd', 'dsa'))
