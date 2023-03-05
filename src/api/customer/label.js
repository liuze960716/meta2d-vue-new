import request from "@/utils/request";
const service =
  window.CONFIG.services.system +
  window.CONFIG.services.wecom +
  "/customer/tag";

// 客户标签

/**
 * 标签列表获取
 * {
    "pageNum": "当前页",
    "pageSize": "每页显示条数",
    "gourpName": "标签组名"
    "groupTagType": "标签分组类型(1:客户标签;2:群标签)"
}
 */
export function getList(params) {
  return request({
    url: service + "/tagGroupList",
    params,
  });
}
/**
 * 基础标签列表
 * @param {Object} data
 */
export function basisTagList(data) {
  return request({
    url: service + "/basisTagList",
    method: "post",
    data,
  });
}

/**
 * 删除标签组
 * @param {Object} data
 */
export function deleteTagGroups(data) {
  return request({
    url: service + "/deleteTagGroups",
    method: "post",
    data,
  });
}
/**
 * 删除标签
 * @param {Object} data
 */
export function deleteTag(data) {
  return request({
    url: service + "/delete",
    method: "post",
    data,
  });
}

/**
 * 基础标签新增
 * @param {Object} data
 */
export function basisTagAdd(data) {
  return request({
    url: service + "/basisTagAdd",
    method: "post",
    data,
  });
}

/**
 * 手动标签-开关查询
 * @param {Object} data
 */
export function getTagSwitch(data) {
  return request({
    url: service + "/tagSwitch",
  });
}
/**
 * 手动标签-开关操作
 * @param {Object} data
 */
export function switchEnable(data) {
  return request({
    url: service + "/switchEnable",
    method: "post",
    data,
  });
}
/**
 * 手打标签-下载CSV模板
 * @param {Object} data
 */
export function downloadTemplate(data) {
  return request({
    url: service + "/downloadTemplate",
    method: "post",
    data,
  });
}
/**
 * 客户标签-导出标签(通用)
 * @param {Object} data
 */
export function basisExport(data) {
  return request({
    url: service + "/basisExport",
    method: "post",
    data,
  });
}

/**
 * 手打标签-打标任务列表
 * @param {Object} data
 */
export function tagTaskList(params) {
  return request({
    url: service + "/tagTaskPage",
    params,
  });
}

/**
 * 手打标签-人群包打标(创建打包任务)
 * @param {Object} data
 */
export function makeTag(data) {
  return request({
    url: service + "/makeTag",
    method: "post",
    data,
  });
}

/**
 * 手打标签-手动标签列表
 * @param {Object} data
 */
export function manualTagList(data) {
  return request({
    url: service + "/manualTagList",
    method: "post",
    data,
  });
}
/**
 * 新增客户标签
 * @param {Object} data 
{
    "gourpName": "标签组名称",
    "weTags": [{
        "name": "标签名"
    }]
}
 */
export function add(data) {
  return request({
    url: service,
    method: "post",
    data,
  });
}

/**
 * 客户标签编辑
 * @param {*} data
 */
export function update(data) {
  return request({
    url: service + "/update",
    method: "post",
    data,
  });
}
/**
 * 开启-关闭精选标签
 * @param {*} data
 */
export function updateTagShow(data) {
  return request({
    url: service + "/updateTagShow",
    method: "post",
    data,
  });
}
/**
 * 新建标签组&标签列表
 * @param {*} data
 */
export function createTagGroup(data) {
  return request({
    url: service + "/create",
    method: "post",
    data,
  });
}
/**
 * 获取客户标签
 * @param {*} params
 */
export function getAllLabel(params) {
  return request({
    url: service + "/tagModule/tagList",
    params,
  });
}

/**
 * 标签批量删除接口
 * @param {*} ids
 */
export function remove(ids) {
  return request({
    url: service + "/" + ids,
    method: "DELETE",
  });
}

/**
 * 同步标签
 */
export function syncTag() {
  return request({
    url: service + "/syncTagData",
    method: "post",
  });
}

/**
 * 同步标签按钮状态
 */
export function syncButton() {
  return request({
    url: service + "/syncButton",
    method: "post",
  });
}

/**
 * 查看上传日志，下载人群包
 */
export function downloadCsv(data) {
  return request({
    url: service + "/downloadCsv",
    method: "post",
    data,
  });
}

/**
 * 获取数量
 */
export function taskCount(params) {
  return request({
    url: service + "/taskCount",
    method: "GET",
    params,
  });
}
