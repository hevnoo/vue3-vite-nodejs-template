//* request/index.ts
import axios from 'axios'

// 创建一个 axios 实例
const service = axios.create({
	baseURL: 'http://127.0.0.1:8282/', 
	timeout: 60000, // 请求超时时间毫秒
	// withCredentials: true, // 异步请求携带cookie
	headers: {
		// 设置后端需要的传参类型
		'Content-Type': 'application/json',
		'token': 'your token',
		'X-Requested-With': 'XMLHttpRequest',
	},
})

//请求拦截
service.interceptors.request.use(
  (config) => {
    //在发送请求之前做些什么,比如添加请求头
    //config.headers['Authorization'] = `Bearer ${token}`
     return config
  },
  (error) => {
    // 对请求错误做些什么
    console.log(error)
    return Promise.reject(error);
  }
)

//响应拦截
service.interceptors.response.use(
  (response) => {
    // 2xx 范围内的状态码都会触发该函数。
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  //显示错误，例如：401
  (error) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }

)

export default service