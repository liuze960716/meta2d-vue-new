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
  let date = new Date(timestamp)
  let o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }

  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,

        RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      )
    }
  }

  return fmt
}
/**
 * 格式化钱
 *
 * @param {*} money
 */
export const formatMoney = money => (money ? (money / 100).toFixed(2) : 0);

export const dateFormat =(time, formatStr) =>{
  let date;
  if (typeof time == "number" && time) {
    date = new Date(time * 1000);
  } else {
    if (!(time instanceof Date)) {
      throw new TypeError(`time:${time}不是一个有效日期类型`);
      // return time;
    }
  }

  const o = {
    // 键值对形式的数组。只能通过加强的for循环来迭代取值
    "M+": date.getMonth() + 1, // month
    "d+": date.getDate(), // day
    "h+": date.getHours(), // hour
    "m+": date.getMinutes(), // minute
    "s+": date.getSeconds(), // second
    "q+": Math.floor((date.getMonth() + 3) / 3), // quarter (季度)
    S: date.getMilliseconds() // millisecond (毫秒)
  };

  if (/(y+)/.test(formatStr)) {
    formatStr = formatStr.replace(
      RegExp.$1,
      (date.getFullYear() + "") //  RegExp.$1 : 取正则表达式中第一个分组匹配到的内容
        .substr(4 - RegExp.$1.length)
    );
  }

  for (const k in o) {
    // 加强的for循环。k为键值对数组o中的键，故o[k]为对应的值
    if (new RegExp("(" + k + ")").test(formatStr)) {
      formatStr = formatStr.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(String(o[k]).length)
      );
    }
  }
  return formatStr;
}