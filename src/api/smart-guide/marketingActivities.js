import request from '@/utils/request'
import {filterParams} from '@/utils/index'

const service = window.CONFIG.services.system


// 营销活动列表
export function activityList (data) {
  return request({
    url: service + '/mk/activity/list',
    method: 'post',
    data: filterParams(data)
  })
}
// 营销活动-查看详情
export function activityDetail (params) {
  return request({
    url: service + '/mk/activity/detail',
    method: 'get',
    params,
  })
}
// 营销活动-查看详情
export function editActivityDetails (params) {
  return request({
    url: service + '/mk/activity/editActivityDetails',
    method: 'get',
    params,
  })
}
// 新增营销活动
export function addactivity (data) {
    return request({
      url: service + '/mk/activity/save',
      method: 'post',
      data: data
    })
}
// 营销活动 上架-下架
export function enableActivity (data) {
    return request({
      url: service + '/mk/activity/enable',
      method: 'post',
      data: data
    })
}
// 营销活动 删除
export function deleteActivity (data) {
    return request({
      url: service + '/mk/activity/delete',
      method: 'post',
      data: data
    })
}
// 营销活动 删除
export function activityStatistics (data) {
    return request({
      url: service + '/mk/activity/activityStatistics',
      method: 'post',
      data: data
    })
}
// 营销活动 活动人数明细
export function participateActivityList (data) {
    return request({
      url: service + '/mk/activity/participateActivityList',
      method: 'post',
      data: filterParams(data)
    })
}
// 营销活动 活动人数明细-详情
export function activityRecordDetails (data) {
    return request({
      url: service + '/mk/activity/activityRecordDetails',
      method: 'post',
      data: data
    })
}
// 营销活动 活动人数明细-详情 报名活动审核
export function signUpAudit (data) {
    return request({
      url: service + '/mk/activity/audit',
      method: 'post',
      data: data
    })
}
// 营销活动  - 更新
export function updateActivity (data) {
    return request({
      url: service + '/mk/activity/update',
      method: 'post',
      data: data
    })
}
// 图片上传
export function uploadImageMk (data,config) {
    return request({
      url: service + '/mk/activity/uploadImage',
      method: 'post',
      data: data,
      ...config
    })
}
// 图片上传
export function uploadImages (data,config) {
    return request({
      url: service + '/mk/activity/uploadImages',
      method: 'post',
      data: data,
      ...config
    })
}


// 导出人员数据

export function exportActivity (data) {
  return request({
    url: service + '/mk/activity/export',
    method: 'post',
    data: filterParams(data)
  })
}

// 

export function getDayPunchInfo (params) {
  return request({
    url: service + '/mk/activity/activityRecordDetails/getPunchInfo',
    method: 'get',
    params,
  })
}