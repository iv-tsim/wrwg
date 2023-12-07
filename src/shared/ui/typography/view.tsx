import type { ElementType, PropsWithChildren } from 'react'
import cn from 'classnames'

import css from './styles.module.scss'

type TVariant =
	| 'h1'
	| 'h1-2'
	| 'h2'
	| 'bigfont'
	| 'menuitem'
	| 'menu'
	| 'text'
	| 'boldText'
	| 'smallText'
	| 'desc'
	| 'timer'
	| 'shipname'
	| 'stars'
	| 'number'
	| 'bigplanetname'
	| 'likes'
	| 'user'

export interface ITypographyProps<T extends ElementType = 'div'>
	extends PropsWithChildren,
		IWithClassname {
	// Каким элементов отрендерить
	as?: T
	// Вариант текста
	variant?: TVariant
}

export const Typography = <T extends ElementType = 'div'>({
	variant = 'h1',
	className,
	as,
	children,
	...props
}: ITypographyProps<T>) => {
	const Component = as ? as : 'div'

	return (
		<Component
			className={cn(css.typography, className, {
				[css.typography_variant_h1]: variant === 'h1',
				[css.typography_variant_h1_2]: variant === 'h1-2',
				[css.typography_variant_h2]: variant === 'h2',
				[css.typography_variant_bigfont]: variant === 'bigfont',
				[css.typography_variant_menuitem]: variant === 'menuitem',
				[css.typography_variant_menu]: variant === 'menu',
				[css.typography_variant_text]: variant === 'text',
				[css.typography_variant_boldText]: variant === 'boldText',
				[css.typography_variant_smallText]: variant === 'smallText',
				[css.typography_variant_desc]: variant === 'desc',
				[css.typography_variant_timer]: variant === 'timer',
				[css.typography_variant_shipname]: variant === 'shipname',
				[css.typography_variant_stars]: variant === 'stars',
				[css.typography_variant_number]: variant === 'number',
				[css.typography_variant_bigplanetname]: variant === 'bigplanetname',
				[css.typography_variant_likes]: variant === 'likes',
				[css.typography_variant_user]: variant === 'user',
			})}
			{...props}
		>
			{children}
		</Component>
	)
}

