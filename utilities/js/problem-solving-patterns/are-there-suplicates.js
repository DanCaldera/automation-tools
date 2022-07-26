const areThereDuplicates = (...args) => {
  const argsSet = new Set(args)
  return argsSet.size !== args.length
}

console.log(areThereDuplicates(1, 2, 3))
