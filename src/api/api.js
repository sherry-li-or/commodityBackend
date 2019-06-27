import request from '../util/request';

export function login(data) {
	return request({
		method:"POST",
		url:"/backend/login",
		data:data
	})
}
