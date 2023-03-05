import request from '@/utils/request'
const service = window.CONFIG.services.system + window.CONFIG.services.wecom + '/shoppingGuid'
const serviceUser = window.CONFIG.services.system + window.CONFIG.services.wecom + '/user'
/**
 * 导购列表
 * @param {*} data
 */
export function getList(params) {
  return request({
    url: service + '/list',
    params
  })
}

/**
 * 删除导购
 * @param {*} id
 */
export function deleteList(id) {
  return request({
    url: service + '/' + id,
    method: 'delete',
  })
}

/**
 * 转换导购身份
 * @param {*} data
 */
export function updateAccount(data) {
  return request({
    url: service + '/updateAccountType',
    method: 'POST',
    data,
  })
}
/**
 * 新增导购信息
 * @param {*} data
 */
export function addShoppingGuid(data) {
  return request({
    url: service + '/add',
    method: 'PUT',
    data,
  })
}

/**
 * 设置或编辑自动添加规则
 * @param {*} data
 */
export function autoAddRule(data) {
  return request({
    url: service + '/autoAddRule',
    method: 'PUT',
    data: data
  })
}
/**
 * 查询自动添加规则
 * @param {*} params
 */
export function getAutoAddRule(params) {
  return request({
    url: service + '/autoAddRule',
    params
  })
}
/**
 * 导购列表
 * @param {*} params
 */
export function synchShoppingGUid(params) {
  return request({
    url: service + '/synchShoppingGUid',
    params
  })
}

/**
 * 导购列表
 * @param {*} params
 */
export function getShoppingGuidInfo(id) {
  return request({
    url: service + '/' + id
  })
}
/**
 * 更新导购基础信息
 * @param {*} id
 */
export function update(id) {
  return request({
    url: service + '/update/' + id,
    method: 'POST',
  })
}
/**
 * 设置管理范围
 * @param {*} params
 */
export function updateScope(data) {
  return request({
    url: service + '/updateScope',
    method: 'POST',
    data
  })
}

/**
 * 获取导购列表更新状态
 * @param {*} params
 */
export function getRenewalState(params) {
  return request({
    url: service + '/getRenewalState',
    params
  })
}

/**
 * 获取所有员工的接口(不分页)
 * @returns
 */
export function getAllStaff(params) {
  return request({
    url: serviceUser + '/findAllWeUser',
    params
  })
}

/**
 * 生成导购海报
 * @returns
 */
export function createQrCode(id) {
  return request({
    url: service + '/createQrCode/' + id
  })
}

/**
 * 获取全部已添加的导购信息
 * @returns
 */
export function getSelectAll(id) {
  return request({
    url: service + '/selectAll'
  })
}