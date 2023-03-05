import request from "@/utils/request";
const service =
  window.CONFIG.services.system +
  window.CONFIG.services.wecom +
  "/operation/customer";

const newService = window.CONFIG.services.system + "/wecome/cuctomer";

/**
 * 客户数据分析
 */
export function getAnalysis() {
  return request({
    url: service + "/getAnalysis",
  });
}

/**
 * 客户数据-客户总数
 * @params {*} params
 * deptIds	否[]部门
userIds	否[]员工
beginTime	是 开始时间
endTime	是 结束时间
 */
export function getTotalCnt(params) {
  return request({
    url: service + "/getTotalCnt",
    params,
  });
}

/**
 * 客户数据
 * @params {*}
 * deptIds	否[]部门
 * userIds	否[]员工
 * beginTime	是 开始时间
 * endTime	是 结束时间
 */
export function getRealCnt(params) {
  return request({
    url: newService + "/getCustomerRealPageCnt",
    params,
  });
}

/**
 * 客户数据-员工客户排行
 * @params {*}
 * deptIds	否[]部门
userIds	否[]员工
beginTime	是 开始时间
endTime	是 结束时间
 */
export function getRankCnt(params) {
  return request({
    url: newService + "/getRankCnt",
    params,
  });
}

/**
 * 客户数据-实时数据-导出
 * @params {*} params
 * deptIds	否[]部门
userIds	否[]员工
beginTime	是 开始时间
endTime	是 结束时间
 */
export function realDataExport(params) {
  return request({
    url: service + "/real/export",
    params,
  });
}

/**
 * 好友数据分析
 * @params {*} params
 * beginTime	是 开始时间
 * endTime  是  结束时间
 * flag 只看导购数据(0:关闭，1：开启),默认开启
 * userIds 员工
 */
export function getDataAnalysis(params) {
  return request({
    url: newService + "/getDataAnalysis",
    params,
  });
}
/**
 * 数据概览
 * @params {*} params
 * startDate	是 开始时间
 * endDate  是  结束时间
 * flag 只看导购数据(0:关闭，1：开启),默认开启
 */
export function getCorpBasicData(params) {
  return request({
    url: newService + "/getCorpBasicData",
    params,
  });
}
/**
 * 好友数据
 * @params {*} params
 * beginTime	是 开始时间
 * endTime  是  结束时间
 * flag 只看导购数据(0:关闭，1：开启),默认开启
 * userIds 员工
 */
export function getCustomerCnt(params) {
  return request({
    url: newService + "/getCustomerCnt",
    params,
  });
}
/**
 * 客户数据-导出
 * @params {*} params
 * deptIds	否 [] 部门
 * userIds	否 [] 员工
 * flag  否 只看导购数据(0:关闭，1：开启),默认开启
 * beginTime 是 开始时间
 * endTime	是 结束时间
 */
export function realExport(params) {
  return request({
    url: newService + "/exportCustomerRealPageCnt",
    params,
  });
}
