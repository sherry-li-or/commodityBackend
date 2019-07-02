import request from '../util/request';

export function login(data) {
	return request({
		method:"POST",
		url:"/backend/login",
		data:data
	})
}
export function orders(data) {
	return request({
		method:"POST",
		url:"/orders/showOrderListForBackend",
		data: data,
	})
}
export function orders_detail(data) {
	return request({
		method:"POST",
		url:"/orders/searchOrderDetailsForBackend",
		data: data,
	})
}

