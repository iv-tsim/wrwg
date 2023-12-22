import { Portal } from '@/shared/hocs'
import { CloseButton, Typography } from '@/shared/ui'
import { DecorativeElement } from '../decorative-element'
import { useQuizStore } from '../../model'
import cn from 'classnames'

import type { FC, PropsWithChildren } from 'react'

import css from './styles.module.scss'

import { FullImage } from '@/shared/assets/img/mercury'

interface IDetailModalProps extends PropsWithChildren {
	title: string
}

export const DetailModal: FC<IDetailModalProps> = ({ title, children }) => {
	const reset = useQuizStore(state => state.reset)

	return (
		<Portal>
			{/* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */}
			<div className={css.wrapper}>
				<div className={css.overlay} />
				<div className={css.content}>
					<CloseButton variant='dark' className={css.content__close} onClick={reset} />
					<div className={css.main}>
						<Typography variant='h2' className={css.main__title}>
							{title}
						</Typography>
						<div className={css.main__imgWrapper}>
							<img src={FullImage} alt='background' className={css.main__img} />
							<DecorativeElement
								variant='top-left'
								className={cn(
									css.main__imgDec,
									css.main__imgDec_position_top,
									css.main__imgDec_position_left
								)}
							/>
							<DecorativeElement
								variant='top-right'
								className={cn(
									css.main__imgDec,
									css.main__imgDec_position_top,
									css.main__imgDec_position_right
								)}
							/>
							<DecorativeElement
								variant='bottom-left'
								className={cn(
									css.main__imgDec,
									css.main__imgDec_position_bottom,
									css.main__imgDec_position_left
								)}
							/>
							<DecorativeElement
								variant='bottom-right'
								className={cn(
									css.main__imgDec,
									css.main__imgDec_position_bottom,
									css.main__imgDec_position_right
								)}
							/>
						</div>
						<div className={css.main__children}>{children}</div>
					</div>
				</div>
			</div>
		</Portal>
	)
}
