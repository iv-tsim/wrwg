import { useEffect, useState } from 'react'

type TUseMobile = (width: number) => boolean

const checkMobile = (width: number) => {
	return window.innerWidth <= width
}

export const useMobile: TUseMobile = width => {
	const [isMobile, setIsMobile] = useState<boolean>(checkMobile(width))

	useEffect(() => {
		const onResize = () => {
			setIsMobile(checkMobile(width))
		}

		window.addEventListener('resize', onResize)

		return () => window.removeEventListener('resize', onResize)
	}, [width])

	return isMobile
}
