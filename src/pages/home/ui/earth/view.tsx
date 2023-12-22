import { useLayoutEffect, useRef, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { GET_USER_KEY } from '@/shared/config'
import { api } from '@/shared/api'
import cn from 'classnames'

import type { FC } from 'react'

import css from './styles.module.scss'

import { EarthHomeImage } from '@/shared/assets/img/home'

export const Earth: FC<IWithClassname> = ({ className }) => {
	const earthRef = useRef<HTMLImageElement>(null)
	const [rect, setRect] = useState<DOMRect | null>(null)
	const [degree, setDegree] = useState<number>(0)

	const { data, isLoading } = useQuery({
		queryKey: GET_USER_KEY,
		queryFn: api.user.get,
	})

	useLayoutEffect(() => {
		const { current: orbitImage } = earthRef

		if (!orbitImage) return

		const resizeObserver = new ResizeObserver(() => {
			setRect(orbitImage.getBoundingClientRect())
		})

		resizeObserver.observe(document.body)

		return () => {
			resizeObserver.unobserve(document.body)
		}
	}, [earthRef])

	useLayoutEffect(() => {
		const { current: orbitImage } = earthRef

		if (!orbitImage || !rect) return

		const onMouseMove = (event: MouseEvent) => {
			const xCenter = rect.left + orbitImage.clientWidth / 2
			const yCenter = rect.top + orbitImage.clientHeight / 2

			const mouse_x = event.pageX
			const mouse_y = event.pageY
			const radians = Math.atan2(mouse_x - xCenter, mouse_y - yCenter)

			setDegree(radians * (180 / Math.PI) * -1 + 180)
		}

		document.addEventListener('mousemove', onMouseMove)

		return () => {
			document.removeEventListener('mousemove', onMouseMove)
		}
	}, [rect])

	return (
		<div
			className={cn(css.earth, className, {
				[css.earth_status_loading]: isLoading,
			})}
		>
			<div
				className={css.earth__orbit}
				style={{
					transform: `translate(-50%, -50%) rotate(${degree}deg)`,
				}}
			>
				<img src={data?.team.image.mainPage} alt={data?.team.name} className={css.earth__ship} />
			</div>
			<img src={EarthHomeImage} alt='earth' className={css.earth__planet} ref={earthRef} />
		</div>
	)
}
