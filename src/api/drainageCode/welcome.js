import request from '@/utils/request'
const service = window.CONFIG.services.system + window.CONFIG.services.wecom + '/welcomeMsg'

/**
 * 获取欢迎语列表
 * @param {*} params 
 */
export function getList(params) {
  return request({
    url: service + '/list',
    params
  })
}
/**
 * 获取客户欢迎语详细信息
 * @param {*} type 欢迎语类型 id
 */
export function getWelcomeInfo(type, id) {
  return request({
    url: service + '/' + type + '/' + id,
  })
}

/**
 * 根据欢迎语模板id获取模板使用范围
 * @param {*} id
 */
export function getScop(id) {
  return request({
    url: service + '/scop/' + id
  })
}

/**
 * 新增欢迎语模板
 * @param {*} data
 */
export function addWelcome(data) {
  return request({
    url: service + '/add',
    method: 'POST',
    data
  })
}
/**
 * 更新欢迎语模板
 * @param {*} data
 */
export function updateWelcome(data) {
  return request({
    url: service + '/update',
    method: 'POST',
    data
  })
}

/**
 * 是否展示提示语
 * @param {*} data
 */
export function judgeBindCode(params) {
  return request({
    url: service + '/channel/judgeBindCode',
    method: 'get',
    params
  })
}

/**
 * 获取卡等
 * @param {*} data
 */
export function cardGradeType() {
  return request({
    url: service + '/cardGrade/type',
    method: 'get',
  })
}
// /**
//  * 新增欢迎语模板
//  * @param {*} data
// {
//     "welcomeMsg": "欢迎语",
//     "mediaId": "素材的id",
//     "welcomeMsgTplType": "欢迎语模板类型:1:员工欢迎语;2:部门员工欢迎语;3:客户群欢迎语 ",
//     "weMsgTlpScopes": {
//         "useUserId": "使用人的id"
//     }
// }
//  */
// export function add(data) {
//   return request({
//     url: service,
//     method: 'POST',
//     data
//   })
// }

/**
 * 删除欢迎语
 * @param {*} 
 */
export function remove(data) {
  return request({
    url: service + '/del',
    method: 'POST',
    data
  })
}

// 预览数据
export function getPreview(id) {
  return request({
    url: service + '/preview',
    params: {
      id
    }
  })
}

/**
 * 渠道欢迎语新增-渠道列表
 * @param {*} 
 */
export function getChannelList(params) {
  return request({
    url: service + '/channel/list',
    params
  })
}

/**
 * 默认欢迎语新增-使用范围检测
 * @param {*} 
 */
export function getCheckUseScope(params) {
  return request({
    url: service + '/checkUseScope',
    params
  })
} 