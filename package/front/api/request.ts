import axios from 'axios';
import {AxiosInstance, InternalAxiosRequestConfig, AxiosRequestConfig, AxiosResponse, AxiosError} from 'axios';

// 创建 axios 请求实例
const serviceAxios = axios.create({
    baseURL: '', // 接口请求地址
    timeout: 15 * 1000, // 请求超时设置
    withCredentials: false, // 跨域请求是否需要携带 cookie
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    validateStatus() {
        // 使用async-await，处理reject情况较为繁琐，所以全部返回resolve，在业务代码中处理异常
        return true;
    }
});


// 请求拦截器
serviceAxios.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        console.log('全局请求拦截器: 成功');
        return config;
    },
    (err: AxiosError) => {
        console.log('全局请求拦截器: 处理请求错误');
        return Promise.reject(err);
    }
);

// 响应拦截器
serviceAxios.interceptors.response.use(
    (response: AxiosResponse) => {
        console.log('全局响应拦截器: 成功');
        return response;
    },
    (err: AxiosError) => {
        console.log('全局响应拦截器: 处理响应错误');
        return Promise.reject(err);
    }
);

// 统一发起请求的函数
function createRequest(service: AxiosInstance) {
    return function <T>(config: AxiosRequestConfig): Promise<T> {
        return service(config);
    };
}

export default createRequest(serviceAxios);
