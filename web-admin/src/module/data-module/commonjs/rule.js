/*
 *长度验证
 * */
let validatLength = (rule, value, callback) => {
  if (value === '' || value === null || undefined === value) {
    callback()
  }
  if (rule.maxlength < value.length) {
    callback(new Error(rule.msg))
  } else {
    callback()
  }
}
/**
 * 电话验证
 * */
let validatPhone = (rule, value, callback) => {
  if (value === '' || value === null || undefined === value) {
    callback()
  }
  let patt1 = /^1(3|4|5|6|7|8|9)\d{9}$/
  let patt2 = /0\d{2}\d{7,8}/
  let patt3 = /0\d{2}-\d{7,8}/
  if (patt1.test(value) || patt2.test(value) || patt3.test(value)) {
    callback()
  } else {
    callback(new Error(rule.msg))
  }
}
/**
 *身份证验证
 * */
let validatCard = (rule, value, callback) => {
  if (value === '' || value === null || undefined === value) {
    callback()
  }
  let patt1 = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
  if (!patt1.test(value)) {
    callback(new Error(rule.msg))
  } else {
    callback()
  }
}
/**
 *邮编验证
 * */
let validatPostcode = (rule, value, callback) => {
  if (value === '' || value === null || undefined === value) {
    callback()
  }
  let patt1 = /^[0-9]{6}$/
  if (!patt1.test(value)) {
    callback(new Error(rule.msg))
  } else {
    callback()
  }
}
/**
 * 数字验证
 * */
let validatNum = (rule, value, callback) => {
  if (value === '' || value === null || undefined === value) {
    callback()
  }
  let patt1 = /^[0-9]*$/
  if (!patt1.test(value)) {
    callback(new Error(rule.msg))
  } else {
    callback()
  }
}
/**
 * 邮箱验证
 * */
let validatEmail = (rule, value, callback) => {
  if (value === '' || value === null || undefined === value) {
    callback()
  }
  let patt1 = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
  if (!patt1.test(value)) {
    callback(new Error(rule.msg))
  } else {
    callback()
  }
}

export {
  validatLength,
  validatPhone,
  validatCard,
  validatPostcode,
  validatNum,
  validatEmail
}
