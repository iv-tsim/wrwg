import { callErrorToast } from '@/shared/api'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import type { FC, PropsWithChildren } from 'react'

export const WithQueryClient: FC<PropsWithChildren> = ({ children }) => {
	const queryClient = new QueryClient({
		defaultOptions: {
			mutations: {
				onError: error => callErrorToast(error),
			},
		},
	})

	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
