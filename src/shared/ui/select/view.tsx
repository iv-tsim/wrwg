import { useRef, useState } from 'react'
import { Typography } from '../typography'

import cn from 'classnames'
import { useAlterntativeEscape } from '@/shared/hooks'

import css from './styles.module.scss'

interface IOption<T> {
	label: string
	value: T
}

export interface ISelectProps<T> extends IWithClassname {
	value: IOption<T>
	options: IOption<T>[]
	onChange: (value: IOption<T>) => void
	disabled?: boolean
}

export const Select = <T,>({ onChange, options, value, className, disabled }: ISelectProps<T>) => {
	const [isOpened, setIsOpened] = useState<boolean>(false)

	const selectRef = useRef<HTMLDivElement>(null)
	const dropdownRef = useRef<HTMLDivElement>(null)

	useAlterntativeEscape(selectRef, () => setIsOpened(false), {
		callOnClickOutside: true,
		callOnEscape: true,
	})

	const handleOptionClick = (value: IOption<T>) => {
		onChange(value)
		setIsOpened(false)
	}

	const handleScrollPosition = () => {
		const { current: dropdown } = dropdownRef

		if (isOpened || !dropdown) return

		const { top: dropdownTop, height: dropdownHeight } = dropdown.getBoundingClientRect()
		const currentScroll = window.scrollY

		if (dropdownTop + dropdownHeight < currentScroll) {
			dropdown.scrollIntoView({ behavior: 'smooth', block: 'end' })
		}
	}

	const handleBodyClick = () => {
		handleScrollPosition()
		setIsOpened(isOpened => !isOpened)
	}

	return (
		<div
			className={cn(css.select, className, {
				[css.select_status_opened]: isOpened,
				[css.select_status_disabled]: disabled,
			})}
			ref={selectRef}
		>
			<button className={css.select__top} onClick={handleBodyClick}>
				<Typography variant='desc'>{value.label}</Typography>
				<div className={css.select__arrow} />
			</button>
			<div className={css.select__dropdown} ref={dropdownRef}>
				<div className={css.select__main}>
					<ul className={css.select__list}>
						{options.map((option, index) => (
							<li className={css.select__item} key={index}>
								<button className={css.select__button} onClick={() => handleOptionClick(option)}>
									<Typography variant='desc'>{option.label}</Typography>
								</button>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}
