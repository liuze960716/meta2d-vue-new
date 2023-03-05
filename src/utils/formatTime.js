export function getAgoDay(n) {
  let date = new Date();
  let seperator = "-";
  let newDate = new Date(date.getTime() - n * 24 * 60 * 60 * 1000);
  // 年
  let year = newDate.getFullYear();
  // 月
  let monthDate = newDate.getMonth() + 1;
  let month = monthDate < 10 ? "0" + monthDate : monthDate;
  // 日
  let dayDate = newDate.getDate();
  let day = dayDate < 10 ? "0" + dayDate : dayDate;
  return (
    year.toString() + seperator + month.toString() + seperator + day.toString()
  );
}
export function getTime(datePar) {
  const d = datePar ? new Date(datePar) : new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toJSON().substr(0, 10);
}

/**
 * @description: 获取当前时间
 * @return {*} yyyymmddhhmmss
 */
export function currentTime() {
  const nowstr = new Date();
  const datenow =
    nowstr.getFullYear() +
    (nowstr.getMonth() + 1 < 10 ? "0" : "") +
    (nowstr.getMonth() + 1) +
    (nowstr.getDate() < 10 ? "0" : "") +
    nowstr.getDate() +
    (nowstr.getHours() < 10 ? "0" : "") +
    nowstr.getHours() +
    (nowstr.getMinutes() < 10 ? "0" : "") +
    nowstr.getMinutes() +
    (nowstr.getSeconds() < 10 ? "0" : "") +
    nowstr.getSeconds();
  return datenow;
}
