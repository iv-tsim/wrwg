import Scrollbars from 'react-custom-scrollbars-2'
import cn from 'classnames'

import type { ScrollbarProps } from 'react-custom-scrollbars-2'
import type { FC } from 'react'

import css from './styles.module.scss'

interface ICustomScroll extends ScrollbarProps {
	paddingSize?: 'default' | 'small'
}

export const CustomScroll: FC<ICustomScroll> = ({
	paddingSize = 'default',
	children,
	className,
	...props
}) => {
	return (
		<Scrollbars
			autoHeight={true}
			hideTracksWhenNotNeeded={true}
			renderTrackVertical={props => <div className={css.wrapper__track} {...props} />}
			renderThumbVertical={props => <div className={css.wrapper__thumb} {...props} />}
			renderView={props => <div className={css.wrapper__view} {...props} />}
			className={cn(css.wrapper, className, {
				[css.wrapper_paddingSize_default]: paddingSize === 'default',
				[css.wrapper_paddingSize_small]: paddingSize === 'small',
			})}
			{...props}
		>
			{children}
		</Scrollbars>
	)
}
