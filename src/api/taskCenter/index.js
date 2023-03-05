import request from '@/utils/request'
let getway = window.CONFIG.services.system
const service = getway

// 查询主任务列表
export function mainTaskList(params) {
    return request({
        url: service + '/wecom/taskplan/list',
        method: 'get',
        params
    })
}
// 删除主任务
export function mainTaskDelete (params) {
    return request({
      url: service + '/wecom/taskplan',
      method: 'delete',
      params
    })
}
// 任务计划-新增
export function planTaskAdd(data) {
    return request({
        url: service + '/wecom/taskplan/add',
        method: 'post',
        data
    })
}
// 任务计划-编辑
export function planTaskEdit(data) {
    return request({
        url: service + '/wecom/taskplan/update',
        method: 'post',
        data
    })
}
// 任务计划-复制
export function planTaskCopy(data) {
    return request({
        url: service + '/wecom/taskplan/copy',
        method: 'post',
        data
    })
}
// 主任务下所有子任务查询
export function getAllSubTask(params) {
    return request({
        url: service + '/wecom/plantask/list',
        method: 'get',
        params
    })
}
// 删除子任务
export function deleteSubTask (params) {
    return request({
      url: service + '/wecom/plantask',
      method: 'delete',
      params
    })
}
// 取消任务
export function cancelSubTask (params) {
    return request({
      url: service + `/wecom/plantask/cancel?id=${params.id}`,
      method: 'GET',
      params
    })
}
// 主任务统计数据查询
export function getMainTaskStatistics(params) {
    return request({
        url: service + '/wecom/taskplan',
        method: 'get',
        params
    })
}
// 主任务明细列表
export function getSubTaskList(params) {
    return request({
        url: service + '/wecom/taskplan/task_detail',
        method: 'get',
        params
    })
}
// 主任务明细列表导出
export function exportTaskDetail(params) {
    return request({
        url: service + '/wecom/taskplan/export_task_detail',
        method: 'get',
        params
    })
}
//员工完成数据导出
export function userCompletedExport(params) {
    return request({
        url: service + '/wecom/plantask/user_completed_export',
        method: 'get',
        params
    })
}
// 客户沟通数据导出
export function customerCommunicateExport(params) {
    return request({
        url: service + '/wecom/plantask/customer_communicate_export',
        method: 'get',
        params
    })
}
//社群沟通数据导出
export function communityCommunicateExport(params) {
    return request({
        url: service + '/wecom/plantask/community_communicate_export',
        method: 'get',
        params
    })
}
// 子任务信息查询
export function getSubTaskBaseInfo(params) {
    return request({
        url: service + '/wecom/plantask/get',
        method: 'get',
        params
    })
}
// 子任务统计数据查询
export function getSubTaskStatistics(params) {
    return request({
        url: service + '/wecom/plantask/data_statistics',
        method: 'get',
        params
    })
}
// 1V1任务沟通完成明细列表
export function getOneSubTaskDetailList(params) {
    return request({
        url: service + '/wecom/plantask/1v1_data_detail',
        method: 'get',
        params
    })
}
// 1V1任务沟通完成明细列表
export function getSocialSubTaskDetailList(params) {
    return request({
        url: service + '/wecom/plantask/community_data_detail',
        method: 'get',
        params
    })
}
// 符合标签客户列表
export function tagCustomerList(params) {
    return request({
        url: service + '/wecom/plantask/tag_customer_list',
        method: 'get',
        params
    })
}
// 符合标签客户列表
export function getTaskplan(params) {
    return request({
        url: service + '/wecom/taskplan/get',
        method: 'get',
        params
    })
}

// 子任务计划-新增
export function saveSonPlantask(data) {
    return request({
        url: service + '/wecom/plantask/save',
        method: 'post',
        data
    })
}
// 子任务计划-复制
export function copySonPlantask(data) {
  return request({
      url: service + '/wecom/plantask/copy',
      method: 'post',
      data
  })
}
// 子任务计划-编辑
export function  upadteSonPlantask(data) {
    return request({
        url: service + '/wecom/plantask/update',
        method: 'post',
        data
    })
}
export function  upadteSonPlantaskCalculate(data) {
    return request({
        url: service + '/wecom/plantask/update_calculate',
        method: 'post',
        data
    })
}
//选择客户条件下拉选项
export function  customerConditionSelect() {
  return request({
      url: service + '/wecom/plantask/customer_condition_select',
      method: 'get'
  })
}
//下载导入的模版
export function  downLoadTemplate(params) {
  return request({
      url: service + '/wecom/plantask/download_template',
      method: 'get',
      responseType: "blob",
      params
  })
}
//提前计算的配置时间分钟数
export function  calculationTime() {
  return request({
      url: service + '/wecom/taskplan/calculation_time',
      method: 'get'
  })
}
// 判断任务是否计算
export function  isCalculateApi(params) {
  return request({
      url: service + '/wecom/plantask/isCalculate',
      method: 'GET',
      params
  })
}