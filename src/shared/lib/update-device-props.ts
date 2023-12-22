export const updateDeviceProps = () => {
	const height = window.innerHeight
	const vh = height * 0.01

	document.documentElement.style.setProperty('--vh', `${vh}px`)
}
