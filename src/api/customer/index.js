import request from "@/utils/request";
let getway = window.CONFIG.services.system + window.CONFIG.services.wecom;
const service = getway + "/customer";
const service1 = window.CONFIG.services.system + "/chat/msg"

/**
 * 客户列表     (好友关系表)
 * @param {*} params
 */
export function getWeCustomerList(params) {
  return request({
    url: service + "/findWeCustomerList",
    method: "get",
    params,
  });
}
/**
 * 客户列表     (客户总列表)
 * @param {*} params
 */
 export function getWeCustomerAllList(params) {
  return request({
    url: service + "/findWeCustomerAllList",
    method: "get",
    params,
  });
}
/**
 * 客户列表
 * @param {*} params
 * {
    "pageNum": "当前页",
    "pageSize": "每页显示条数",
    "name": "客户名称",
    "userId": "添加人id",
    "tagIds": "标签id,多个标签，id使用逗号隔开",
    "beginTime": "开始时间",
    "endTime": "结束时间"
    status: 0 客户状态 0正常 1删除
}
 */
export function getList(params) {
  return request({
    url: service + "/list",
    method: "get",
    params,
  });
}

/**
 * 客户列表
 * @param {*} params
 */
 export function getListNew(params) {
  return request({
    url: service + "/lose/list",
    params,
  });
}

/**
 * 客户同步接口
 */
export function sync() {
  return request({
    url: service + "/synchWeCustomer",
  });
}

/**
 * 编辑客户标签
 * @param {*} data
 * {
    "externalUserid": "外部联系人userid",
    "addTag": [{
        "id": "标签id",
        "groupId": "标签组id",
        "name": "标签名"
    }]
}
 */
export function makeLabel(data) {
  return request({
    url: service + "/makeLabel",
    method: "post",
    data,
  });
}

/**
 * 移除客户标签
 * @param {*} data
 * {
    "externalUserid": "外部联系人userid",
    "addTag": [{
        "id": "标签id",
        "groupId": "标签组id",
        "name": "标签名"
    }]
}
 */
export function removeLabel(data) {
  return request({
    url: service + "/removeLabel",
    method: "DELETE",
    data,
  });
}

/**
 * 客户生日编辑
 * @param {*} data
 * {
  "externalUserid": "",
  "birthday": ""
}
 */
export function updateBirthday(data) {
  return request({
    url: service,
    method: "PUT",
    data,
  });
}

/**
 * 好友 -- 导出
 */
export function exportCustomer(query) {
  return request({
    url: service + "/export",
    method: "get",
    params: query,
  });
}

/**
 * 客户流失通知开关
 * @param {*} params [string]	是	客户流失通知开关 0:关闭 1:开启
 */
export function lossRemind(data) {
  return request({
    url: getway + "/corp/changeNoticeSwitch",
    method: "POST",
    data,
  });
}

export function getLossRemindStatus(status) {
  return request({
    url: getway + "/corp/getNoticeSwitch",
  });
}
/**
 * 在职继承
 * @param {*} data
{
        handoverUserId: '', //移交人
        takeoverUserId: '', //接受人
        externalUserid: '' //客户id，多个客户使用逗号隔开
      }
 * @returns
 */
export function jobExtends(data) {
  return request({
    url: service + "/jobExtends",
    method: "POST",
    data,
  });
}

/**
 *客户详情基础(基础信息+社交关系)
 * @param {*}
 * externalUserid	是	当前客户id
 * userId	是	当前跟进人id
 * delFlag: 1 用户是否流失 0 未流失，1流失
 */
export function getDetail(params) {
  return request({
    url: service + "/findWeCustomerBaseInfo",
    params,
  });
}

/**
 *客户画像汇总
 * @param {*}
 * externalUserid	是	当前客户id
 * delFlag: 1 用户是否流失 0 未流失，1流失
 */
export function getSummary({ externalUserid, delFlag }) {
  return request({
    url: service + "/findWeCustomerInfoSummary",
    params: {
      externalUserid,
      delFlag,
    },
  });
}
/**
 * 客户画像(单个跟进人) 获取单个跟进人的客户信息
 * @param {*} params
 * externalUserid	是	当前客户id
 * userId	是	当前跟进人id
 * delFlag: 1 用户是否流失 0 未流失，1流失
 * @returns
 */
export function getCustomerInfoByUserId({ externalUserid, userId, delFlag }) {
  return request({
    url: service + "/findWeCustomerInfoByUserId",
    params: {
      externalUserid,
      userId,
      delFlag,
    },
  });
}

/**
 *跟进记录(客户轨迹)
 userId  trajectoryType 二个值得默认传null，则返回所有
 * @param {*}
 * externalUserid	是	当前客户id
 * userId		当前跟进人id
 * pageNum: 1,
   pageSize: 10,
   trajectoryType		1:信息动态;2:社交动态;3:跟进动态;4:待办动态
 */
export function getFollowUpRecord(params) {
  return request({
    url: service + "/followUpRecord",
    params,
  });
}

/**
 * 客户轨迹同步/同步指定客户个人朋友圈互动数据
 * @param {*} userIds 指定员工id,多个用逗号隔开
 * @returns
 */
export function syncTrack(userIds) {
  return request({
    url: getway + `/moments/synchMomentsInteracte/${userIds}`,
  });
}

/**
 * 客户列表 -- 添加员工list
 * @param {*} name 模糊搜索值
 * @returns
 */
export function getUserIdList(params) {
  return request({
    url: getway + `/user/findAllWeUser`,
    method: "GET",
    params,
  });
}

/**
 * 客户列表 -- 分组
 * @param {*} name 模糊搜索值
 * @returns
 */
export function getCustomerGroupList(data) {
  return request({
    url: getway + "/customerGroup/list",
    method: "POST",
    data,
  });
}

/**
 * 客户列表 -- 会员等级list
 * @param {*} name 模糊搜索值
 * @returns
 */
export function getVipList(params) {
  return request({
    url: getway + `/vip/list`,
    method: "GET",
    params,
  });
}

/**
 * 客户详情 -- 添加员工list
 * @param {*}
 * @returns
 */
export function getTrackUsersListApi(params) {
  return request({
    url: service + `/getTrackUsersByExternalUserid`,
    method: "GET",
    params,
  });
}

/**
 * 客户详情 -- 所在客群list
 * @param {*}
 * @returns
 */
export function getGroupsListApi(params) {
  return request({
    url: service + `/getGroupsByExternalUserid`,
    method: "GET",
    params,
  });
}

/**
 * 客户 -- 导出
 */
 export function exportCustomerAll(query) {
  return request({
    url: service + "/customer/export",
    method: "get",
    params: query,
  });
}
