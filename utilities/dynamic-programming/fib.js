const fib = (n, memo = []) => {
  if (memo[n]) return memo[n]
  return (memo[n] = n < 2 ? n : fib(n - 1, memo) + fib(n - 2, memo))
}

const fibTabulated = n => {
  const fibs = [0, 1]
  for (let i = 2; i <= n; i++) {
    fibs[i] = fibs[i - 1] + fibs[i - 2]
  }
  return fibs[n]
}
