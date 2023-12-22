import { z } from 'zod'
import {
	CODE_LENGTH,
	CODE_LENGTH_ERROR,
	EMPTY_FIELD_ERROR,
	MAX_CHARS_PASSWORD,
	MAX_CHARS_PASSWORD_ERROR,
	MIN_CHARS_NICKNAME,
	MIN_CHARS_NICKNAME_ERROR,
	MIN_CHARS_PASSWORD,
	MIN_CHARS_PASSWORD_ERROR,
} from './constants'

export const passwordSchema = z
	.string()
	.min(MIN_CHARS_PASSWORD, MIN_CHARS_PASSWORD_ERROR)
	.max(MAX_CHARS_PASSWORD, MAX_CHARS_PASSWORD_ERROR)
	.regex(
		/^(?:[a-zA-Z0-9]+|([@#$%^&+=!_-])(?!\1))+$/,
		'Поле может содержать латинские буквы, цифры и @#$%^&+=!_-'
	)

export const emailSchema = z
	.string()
	.min(1, EMPTY_FIELD_ERROR)
	.email(`Поле должно являться e-mail'ом`)

export const usernameSchema = z
	.string()
	.min(1, EMPTY_FIELD_ERROR)
	.min(MIN_CHARS_NICKNAME, MIN_CHARS_NICKNAME_ERROR)
	.regex(
		/^(?:[a-zA-Z0-9]+|([@#$%^&+=!_-])(?!\1))+$/,
		'Поле может содержать латинские буквы, цифры и @#$%^&+=!_-'
	)
	.trim()

export const fullnameSchema = z
	.string()
	.min(1, EMPTY_FIELD_ERROR)
	.regex(/^[а-яА-ЯёЁa-zA-Z ]+$/, 'Поле может содержать только буквы')

export const codeSchema = z
	.string()
	.length(CODE_LENGTH, CODE_LENGTH_ERROR)
	.regex(/^\d+$/, 'Поле должно содержать только цифры')
