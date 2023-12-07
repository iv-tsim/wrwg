interface IWithClassname {
	className?: string
}

interface IError {
	type: string
	errors: {
		code: string
		detail: string
		attr: string
	}[]
}

