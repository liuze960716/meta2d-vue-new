import request from '@/utils/request'
const service = window.CONFIG.services.system + window.CONFIG.services.wecom + '/groupQrCode'

/**
 * 获取群活码列表
 * @param {*} params 
{
    "pageNum": "当前页",
    "pageSize": "每页显示条数",
    "configId": "群活码id",
    "name": "群活码名称",
}
 */
export function getList (params) {
  return request({
    url: service + '/list',
    params
  })
}

/**
 * 同步群活码
 * @param {*} params 
 */
export function syncWeGroupCode () {
  return request({
    url: service + '/syncWeGroupCode',
    method: 'POST'
  })
}

/**
 * 按照id下载明细
 * @param {*} params 
{
    "configId": "群活码id",
    "id": "主键id",
}
 */
export function exportDetail (params) {
  return request({
    url: service + '/export',
    params
  })
}

/**
 * 新增群活码
 * @param {*} params 
{
    "configId": "群活码id",
    "id": "主键id",
}
 */
export function addGroupCode (data) {
  return request({
    url: service + '/add',
    method: 'POST',
    data: data
  })
}

/**
 * 编辑保存群活码
 * @param {*} params 
{
    "configId": "群活码id",
    "id": "主键id",
}
 */
export function editGroupCode (data) {
  return request({
    url: service + '/edit',
    method: 'POST',
    data: data
  })
}

/**
 * 删除or批量删除
 * @param {*} params 
{
    "ids": "ids",
}
 */
export function deleteGroupCode (ids) {
  return request({
    url: service + '/delete/' +  ids,
  })
}

/**
 * 查询群活码
 * @param {*} params 
{
    "id": "id",
}
 */
export function getGroupCodeDetail (id) {
  return request({
    url: service + '/get/' +  id,
  })
}

/**
 * 添加社群-查询
 * @param {*} params 
{
    "chatInfo": "群详情",
    "pageNum": "当前页",
    "pageSize": 当前页大小,
    "type": 群名称:1 群ID:2 群主名称:3,
}
 */
export function getGroup (params) {
  return request({
    url: service + '/getGroup',
    params
  })
}