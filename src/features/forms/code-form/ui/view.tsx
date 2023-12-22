import { Input, MainButton, Typography } from '@/shared/ui'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { codeSchema } from '../model'
import { CODE_LENGTH } from '@/shared/config'
import { FormTimer } from '@/features/timers'

import type { FC, ReactNode } from 'react'
import type { TCodeFields } from '../model'

import css from './styles.module.scss'

interface ICodeFormProps {
	onSubmit: (code: TCodeFields['code']) => void
	onRetry: VoidFunction
	onCancel: VoidFunction
	text: ReactNode
}

export const CodeForm: FC<ICodeFormProps> = ({ onCancel, onSubmit, text, onRetry }) => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		watch,
		reset,
	} = useForm<TCodeFields>({
		resolver: zodResolver(codeSchema),
		mode: 'onBlur',
	})

	const watchCode = watch('code')

	const handleFormSubmit = handleSubmit(({ code }) => {
		onSubmit(code)
	})

	useEffect(() => {
		if (watchCode && watchCode.length === CODE_LENGTH) {
			handleFormSubmit()
		}
		// no need to rerender
		// eslint-disable-next-line
	}, [watchCode])

	return (
		<div className={css.wrapper}>
			<Typography variant='text' className={css.wrapper__text}>
				{text}
			</Typography>
			<form action='#' className={css.wrapper__form} onSubmit={handleFormSubmit}>
				<Input
					placeholder='код'
					error={errors.code?.message}
					className={css.wrapper__input}
					{...register('code')}
				/>
			</form>
			<div className={css.wrapper__bottom}>
				<FormTimer
					onBtnClick={() => {
						reset()
						onRetry()
					}}
					className={css.wrapper__timer}
				/>
				<MainButton onClick={onCancel} variant='transparent-light' className={css.wrapper__cancel}>
					Назад
				</MainButton>
			</div>
		</div>
	)
}
