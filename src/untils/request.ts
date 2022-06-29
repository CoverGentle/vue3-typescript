import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

const service = axios.create({
  baseURL: '',
  timeout: 2000

})
// 请求
service.interceptors.request.use(
  (config:AxiosRequestConfig) => {
    return config
  },
  (error:AxiosError) => {
    console.log('请求拦截器error: ', error)
    Promise.reject(error)
  }
)

// 响应
service.interceptors.response.use(
  (reponse:AxiosResponse) => {
    return reponse
  },
  (error:AxiosError) => {
    console.log('响应拦截error: ', error)
    Promise.reject(error)
  }
)

export default service
