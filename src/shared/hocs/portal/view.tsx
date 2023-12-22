import { createPortal } from 'react-dom'

import type { FC, DOMAttributes } from 'react'

export const Portal: FC<DOMAttributes<FC>> = ({ children }) => {
	return createPortal(children, document.getElementById('portals') as HTMLElement)
}
