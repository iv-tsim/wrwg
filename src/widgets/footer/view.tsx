import { IconButton, Stars } from '@/shared/ui'
import { FC } from 'react'
import cn from 'classnames'

import css from './styles.module.scss'

export const Footer: FC<IWithClassname> = ({ className }) => {
	return (
		<footer className={cn('container', css.footer, className)}>
			<div className={css.footer__container}>
				<IconButton iconId='rating'>Рейтинг</IconButton>
				<Stars number={15} />
			</div>
		</footer>
	)
}
