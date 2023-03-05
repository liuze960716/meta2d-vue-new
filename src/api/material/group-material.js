import request from "@/utils/request";
const service =
  window.CONFIG.services.system + window.CONFIG.services.wecom + "/material/multiple";

/** 获取列表 */
export function getList(params) {
    return request({
        url: service + `/list`,
        method: "GET",
        params,
    });
}

/** 获取树形数据 */
export function getTreeData() {
    return request({
        url: service + `/category/list`,
        method: "GET"
    });
}

/** 添加树形数据 */
export function addTreeData(data) {
    return request({
        url: service + `/category`,
        method: "POST",
        data
    });
}

/** 编辑树形数据 */
export function editTreeData(data) {
    return request({
        url: service + `/category`,
        method: "PUT",
        data
    });
}

/** 编辑树形数据 */
export function deleteTreeData(id) {
    return request({
        url: service + `/category/${id}`,
        method: "DELETE"
    });
}

/** 设置可见范围 */
export function setVisibleRange(data) {
    return request({
        url: service + `/batchSetVisibleRange`,
        method: "POST",
        data
    });
}

/** 删除素材 */
export function deleteMaterial(data) {
    return request({
        url: service + `/batchRemove`,
        method: "POST",
        data
    });
}

/** 移动分组 */
export function moveCategory(data) {
    return request({
        url: service + `/batchMoveCategory`,
        method: "POST",
        data
    });
}

/** 移动分组 */
export function addMaterial(data) {
    return request({
        url: service,
        method: "POST",
        data
    });
}

/** 移动分组 */
export function editMaterial(data) {
    return request({
        url: service,
        method: "PUT",
        data
    });
}

/** 移动分组 */
export function getMaterialById(id) {
    return request({
        url: service + `/${id}`,
        method: "GET"
    });
}
