import { FC, useLayoutEffect, useRef, useState } from 'react'
import cn from 'classnames'

import css from './styles.module.scss'

import earthUrl from '@assets/img/planets/earth.png'
import orbitUrl from '@assets/img/home/orbit.png'

export const Earth: FC<IWithClassname> = ({ className }) => {
	const orbitRef = useRef<HTMLImageElement>(null)
	const [rect, setRect] = useState<DOMRect | null>(null)
	const [degree, setDegree] = useState<number>(0)

	useLayoutEffect(() => {
		const { current: orbitImage } = orbitRef

		if (!orbitImage) return

		const resizeObserver = new ResizeObserver(() => {
			setRect(orbitImage.getBoundingClientRect())
		})

		resizeObserver.observe(document.body)

		return () => {
			resizeObserver.unobserve(document.body)
		}
	}, [orbitRef])

	useLayoutEffect(() => {
		const { current: orbitImage } = orbitRef

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
		<div className={cn(css.earth, className)}>
			<img
				src={earthUrl}
				alt='earth'
				className={css.earth__planet}
				ref={orbitRef}
			/>
			<img
				src={orbitUrl}
				alt='orbit'
				className={css.earth__orbit}
				style={{
					transform: `translate(-50%, -50%) rotate(${degree}deg)`,
				}}
			/>
		</div>
	)
}
