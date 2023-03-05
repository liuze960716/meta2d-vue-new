import request from "@/utils/request";
const service = window.CONFIG.services.system + "/wecome/group";

/**
 * 社群数据分析
 */
export function getAnalysis(params) {
  return request({
    url: service + "/getDataAnalysis",
    params,
  });
}

/**
 * 数据趋势-社群总数
 * @param {*} params
 * chatIds	否[]群聊
 * idownerIds	否[]群主
 * beginTime	是 开始时间
 * endTime	是 结束时间
 * flag 否 只看导购数据(0:关闭，1：开启),默认关闭
 */
export function getTotalCnt(params) {
  return request({
    url: service + "/getGroupCnt",
    params,
  });
}

/**
 * 数据趋势-社群成员总数
 * @param {*} params
* chatIds	否[]群聊id
ownerIds	否[]群主id
beginTime	是 开始时间
endTime	是 结束时间
 */
export function getTotalCntMember(params) {
  return request({
    url: service + "/getGroupMemberCnt",
    params,
  });
}

/**
 * 数据报表-社群总数
 * @param {*}
 * chatIds	否[]群聊id
 * ownerIds	否[]群主id
 * beginTime	是 开始时间
 * endTime	是 结束时间
 * flag 否 只看导购数据(0:关闭，1：开启),默认关闭
 */
export function getRealCnt(params) {
  return request({
    url: service + "/getGroupCntPage",
    params,
  });
}

/**
 * 数据报表-社群成员总数
 * @param {*}
 * chatIds	否[]群聊id
 * ownerIds	否[]群主id
 * beginTime	是 开始时间
 * endTime	是 结束时间
 * flag 否 只看导购数据(0:关闭，1：开启),默认关闭
 */
export function getRealCntMember(params) {
  return request({
    url: service + "/getGroupMemberCntPage",
    params,
  });
}

/**
 * 客群数据-客群实时数据-导出
 * @param {*} params
 * chatIds	否[]群聊id
 * ownerIds	否[]群主id
 * beginTime	是 开始时间
 * endTime	是 结束时间
 * flag 否 只看导购数据(0:关闭，1：开启),默认关闭
 */
export function realDataExport(params) {
  return request({
    url: service + "/exportGroupCnt",
    params,
  });
}

/**
 * 客群数据-客群成员实时数据-导出
 * @param {*} params
 * chatIds	否[]群聊id
 * ownerIds	否[]群主id
 * beginTime	是 开始时间
 * endTime	是 结束时间
 * flag 否 只看导购数据(0:关闭，1：开启),默认关闭
 */
export function realDataExportMember(params) {
  return request({
    url: service + "/exportGroupMemberCnt",
    params,
  });
}
