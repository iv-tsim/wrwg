import { assertIsNode } from '@/shared/lib'
import { useCallback, useEffect } from 'react'

import type { RefObject } from 'react'

interface IOptions {
	callOnEscape?: boolean
	callOnClickOutside?: boolean
}

export const useAlterntativeEscape = (
	ref: RefObject<HTMLElement>,
	callback: () => void,
	{ callOnEscape = false, callOnClickOutside = false }: IOptions
) => {
	const handleClick = useCallback(
		(event: MouseEvent) => {
			const { target } = event
			assertIsNode(target)
			const element = ref.current

			if (!target || !element) return

			if (!element.contains(target)) {
				callback()
			}
		},
		[callback, ref]
	)

	const onEscapePress = useCallback(
		(event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				callback()
			}
		},
		[callback]
	)

	useEffect(() => {
		if (callOnEscape) {
			document.addEventListener('keydown', onEscapePress)
		}

		if (callOnClickOutside) {
			document.addEventListener('click', handleClick)
		}

		return () => {
			if (callOnClickOutside) {
				document.removeEventListener('click', handleClick)
			}

			if (callOnEscape) {
				document.removeEventListener('keydown', onEscapePress)
			}
		}
	}, [handleClick, onEscapePress, callOnEscape, callOnClickOutside])
}
