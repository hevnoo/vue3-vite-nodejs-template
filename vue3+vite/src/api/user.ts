// 导入axios实例
import http from '@/request/index'

// 获取用户信息
export const apiGetUserInfo = (param: any) => {
    return http({
		url: '',
		method: 'post',
		data: param,
	})
}
