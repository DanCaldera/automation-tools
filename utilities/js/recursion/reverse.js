// reverse string with recursion
// Language: javascript

const reverse = str => {
  if (str.length === 1) return str
  return reverse(str.slice(1)) + str[0]
}
