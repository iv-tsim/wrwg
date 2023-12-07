import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { ToastContainer } from 'react-toastify'
import { QueryClientWrapper } from './ui/react-query/view'

import 'react-toastify/dist/ReactToastify.css'
import '@assets/styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<QueryClientWrapper>
			<App />
			<ToastContainer position='bottom-right' theme='dark' />
		</QueryClientWrapper>
	</React.StrictMode>
)

