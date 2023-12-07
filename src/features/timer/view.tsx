import { TextButton, Typography } from '@/shared/ui'
import { useRef, type FC, useState } from 'react'
import Countdown, { type CountdownRendererFn } from 'react-countdown'
import cn from 'classnames'

import css from './styles.module.scss'

interface ITimerProps extends IWithClassname {
	time?: number
	onBtnClick: VoidFunction
}

export const Timer: FC<ITimerProps> = ({
	onBtnClick,
	time = 30,
	className,
}) => {
	const date = useRef<number>(Date.now() + time * 1000)
	const [isCountdownVisible, setCountdownVisible] = useState<boolean>(true)

	const countdownRenderer: CountdownRendererFn = ({ formatted }) => {
		return (
			<Typography
				variant='text'
				as='span'
				className={css.wrapper__timer}
			>{`${formatted.minutes}:${formatted.seconds}`}</Typography>
		)
	}

	const handleBtnClick = () => {
		date.current = Date.now() + time * 1000
		setCountdownVisible(true)
		onBtnClick()
	}

	return (
		<div className={cn(css.wrapper, className)}>
			{isCountdownVisible ? (
				<>
					<Typography variant='text'>
						Повторно отправить код можно через{' '}
						<Countdown
							date={date.current}
							renderer={countdownRenderer}
							onComplete={() => setCountdownVisible(false)}
						/>
					</Typography>
				</>
			) : (
				<TextButton onClick={handleBtnClick}>Отправить код повторно</TextButton>
			)}
		</div>
	)
}
