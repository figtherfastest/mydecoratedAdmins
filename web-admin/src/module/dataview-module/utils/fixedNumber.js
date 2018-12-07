export default {
  // 小于10前面加0
  fixedNumber (num) {
    return Number(num) < 10 ? `0${num}` : num
  },
  // 每间隔三位数加逗号
  addCommoa (num) {
    const str = num.toString()
    let firstIndex = Number(str.length) % 3
    const number = parseInt(str.length / 3)
    let arr = str.split('')
    if (firstIndex !== 0) {
      arr.splice(firstIndex, 0, ',')
      firstIndex++
    }
    for (let i = 1; i < number; i++) {
      arr.splice(firstIndex + i * 3, 0, ',')
      firstIndex++
    }
    return arr
  }
}
