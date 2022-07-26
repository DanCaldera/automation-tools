//product of array recursion

const productOfArray = arr => {
  if (arr.length === 1) return arr[0]
  return arr[0] * productOfArray(arr.slice(1))
}
