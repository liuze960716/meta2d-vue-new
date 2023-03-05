import request from '@/utils/request'
const service = window.CONFIG.services.system + window.CONFIG.services.wecom

/**
 * 获取渠道管理列表
 * @param {*} data 
 */
export function getList(data) {
  return request({
    url: service + '/channel/list',
    method: 'POST',
    data
  })
}
/**
 * 获取渠道管理详细信息
 * @param {*} data 
 */
export function getInfo(id) {
  return request({
    url: service + '/channel/' + id
  })
}

/**
 * 渠道管理修改渠道
 * @param {*} data 
 */
export function editChannel(data) {
  return request({
    url: service + '/channel',
    method: 'PUT',
    data
  })
}
/**
 * 渠道管理新增渠道
 * @param {*} data 
 */
export function addChannel(data) {
  return request({
    url: service + '/channel',
    method: 'POST',
    data
  })
}
/**
 * 获取渠道统计列表
 * @param {*} data 
 */
export function getChannelList(data) {
  return request({
    url: service + '/statistic/getChannelList',
    method: 'POST',
    data
  })
}

/**
 * 列表数据导出
 * @param {*} params 
 */
export function editChannelInfo(data) {
  return request({
    url: service + '/statistic/export',
    method: 'POST',
    data
  })
}

/**
 * 获取列表数据
 * @param {*} params 
 */
export function getStatisticList(data) {
  return request({
    url: service + '/statistic/list',
    method: 'POST',
    data
  })
}
/**
 * 获取汇总数据
 * @param {*} data 
 */
export function getStatisticTotal(data) {
  return request({
    url: service + '/statistic/total',
    method: 'POST',
    data
  })
}
/**
 * 获取汇总数据
 * @param {*} data 
 */
export function getNotInWelcomeAndActList(id) {
  return request({
    url: service + '/statistic/getNotInWelcomeAndActList/' + id,
    method: 'GET',
  })
}

