import axios from 'axios'

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
})

export const userApi = {
	getUserId(userId) {
		return instance.get(`/profile/${userId}`)
	},
	getPageInfo(pageSize, page) {
		return instance.get(`users?page=${pageSize}&count=${page}`)
	},
	getPageSize(pageSize) {
		return instance.get(`users?count=${pageSize}`)
	},
}
