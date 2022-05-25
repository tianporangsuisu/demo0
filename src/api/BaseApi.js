import axios from 'axios'
import cookie from 'js-cookie'
import {ElMessage} from 'element-plus'
// 创建axios实例,配置请求的url,同时配置request和response的拦截器
const service = axios.create({
    baseURL: 'http://101.43.171.193:9001', // api的base_url
    timeout: 5000 // 请求超时时间
})

//请求拦截器,为每次请求加上token
// http request 拦截器
service.interceptors.request.use(
    config => {
        //判断token是否存在,如果存在,就随着请求头一起发送
        if (cookie.get('myToken')) {
            config.headers['token'] = cookie.get('myToken');
        }
        return config
    },
    err => {
        return Promise.reject(err);
    })
// http response 拦截器
service.interceptors.response.use(
    response => {
        //表示登录状态过期,需要跳转回登录界面
        if (response.data.code === 28004) {
            console.log("response.data.resultCode是28004")
            // 返回 错误代码-1 清除ticket信息并跳转到登录页面
            //debugger
            // window.location.href="/login"
            return
        }
        //打印错误信息
        if (response.data.code !== 20000) {
            ElMessage({
                message: response.data.message,
                type: 'error',
                duration: 3 * 1000
            })
        }
        return response;
    },
    error => {
        return Promise.reject(error.response)   // 返回接口返回的错误信息
    });

export default service
