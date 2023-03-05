import request from "@/utils/request";
// let getway = window.CONFIG.services.system + window.CONFIG.services.wecom
let getway = window.CONFIG.services.system;
// const service = getway + '/customer'
const service = getway;

//消息通知列表
export function queryNoticeListApi(params) {
  return request({
    url: service + "/wecom/msgInform/list",
    method: "get",
    params,
  });
}

//获取所有部门列表
export function depListApi(params) {
  return request({
    url: service + "/wecom/department/list",
    method: "get",
    params,
  });
}

// 获取部门下员工
export function depPeoplesApi(data) {
  return request({
    url: service + "/wecom/user/userSelectorlist",
    method: "post",
    data,
  });
}

// 素材分组
export function materialGroupListApi(params) {
  return request({
    url: service + "/wecom/category/list",
    method: "get",
    params,
  });
}

// 素材列表
export function materialListApi(params) {
  return request({
    url: service + "/wecom/material/list",
    method: "get",
    params,
  });
}

//下载员工模板
export function downloadStaffTemplateApi() {
  return request({
    url: service + "/commonImport/downloadTemplateByUser",
    method: "get",
  });
}
//成员导入
/**入参fileUrl  返回checkId*/
export function importStaffApi(data) {
  return request({
    header: {
      "Content-Type": "multipart/form-data",
    },
    url: service + "/commonImport/importExcel",
    method: "post",
    data,
  });
}
//根据checkId获取导入的员工数据
export function getImportStaffDataApi(id) {
  return request({
    url: service + `/commonImport/checkImportResult/${id}`,
    method: "get",
  });
}
//新增消息通知
export function addNoticeMesApi(data) {
  return request({
    url: service + "/wecom/msgInform",
    method: "post",
    data,
  });
}
//编辑消息通知
export function editNoticeApi(data) {
  return request({
    url: service + "/wecom/msgInform",
    method: "PUT",
    data,
  });
}
//删除消息通知
export function deleteNoticeMessApi(id) {
  return request({
    url: service + `/wecom/msgInform/${id}`,
    method: "delete",
  });
}
//下载数据
export function downLoadDataApi(data) {
  return request({
    url: service + `/wecom/msgInform/record/${data.msgInformId}`,
    method: "get",
    data,
  });
}
//获取消息通知详细信息
export function getNoticeInfoApi(id) {
  return request({
    url: service + `/wecom/msgInform/${id}`,
    method: "get",
  });
}

/** 批量社群导入   入参fileUrl*/
export function importGroupApi(data) {
  return request({
    header: {
      "Content-Type": "multipart/form-data",
    },
    url: service + "/group/chat/importData",
    method: "post",
    data,
  });
}

//下载员工模板
export function downloadTemplateApi() {
  return request({
    url: service + "/wecom/group/chat/downloadFile",
    method: "get",
  });
}

/**
 * 过滤 图片｜视频 大小
 * @returns data
 */
export function filterFile(data) {
  return request({
    url: service + "/wecom/groupmsg/template/material/verify",
    method: "POST",
    data,
  });
}
