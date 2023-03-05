import request from "@/utils/request";
const base = window.CONFIG.services.system;
const service = window.CONFIG.services.system + "/wecom/groupmsg/template";

/**
 * 新增群发
 * @param {Object} data
 */
export function add(data) {
  return request({
    url: service + "/add",
    method: "post",
    data,
  });
}

/**
 * 编辑群发 详情
 * @param {Object} data
 */
export function addDetail(params) {
  return request({
    url: service + `/get/${params.id}`,
    method: "GET",
  });
}

/**
 * 编辑群发
 * @param {Object} data
 */
export function update(data) {
  return request({
    url: service + "/update",
    method: "post",
    data,
  });
}

// 根据发送条件查询客户
export function getCustomerList(params) {
  return request({
    url: base + "/wecom/customer/findAllWeCustomerList",
    method: "get",
    params,
  });
}

/**
 *
 * @param {*} data
 * {
 * sender:创建人
content:内容
pushType:群发类型 0 发给客户 1 发给客户群
beginTime:开始时间
endTime:结束时间}
 */
export function getList(params) {
  return request({
    url: service + "/list",
    params,
  });
}

/**
 * 群发消息详情
 * @param {*} messageId:微信消息id
 */
export function getDetail(params) {
  return request({
    url: service + "/getStatisticsDetail",
    method: "GET",
    params,
  });
}

/**
 *
 * @param {*}
 * messageId:微信消息id
status:发送状态 0-未发送 1-已发送 2-因客户不是好友导致发送失败 3-因客户已经收到其他群发消息导致发送失败
 */
export function getPushResult(params) {
  return request({
    url: service + "/pushResults",
    params,
  });
}

/**
 * 同步消息发送结果
 * @param {*} data 
id:消息id
 */
export function syncMsg(params) {
  return request({
    url: service + "/Allsync",
    method: "GET",
    params,
  });
}

// 客户详情
export function resultList(data) {
  return request({
    url: service + "/send/result/list",
    params: data,
  });
}

// 员工详情
export function memberList(data) {
  return request({
    url: service + "/task/list",
    params: data,
  });
}

/**
 * 列表 取消发送
 * @param {*} data
 * id
 */
export function cancelSend(params) {
  return request({
    url: service + "/cancel",
    method: "GET",
    params,
  });
}

/**
 * 列表 终止发送
 * @param {*} data
 * id
 */
export function terminationSend(params) {
  return request({
    url: service + "/termination",
    method: "GET",
    params,
  });
}

/**
 * 群发消息详情 基础信息
 * @param {*} id:id
 */
export function getBasisDetail(params) {
  return request({
    url: service + `/get/${params.id}`,
    method: "GET",
  });
}

/**
 * 群发消息详情 客户导出
 * @param {*} params
 */
export function customerExport(params) {
  return request({
    url: service + `/send/result/list/export`,
    method: "GET",
    params,
  });
}

/**
 * 群发消息详情 员工导出
 * @param {*} params
 */
export function memberExport(params) {
  return request({
    url: service + `/task/list/export`,
    method: "GET",
    params,
  });
}
