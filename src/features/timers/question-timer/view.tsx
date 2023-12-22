import { Typography } from '@/shared/ui'
import { forwardRef, useImperativeHandle, useState } from 'react'
import cn from 'classnames'

import type { CountdownRendererFn } from 'react-countdown'

import css from './styles.module.scss'
import Countdown from 'react-countdown'

export interface IQuestionTimerProps extends IWithClassname {
	duration?: number
	onComplete?: VoidFunction
}

export interface IQuestionTimerRef {
	restart: VoidFunction
}

export const QuestionTimer = forwardRef<IQuestionTimerRef, IQuestionTimerProps>(
	({ duration = 30, onComplete, className }, ref) => {
		const [key, setKey] = useState(0)
		const [date, setDate] = useState<number>(Date.now() + duration * 1000)
		const [percent, setPercent] = useState<number>(100)

		useImperativeHandle(ref, () => ({
			restart: () => {
				setPercent(100)
				setKey(key => key + 1)
				setDate(Date.now() + duration * 1000)
			},
		}))

		const renderTimer: CountdownRendererFn = ({ formatted }) => (
			<Typography variant='bigfont' className={css.timer__time}>
				{`${formatted.hours}:${formatted.minutes}:${formatted.seconds}`}
			</Typography>
		)

		return (
			<div
				className={cn(css.timer, className)}
				style={{
					'--progress': percent,
				}}
			>
				<Countdown
					date={date}
					key={key}
					onComplete={() => {
						onComplete && onComplete()
						setPercent(0)
					}}
					renderer={renderTimer}
					onTick={delta => setPercent(delta.total / duration / 10)}
				/>
				<div className={css.timer__circle} />
			</div>
		)
	}
)

QuestionTimer.displayName = 'questionTimer'
