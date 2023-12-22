import cn from 'classnames'

import type { FC, HTMLAttributes } from 'react'

import css from './styles.module.scss'

export interface IIconWithLinesProps extends HTMLAttributes<HTMLDivElement> {
	iconId?: string
	imageUrl?: string
	hideContent?: boolean
}

export const IconWithLines: FC<IIconWithLinesProps> = ({
	iconId,
	imageUrl,
	className,
	hideContent = false,
	...props
}) => {
	const hasImage = !!imageUrl

	return (
		<div
			className={cn(css.icon, className, {
				[css.icon_icon_with]: !hasImage,
				[css.icon_icon_without]: hasImage,
			})}
			{...props}
		>
			{hasImage && !hideContent && (
				<img src={imageUrl} alt='background' className={css.icon__img} />
			)}

			{!hasImage && !hideContent && (
				<svg className={css.icon__img}>
					<use xlinkHref={`#${iconId}`} />
				</svg>
			)}

			<span
				className={cn(
					css.icon__line,
					css.icon__line_orientation_horizontal,
					css.icon__line_position_top
				)}
			/>
			<span
				className={cn(
					css.icon__line,
					css.icon__line_orientation_horizontal,
					css.icon__line_position_bottom
				)}
			/>
			<span
				className={cn(
					css.icon__line,
					css.icon__line_orientation_vertical,
					css.icon__line_position_left
				)}
			/>
			<span
				className={cn(
					css.icon__line,
					css.icon__line_orientation_vertical,
					css.icon__line_position_right
				)}
			/>
		</div>
	)
}
