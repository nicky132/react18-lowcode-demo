/*
 * @file: 所有的接口列表
 * 宝可梦api https://pokeapi.co/about
 */

import request from './request';

/**
 * @function get
 * @description 请求测试
 */

type IResponseData = {
    data: any
}

export function saveData(data: any) {
    return request<IResponseData>({
        url: 'api/saveModal',
        method: 'post',
        params: data
    });
}

/**
 * @function post
 * @description 请求测试
 */

export function fetchPostTest(data: any) {
    return request({
        url: '/xxx/list',
        method: 'post',
        data
    });
}
