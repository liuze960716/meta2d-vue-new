/*
 * @Descripttion: 接口文件
 * @Version: 1.0
 * @Author: 13146504151@163.com
 * @Date: 2023-01-16 09:49:12
 * @LastEditors: 13146504151@163.com
 * @LastEditTime: 2023-03-08 09:41:24
 */

import request from "@/utils/request";
const service = window.CONFIG.services.system;

export const indexTable = (params) => {
  return request({
    url: service + "/wecom/page/getCorpBasicData",
    method: "get",
    params,
  });
};

export const indexTabledata = (data) => {
  return request({
    url: service + "/wecom/page/getUserRank",
    method: "post",
    data,
  });
};
