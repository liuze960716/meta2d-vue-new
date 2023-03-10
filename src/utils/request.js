/*
 * @Descripttion: 
 * @Version: 1.0
 * @Author: 13146504151@163.com
 * @Date: 2023-01-16 09:49:12
 * @LastEditors: 13146504151@163.com
 * @LastEditTime: 2023-03-08 09:57:19
 */
import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import { getToken } from '@/utils/auth'
import errorCode from '@/utils/errorCode'
import store from '@/store'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: process.env.NODE_ENV === 'test' ? '/' : window.lwConfig.BASE_API,
  // 超时
  // timeout: 10000,
})
// request拦截器
service.interceptors.request.use(
  (config) => {
    // 是否需要设置 token
    const isToken = (config.headers || {}).isToken === false
    if (getToken() && !isToken) {
      config.headers = window.CONFIG.headers // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (res) => {
    // 未设置状态码则默认成功状态
    const code = res.data.code || 200
    // 获取错误信息
    const msg = errorCode[code] || res.data.msg || errorCode['default']
    if (code === 200 || code === 20000) {
      // 全局处理列表total格式
      if (res.data.total && typeof res.data.total === 'string')
        res.data.total = Number(res.data.total)
      return res.data
    } else if (code === 401) {
      MessageBox.confirm('登录状态已过期，您可以继续留在该页面，或者重新登录', '系统提示', {
        confirmButtonText: '重新登录',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        store.dispatch('LogOut').then(() => {
          location.href = window.lwConfig.BASE_URL
        })
      })
    }
    //  else if (code === 500) {
    //   Message({
    //     message: msg,
    //     type: 'error'
    //   })
    //   // return Promise.reject(new Error(msg))
    //   return Promise.reject()
    // }
    else {
      // let errMsg = response.data.msg || response.data.errMsg || data.msg || data.errMsg
      if (process.env.NODE_ENV === 'development') {
        Message({
          message: `后端错误：接口：${res.config.url}，${code}错误：${msg}`,
          type: 'error',
        })
      } else {
        Message.error({
          message: msg,
          type: 'error'
        })
      }
      return Promise.reject(res.data)
    }
  },
  (error) => {
    console.log('err: ' + error)
    let { message: msg, response, config } = error
    if (msg == 'Network Error') {
      msg = '后端接口连接异常'
    } else if (msg.includes('timeout')) {
      msg = '系统接口请求超时'
    } else if (response) {
      let status = response.status
      msg = '系统接口:' + status + '异常'
    }
    Message({
      message: `${msg}:${config.url}`,
      type: 'error',
      duration: 5 * 1000,
    })
    return Promise.reject(error)
  }
)

export default service
