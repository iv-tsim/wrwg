import { TextButton, Typography } from '@/shared/ui'
import { useState } from 'react'
import Countdown from 'react-countdown'
import cn from 'classnames'

import type { FC } from 'react'
import type { CountdownRendererFn } from 'react-countdown'

import css from './styles.module.scss'

export interface IFormTimerProps extends IWithClassname {
	time?: number
	onBtnClick?: VoidFunction
}

export const FormTimer: FC<IFormTimerProps> = ({ onBtnClick, time = 30, className }) => {
	const [key, setKey] = useState(0)
	const [date, setDate] = useState<number>(Date.now() + time * 1000)

	const countdownRenderer: CountdownRendererFn = ({ formatted, completed }) => {
		if (completed) {
			return <TextButton onClick={handleBtnClick}>Отправить код повторно</TextButton>
		} else {
			return (
				<Typography variant='text' className={css.wrapper__text}>
					<span>Повторно отправить код можно через</span>{' '}
					<Typography
						variant='text'
						as='span'
						className={css.wrapper__timer}
					>{`${formatted.minutes}:${formatted.seconds}`}</Typography>
				</Typography>
			)
		}
	}

	const handleBtnClick = () => {
		onBtnClick && onBtnClick()
		setDate(Date.now() + time * 1000)
		setKey(key => key + 1)
	}

	return (
		<div className={cn(css.wrapper, className)}>
			<Countdown date={date} renderer={countdownRenderer} key={key} />
		</div>
	)
}
