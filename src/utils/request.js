import axios from 'axios'
import { Toast } from 'vant'
import store from '@/store'
// 创建 axios 实例， 奖励啊对创建出来的实例，进行自定义设置
// 好处： 不会污染我们原始的 axios 实例
const instance = axios.create({
  baseURL: 'http://cba.itlike.com/public/index.php?s=/api/',
  timeout: 3000
})

// 自定义配置  -- 请求/响应  拦截器
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // 开启loading， 禁止背景点击 (节流处理)
  Toast.loading({
    message: '加载中...',
    forbidClick: true,
    loadingType: 'spinner', // 配置loading 图标
    duration: 0 // 不会自动消失
  })

  // 只要有token, 就在请求时携带,便于请求需要授权的接口
  const token = store.getters.token
  if (token) {
    config.headers['Access-Token'] = token
    config.headers.platform = 'H5'
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么 (默认axios回多包装一层data，需要响应拦截器中处理一下)
  const res = response.data
  if (res.status !== 200) {
    // 给错误提示, Toast 默认是单例模式，后面的Toast调用了，会将前一个覆盖掉
    // 同时只能存在一个 Toast
    Toast(res.message)
    // 抛出一个错误的promise
    return Promise.reject(res.message)
  } else {
    // 正确情况，正常走业务核心逻辑，清除 loading 效果
    Toast.clear()
  }
  return response.data
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error)
})
// 导出配置好的实例
export default instance
