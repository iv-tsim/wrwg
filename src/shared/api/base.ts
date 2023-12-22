import { API_URL } from '@/shared/config'
import axios from 'axios'

export const commonApi = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
	},
})
