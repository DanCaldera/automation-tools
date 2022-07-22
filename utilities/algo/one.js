function getMinimumDays(parcels) {
  let dayOneArr = parcels
    .map((item, index) => {
      if (item <= 1) return item
      return item - 2
    })
    .filter((el, i) => {
      return el !== 0
    })

  const a1 = dayOneArr.filter((el, i) => {
    return el !== 0
  })

  if (a1.length == 0) {
    return 1
  }

  let dayTwoArr = dayOneArr.map((item, index) => {
    if (item <= 0) return item
    return item - 1
  })

  const a2 = dayTwoArr.filter((el, i) => {
    return el !== 0
  })

  if (a2.length == 0) {
    return 2
  }

  let dayThreeArr = dayTwoArr
    .map((item, index) => {
      if (item <= 0) return item
      return item - 1
    })
    .filter((item, index) => {
      item !== 0
    })

  const a3 = dayThreeArr.filter((el, i) => {
    return el !== 0
  })

  if (a3.length == 0) {
    return 3
  }
}
