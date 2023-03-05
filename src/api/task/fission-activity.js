import request from '@/utils/request'
const service = window.CONFIG.services.system + window.CONFIG.services.wecom + '/fission'

/**
 * 裂变活动列表
 * @param {*} params
 */
export function getList(params) {
    return request({
        url: service + '/act/list',
        method: 'get',
        params,
    })
}
/**
 * 删除裂变活动
 * @param {*} id
 */
export function deleteInfo(id) {
    return request({
        url: service + '/act/delete/' + id,
        method: 'get',
    })
}

/**
 * 按发起人查询列表数据
 * @param {*} data
 */
export function getCustomerList(data) {
    return request({
        url: service + '/statistic/customerList',
        method: 'post',
        data,
    })
}
/**
 * 按员工查询列表数据
 * @param {*} data
 */
export function getUserFissionList(data) {
    return request({
        url: service + '/statistic/userFissionList',
        method: 'post',
        data,
    })
}
/**
 * 按发起人查询汇总数据
 * @param {*} data
 */
export function getCustomerTotal(data) {
    return request({
        url: service + '/statistic/customerTotal',
        method: 'post',
        data,
    })
}
/**
 * 按员工查询汇总数据
 * @param {*} data
 */
export function getUserFissionTotal(data) {
    return request({
        url: service + '/statistic/userFissionTotal',
        method: 'post',
        data,
    })
}
/**
 * 按发起人查询邀请明细
 * @param {*} params
 */
export function getAssistDetail(id) {
    return request({
        url: service + '/statistic/getActivityDetail/' + id,
    })
}

/**
 * 按员工导出好友明细
 * @param {*} data
 */
export function userFriendDetail(data) {
    return request({
        url: service + '/statistic/export/userFriendDetail',
        method: 'post',
        data
    })
}

/**
 * 按员工导出列表数据
 * @param {*} data
 */
export function userFissionList(data) {
    return request({
        url: service + '/statistic/export/userFissionList',
        method: 'post',
        data
    })
}
/**
 * 按发起人导出兑换记录
 * @param {*} data
 */
export function prizeRecords(data) {
    return request({
        url: service + '/statistic/export/prizeRecords',
        method: 'post',
        data
    })
}
/**
 * 按发起人导出列表数据
 * @param {*} params
 */
export function exportList(data) {
    return request({
        url: service + '/statistic/export/list',
        method: 'post',
        data
    })
}
/**
 * 按发起人导出邀请明细
 * @param {*} params
 */
export function exportAssistDetail(data) {
    return request({
        url: service + '/statistic/export/assistDetail',
        method: 'post',
        data
    })
}

/**
 * 获取兑换奖品列表
 * @param {*} params
 */
export function getRecordList(params) {
    return request({
        url: service + '/prize/record/list',
        params
    })
}
/**
 * 兑换奖品列表导出excel
 * @param {*} params
 */
export function getRecordExport(params) {
    return request({
        url: service + '/prize/record/export',
        params
    })
}
/**
 * 兑奖消息提醒设置查询
 * @param {*} params
 */
export function getNotice(params) {
    return request({
        url: service + '/prize/notice',
        params
    })
}

/**
 * 兑奖消息提醒设置
 * @param {*} data
 */
export function getPostNotice(data) {
    return request({
        url: service + '/prize/notice',
        method: 'post',
        data
    })
}

/**
 * 按发起人查询邀请明细
 * @param {*} params
 */
export function getAssistList(params) {
    return request({
        url: service + '/statistic/getAssistDetail',
        params
    })
}
/**
 * 按发起人查询兑换记录
 * @param {*} params
 */
export function getPrizeRecords(params) {
    return request({
        url: service + '/statistic/getPrizeRecords',
        params
    })
}

/**
 * 按员工查询好友明细
 * @param {*} params
 */
export function getUserFriendDetail(params) {
    return request({
        url: service + '/statistic/getUserFriendDetail',
        params
    })
}

/**
 * 裂变活动新增活动
 * @param {*} data
 */
export function addAct(data) {
    return request({
        url: service + '/act/add',
        method: 'POST',
        data,
    })
}
/**
 * 裂变活动编辑活动
 * @param {*} data
 */
export function updateAct(data) {
    return request({
        url: service + '/act/update',
        method: 'POST',
        data,
    })
}
/**
 * 裂变活动获取详情
 * @param {*} id
 */
export function getActInfo(id) {
    return request({
        url: service + '/act/get/' + id,
        method: 'GET',
    })
}
/**
 * 裂变活动自主修改上下架
 * @param {*} params
 */
export function updateOnline(params) {
    return request({
        url: service + '/act/update/online',
        method: 'POST',
        params
    })
}

/**
 * 裂变活动自主修改上下架
 * @param {*} params
 */
 export function userNumber(params) {
    return request({
        url: service + '/act/check/usernumber',
        method: 'POST',
        params
    })
}