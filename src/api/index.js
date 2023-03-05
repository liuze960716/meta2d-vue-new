import request from "@/utils/request";
const service = window.CONFIG.services.system;

export const indexTable = (params) => {
  return request({
    url: service + "/wecom/page/getCorpBasicData",
    method: "get",
    params,
  });
};

export const indexEchart = () => {
  return request({
    url: service + "/wecom/page/getCorpRealTimeData",
    method: "get",
  });
};

export const indexEchartNews = (params) => {
  return request({
    url: service + "/wecom/page/getCorpBasicPolyline",
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
export const indexExportUserRank = (data) => {
  return request({
    url: service + "/wecom/page/exportUserRank",
    method: "post",
    data,
  });
};
