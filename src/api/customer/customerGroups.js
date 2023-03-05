import request from '@/utils/request'
import {filterParams} from '@/utils/index'

const service = window.CONFIG.services.system


// 分组活动列表
export function customerGroupList (data) {
  return request({
    url: service + `/wecom/customerGroup/list?pageNum=${data.pageNum}&pageSize=${data.pageSize}`,
    method: 'post',
    data: filterParams(data)
  })
}
// 新增分组
export function addCustomerGroup (data) {
  return request({
    url: service + '/wecom/customerGroup',
    method: 'post',
    data
  })
}
// 新增分组
export function oneButtonMarking (data) {
  return request({
    url: service + '/wecom/customerGroup/oneButtonMarking',
    method: 'post',
    data
  })
}
export function refreshCustomerCount (data) {
  return request({
    url: service + '/wecom/customerGroup/refreshCustomerCount',
    method: 'post',
    data
  })
}

// 分组列表（选择分组组件）
export function customerGroupComponentList (data) {
  return request({
    url: service + `/wecom/customerGroup/selectorList?pageNum=${data.pageNum}&pageSize=${data.pageSize}`,
    method: 'post',
    data: filterParams(data)
  })
}


// 客户标签
export function tagList (params) {
  return request({
    url: service + '/wecom/customer/tag/tagModule/tagList',
    method: 'get',
    params,
  })
}
// 客户标签
export function tagListOne (params) {
  return request({
    url: service + '/wecom/customer/tag/tagList',
    method: 'get',
    params,
  })
}
// 客户标签组
export function tagGroupList (params) {
  return request({
    url: service + '/wecom/customer/tag/tagModule/groupList',
    method: 'get',
    params,
  })
}
// 客户标签组
export function sacnGroup (ids) {
  return request({
    url: service + `/wecom/customerGroup/${ids}`,
    method: 'get',
  })
}

//删除消息通知
export function deleteGroup(ids) {
  return request({
    url: service + `/wecom/customerGroup/${ids}`,
    method: 'delete',
  })
}

// 编辑场景
export function editGroup(data) {
  return request({
    url: service + '/wecom/customerGroup',
    method: 'PUT',
    data
  })
}
export function refreshEnable() {
  return request({
    url: service + '/wecom/customerGroup/refreshEnable',
    method: 'get',
  })
}

