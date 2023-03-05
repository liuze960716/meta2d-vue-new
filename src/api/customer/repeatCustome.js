import request from '@/utils/request'
const service = window.CONFIG.services.system + window.CONFIG.services.wecom + '/customer'

/**
 * 查询重复客户列表
 * @param {Object} params 
 */
export function getList(params) {
    return request({
        url: service + '/repeatCustomerList',
        method: 'get',
        params
    })
}

/**
 * 查询重复客户成员列表
 * @param {Object} data 
 */
export function getCustomerList(id, params) {
    return request({
        url: service + '/repeatCustomerUserList/' + id,
        method: 'get',
        params
    })
}

/**
 * 导出重复客户
 * @param {Object} data 
 */
export function customerExport(data) {
    return request({
        url: service + '/repeatCustomerExport',
        method: 'post',
        data
    })
}