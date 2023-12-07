import { ICompany } from '@/shared/model'
import { useQuery } from '@tanstack/react-query'
import { commonApi } from '../common'

const getCompanyInfo = async () => {
	const response = await commonApi.get<ICompany>('/company/')
	return response.data
}

export const useGetCompanyInfo = () => {
	return useQuery<ICompany, IError>({
		queryKey: ['company'],
		queryFn: getCompanyInfo,
	})
}
