import request from "@/utils/request";
let getway = window.CONFIG.services.system + window.CONFIG.services.wecom;
const service = getway + "/group";

export function getDetail(chatId) {
  return request({
    url: service + `/chat/chatDetail/${chatId}`,
    method: "get",
  });
}

/**
 * 客户群列表
 * @param {*} data
 * {
pageNum	是	当前页
pageSize	是	每页显示条数
groupName	是	群名
groupLeaderName	是	群主姓名,多个使用逗号隔开
userIds	是	群主userId,多个使用逗号隔开
tagIds	是	标签id,多个使用逗号隔开
beginTime:
endTime:
}
 */
export function getList(params) {
  return request({
    url: service + "/chat/list",
    method: "get",
    params,
  });
}

/**
 * 群成员列表
 * @param {*} params
 * {
  "chatId": "群id",
  "name": "成员名称",
  "pageNum": "",
  "pageSize": ""
}
 */
export function getMembers(params) {
  return request({
    url: service + "/chat/members",
    params,
  });
}

/**
 * 客户群同步接口
 */
export function sync() {
  return request({
    url: service + "/chat/synchWeGroup",
  });
}

/**
 * 编辑群标签
 * {
  "chatId": "ad cillum",
  "weeGroupTagRel": [
    {
      "chatId": "consectetur deserunt eu in",
      "id": "Ut sed ullamco non",
      "tagId": "Lorem"
    }
  ]
}
 * @param {*} data
 * @returns
 */
export function makeGroupTag(data) {
  return request({
    url: service + "/chat/makeGroupTag",
    method: "post",
    data,
  });
}
/**
 * 群主 列表
 */
export function groupManagerApi() {
  return request({
    url: service + "/chat/groupTypeList",
  });
}
/**
 * 群运营者 列表
 */
export function groupOperatorApi(params) {
  return request({
    url: getway + "/user/findAllWeUser",
    method: "GET",
    params,
  });
}
/**
 * 群运营者 列表
 */
export function groupDepartmentApi(params) {
  return request({
    url: getway + "/userDepartment/findDeptList",
    method: "GET",
    params,
  });
}
/**
 * 群类型 列表  不分页
 */
export function getGroupTypeApi() {
  return request({
    url: service + "/chat/typeList",
  });
}
/** 导出 */
export function exportOperlog(params) {
  return request({
    url: service + "/chat/export",
    method: "GET",
    params,
  });
}
/** 社群 总览数据 */
export function getStatistics(params) {
  return request({
    url: service + "/chat/overviewStatistics",
    method: "GET",
    params,
  });
}
/** 群类型列表 分页 */
export function getGroupTypePagingApi(params) {
  return request({
    url: service + "/chat/groupTypeList",
    method: "GET",
    params,
  });
}
/** 群类型 新增 */
export function addGroupTypeApi(data) {
  return request({
    url: service + "/chat/groupTypeAdd",
    method: "POST",
    data,
  });
}
/** 群类型 编辑 */
export function setGroupTypeApi(data) {
  return request({
    url: service + "/chat/groupTypeUpdate",
    method: "POST",
    data,
  });
}
/** 群类型 删除 */
export function delGroupTypeApi(data) {
  return request({
    url: service + `/chat/groupType?typeId=${data.typeId}`,
    method: "DELETE",
  });
}

/** 单个  群类型 设置 */
export function setSingleGroupTypeApi(data) {
  return request({
    url: service + `/chat/groupTypeSetting`,
    method: "POST",
    data,
  });
}

/** 数据概览详情 */
export function getOverviewDetail(params) {
  return request({
    url: service + `/chat/dataOverview`,
    method: "GET",
    params,
  });
}

/** 留存 */
export function getRetainedList(params) {
  return request({
    url: getway + `/memberRecord/retained`,
    method: "GET",
    params,
  });
}

/** 进群 */
export function getInGroupList(params) {
  return request({
    url: getway + `/memberRecord/enter`,
    method: "GET",
    params,
  });
}

/** 退群 */
export function getOutGroupList(params) {
  return request({
    url: getway + `/memberRecord/exit`,
    method: "GET",
    params,
  });
}

/** 留存  导出 */
export function exportGroupRetained(params) {
  return request({
    url: getway + `/memberRecord/retained/export`,
    method: "GET",
    params,
  });
}

/** 进群  导出 */
export function exportInGroup(params) {
  return request({
    url: getway + `/memberRecord/enter/export`,
    method: "GET",
    params,
  });
}

/** 退群 导出 */
export function exportOutGroup(params) {
  return request({
    url: getway + `/memberRecord/exit/export`,
    method: "GET",
    params,
  });
}
