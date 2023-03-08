/*
 * @Descripttion: 
 * @Version: 1.0
 * @Author: 13146504151@163.com
 * @Date: 2023-01-16 09:49:12
 * @LastEditors: 13146504151@163.com
 * @LastEditTime: 2023-03-08 09:54:06
 */
/**
 * 时间格式化
 *
 * @param {*} timestamp
 * @param {*} fmt
 * @returns
 */
export const formatDate = (timestamp, fmt) => {
  if (!fmt) {
    fmt = 'yyyy-MM-dd hh:mm:ss'
  }
  const date = new Date(timestamp)
  const o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds(), // 毫秒
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      `${date.getFullYear()}`.substr(4 - RegExp.$1.length)
    )
  }

  // eslint-disable-next-line no-restricted-syntax
  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,

        RegExp.$1.length === 1 ? o[k] : `00${o[k]}`.substr(`${o[k]}`.length)
      )
    }
  }

  return fmt
}

/**
 * @description: 格式化钱
 * @return {*} money
 */
export const formatMoney = (money) => (money ? (money / 100).toFixed(2) : 0)

/**
 * @description: 当前时间
 * @return {*} 年-月-日
 */
export function getAgoDay(n) {
  const date = new Date()
  const seperator = '-'
  const newDate = new Date(date.getTime() - n * 24 * 60 * 60 * 1000)
  // 年
  const year = newDate.getFullYear()
  // 月
  const monthDate = newDate.getMonth() + 1
  const month = monthDate < 10 ? `0${monthDate}` : monthDate
  // 日
  const dayDate = newDate.getDate();
  const day = dayDate < 10 ? `0${dayDate}` : dayDate
  return (
    year.toString() + seperator + month.toString() + seperator + day.toString()
  )
}

export function getTime(datePar) {
  const d = datePar ? new Date(datePar) : new Date()
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset())
  return d.toJSON().substr(0, 10)
}

/**
 * @description: 获取当前时间
 * @return {*} yyyymmddhhmmss
 */
export function currentTime() {
  const nowstr = new Date();
  const datenow =
    nowstr.getFullYear() +
    (nowstr.getMonth() + 1 < 10 ? '0' : '') +
    (nowstr.getMonth() + 1) +
    (nowstr.getDate() < 10 ? '0' : '') +
    nowstr.getDate() +
    (nowstr.getHours() < 10 ? '0' : '') +
    nowstr.getHours() +
    (nowstr.getMinutes() < 10 ? '0' : '') +
    nowstr.getMinutes() +
    (nowstr.getSeconds() < 10 ? '0' : '') +
    nowstr.getSeconds()
  return datenow
}

// 日期格式化
export function parseTime(time, pattern) {
  if (arguments.length === 0 || !time) {
    return null
  }
  const format = pattern || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (typeof time === 'string' && /^[0-9]+$/.test(time)) {
      time = parseInt(time, 10)
    } else if (typeof time === 'string') {
      time = time.replace(new RegExp(/-/gm), '/')
    }
    if (typeof time === 'number' && time.toString().length === 10) {
      time *= 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay(),
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value]
    }
    if (result.length > 0 && value < 10) {
      value = `0${value}`
    }
    return value || 0
  })
  return time_str
}


// 添加日期范围
export function addDateRange(params, dateRange) {
  const search = params
  search.beginTime = ''
  search.endTime = ''
  // eslint-disable-next-line eqeqeq
  if (dateRange != null && dateRange != '') {
    // eslint-disable-next-line prefer-destructuring
    search.beginTime = this.dateRange[0]
    // eslint-disable-next-line prefer-destructuring
    search.endTime = this.dateRange[1]
  }
  return search
}
