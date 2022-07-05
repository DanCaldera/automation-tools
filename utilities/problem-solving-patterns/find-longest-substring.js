const findLongestSubstring = str => {
  let longest = 0
  let current = 0
  let seen = {}
  let start = 0
  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    if (seen[char]) {
      start = Math.max(start, seen[char])
    }
    current = i - start + 1
    longest = Math.max(longest, current)
    seen[char] = i + 1
  }
  return longest
}

console.log(findLongestSubstring('rithmschool'))
console.log(findLongestSubstring('thisisawesome'))
