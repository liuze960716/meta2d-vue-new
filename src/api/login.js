import request from '@/utils/request';
const service = window.CONFIG.services.system

// 登录方法
export function login (username, password, code, uuid) {
  const data = {
    username,
    password,
    code,
    uuid,
  };
  return request({
    url: service + '/login',
    method: 'post',
    data: data,
  });
}

// 获取用户详细信息
export function getInfo () {
  return request({
    url: service + '/getInfo',
    method: 'get',
  });
}

// 退出方法
export function logout () {
  return request({
    url: service + '/logout',
    method: 'post',
  });
}

// 获取验证码
export function getCodeImg () {
  return request({
    url: service + '/captchaImage',
    method: 'get',
  });
}

/**
 * 企业微信扫码回调接口
 * @param {*} auth_code
 */
export function wxQrLogin (auth_code) {
  return request({
    url: service + '/wxQrLogin',
    method: 'get',
    params: {
      auth_code,
    },
  });
}

/**
 * 获取扫码登陆相关参数
 */
export function findWxQrLoginInfo () {
  return request({
    url: service + '/findWxQrLoginInfo',
    method: 'get',
  });
}


// 登录pwd方法 
export function loginPwd (data) {
  return request({
    url: service + '/loginPwd',
    method: 'post',
    data: data,
  });
}

// 登录Sms方法
export function loginSms (data) {
  return request({
    url: service + '/loginSms',
    method: 'post',
    data: data,
  });
}


// 发送短信方法
export function sendSms (params) {
  return request({
    url: service + '/sms',
    params
  });
}