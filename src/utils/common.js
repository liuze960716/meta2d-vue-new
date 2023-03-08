/**
 * 通用js方法封装处理
 */

const baseURL = window.lwConfig.BASE_API + window.lwConfig.SYSTEM_API

// 表单重置
export function resetForm(refName) {
  if (this.$refs[refName]) {
    this.$refs[refName].resetFields()
  }
}



// 回显数据字典
export function selectDictLabel(datas, value) {
  var actions = []
  Object.keys(datas).some((key) => {
    if (datas[key].dictValue == '' + value) {
      actions.push(datas[key].dictLabel)
      return true
    }
  })
  return actions.join('')
}

// 回显数据字典（字符串数组）
export function selectDictLabels(datas, value, separator) {
  var actions = []
  var currentSeparator = undefined === separator ? ',' : separator
  var temp = value.split(currentSeparator)
  Object.keys(value.split(currentSeparator)).some((val) => {
    Object.keys(datas).some((key) => {
      if (datas[key].dictValue == '' + temp[val]) {
        actions.push(datas[key].dictLabel + currentSeparator)
      }
    })
  })
  return actions.join('').substring(0, actions.join('').length - 1)
}

// 通用下载方法
export function download(fileName) {
  if(fileName.match(/^https:\/\/|http:\/\//)) {
    window.location.href = fileName
  }  else {
    window.location.href =
      baseURL + '/common/download?fileName=' + encodeURI(fileName) + '&delete=' + true
  }
}

// 字符串格式化(%s )
export function sprintf(str) {
  var args = arguments,
    flag = true,
    i = 1
  str = str.replace(/%s/g, function () {
    var arg = args[i++]
    if (typeof arg === 'undefined') {
      flag = false
      return ''
    }
    return arg
  })
  return flag ? str : ''
}

// 转换字符串，undefined,null等转化为""
export function praseStrEmpty(str) {
  if (!str || str == 'undefined' || str == 'null') {
    return ''
  }
  return str
}

/**
 * 构造树型结构数据
 * @param {*} data 数据源
 * @param {*} id id字段 默认 'id'
 * @param {*} parentId 父节点字段 默认 'parentId'
 * @param {*} children 孩子节点字段 默认 'children'
 */
export function handleTree(data, id, parentId, children) {
  id = id || 'id'
  parentId = parentId || 'parentId'
  children = children || 'children'
  let result = []
  data = JSON.parse(JSON.stringify(data))
  if (!Array.isArray(data)) {
    return result
  }
  data.forEach((item) => {
    delete item[children]
  })
  let map = {}
  data.forEach((item) => {
    map[item[id]] = item
  })
  data.forEach((item) => {
    let parent = map[item[parentId]]
    if (parent) {
      parent[children] || (parent[children] = [])
      parent[children].push(item)
    } else {
      result.push(item)
    }
  })
  return result
}

/**
 * dataURL转化为File对象
 * @param {*} dataURL 本地数据 base64
 */
export function dataURLtoFile(dataURL) {
  const arr = dataURL.split(',')
  const mime = arr[0].match(/:(.*?);/)[1]
  const bstr = atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)
  while (n) {
    u8arr[n - 1] = bstr.charCodeAt(n - 1)
    n -= 1 // to make eslint happy
  }
  return new File([u8arr], '', { type: mime })
}

// 判断空对象、空数组、空字符串、0
export const isNull = (data) => {
  if (
    typeof data == "undefined" ||
    data == null ||
    data == "" ||
    (typeof data === "object" && data instanceof Array && data.length == 0)
  ) {
    return true;
  } else {
    if (typeof data === "object" && !(data instanceof Array)) {
      if (Object.keys(data).length == 0) {
        return true;
      } else {
        return false;
      }
    }
  }
};

/**
 * 数组根据id 去重
 * @param { Array } arr
 * @returns { Array }
 */
 export const unique = (arr, key = "id") => {
  const tmp = new Map();
  return arr.filter(item => {
    return !tmp.has(item[key]) && tmp.set(item[key], 1);
  });
};

export const getCurrentTime = () => {
  var date = new Date();//当前时间
  var year = date.getFullYear() //年
  var month = repair(date.getMonth() + 1);//月
  var day = repair(date.getDate());//日
  var hour = repair(date.getHours());//时
  var minute = repair(date.getMinutes());//分
  var second = repair(date.getSeconds());//秒
  
  //当前时间 
  var curTime = year + "-" + month + "-" + day
          + " " + hour + ":" + minute + ":" + second;
  return curTime;
}

//若是小于10就加个0

function repair(i){
  if (i >= 0 && i <= 9) {
      return "0" + i;
  } else {
      return i;
  }
}