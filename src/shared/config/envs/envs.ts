const getEnvVar = (key: string) => {
	if (import.meta.env[key] === undefined) {
		throw new Error(`Env variable ${key} is required`)
	}

	return import.meta.env[key] || ''
}

export const API_URL: string = getEnvVar('VITE_API_URL')
export const PUBLIC_URL: string = getEnvVar('VITE_BASE')
