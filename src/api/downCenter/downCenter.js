import request from '@/utils/request'
const service = window.CONFIG.services.system

/**
 * 下载中心列表
 * @params {taskId} 任务id
 */
export function downList(data) {
  return request({
    url: service + '/download/task/list',
    method: 'post',
    data
  })
}

/** 
 * 删除
 * @params {taskId} 任务id
*/
export function deleteItem(params) {
  return request({
    url: service + '/download/task/delete',
    method: 'get',
    params
  })
}

/** 
 *  重新生成
 * @params {taskId} 任务id
*/
export function rebuild(params) {
  return request({
    url: service + '/download/task/re_create',
    method: 'get',
    params
  })
}

/**
 * 下载文件
 * @params {taskId} 任务id
 */
export function downloadFile(params) {
  return request({
    url: service + '/download/task/download_file',
    method: 'get',
    params
  })
}