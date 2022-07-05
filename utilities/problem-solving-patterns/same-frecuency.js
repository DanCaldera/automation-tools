const sameFrecuency = (num1, num2) => {
  const num1Frecuency = {}
  const num2Frecuency = {}
  const num1String = num1.toString()
  const num2String = num2.toString()

  for (let i = 0; i < num1String.length; i++) {
    const digit = num1String[i]
    num1Frecuency[digit] = (num1Frecuency[digit] || 0) + 1
  }

  for (let i = 0; i < num2String.length; i++) {
    const digit = num2String[i]
    num2Frecuency[digit] = (num2Frecuency[digit] || 0) + 1
  }

  for (let digit in num1Frecuency) {
    if (!(digit in num2Frecuency)) {
      return false
    }

    if (num1Frecuency[digit] !== num2Frecuency[digit]) {
      return false
    }
  }

  return true
}

console.log(sameFrecuency(55, 55))
console.log(sameFrecuency(55, 57))
console.log(sameFrecuency(55, 57))
