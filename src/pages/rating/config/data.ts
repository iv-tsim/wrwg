export const data: TData = {
	user: {
		tab: 'Персональный',
		title: 'Персональный рейтинг',
		desc: 'У планет-гигантов нет твёрдой поверхности, таким образом Летучая Рыба дает азимут. Восход прочно меняет близкий нулевой меридиан. Весеннее равноденствие ищет популяционный индекс.',
		starsText: 'ваши звезды',
	},
	team: {
		tab: 'команда',
		title: 'командный рейтинг',
		desc: 'У планет-гигантов нет твёрдой поверхности, таким образом Летучая Рыба дает азимут. Восход прочно меняет близкий нулевой меридиан. Весеннее равноденствие ищет популяционный индекс.',
		starsText: 'Звезды вашей команды',
	},
}

export const selectData = [
	{
		label: 'по убыванию звезд',
		value: '-rating',
	},
	{
		label: 'по возрастанию звезд',
		value: 'rating',
	},
	{
		label: 'по названию (A-Z)',
		value: 'name',
	},
	{
		label: 'по названию (Z-A)',
		value: '-name',
	},
]

interface IData {
	tab: string
	title: string
	desc: string
	starsText: string
}

type TData = Record<TTab, IData>
export type TTab = 'user' | 'team'
