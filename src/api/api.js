import request from '../util/request';

export function login(data) {
	return request({
		method:"POST",
		url:"/backend/login",
		data:data
	})
}
export function orders() {
	return request({
		method:"POST",
		url:"/orders/showOrderListForBackend",
	})
}
export function orders_detail(data) {
	return request({
		method:"POST",
		url:"/orders/searchOrderDetailsForBackend",
		data: data,
	})
}
export function product_list(data) {
	return request({
		method:"POST",
		url:"/product/backendShowAll",
		data: data,
	})
}

