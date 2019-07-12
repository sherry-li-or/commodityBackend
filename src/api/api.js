import request from '../util/request';

//發起請求
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
		data,
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
export function product_delete(data) {
	return request({
		method:"POST",
		url:"/product/deleteProduct",
		data: data,
	})
}
export function product_add(data) {
	return request({
		method:"POST",
		url:"/product/addNewProduct",
		data: data,
	})
}
export function product_update(data) {
	return request({
		method:"POST",
		url:"/product/updateProductData",
		data: data,
	})
}

