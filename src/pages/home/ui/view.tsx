import { WithBackground } from '@/shared/layouts'
import { Footer, Header } from '@/widgets'
import { Earth } from './earth'
import cn from 'classnames'

import { planets } from '@/entities'

import css from './styles.module.scss'

import backgroundUrl from '@assets/img/backgrounds/bg_2.jpg'
import sunUrl from '@assets/img/planets/sun.png'
import { Planet } from './planet'

export const Home = () => {
	return (
		<WithBackground imageUrl={backgroundUrl} className={css.home}>
			<Header className={css.home__header} />
			<Earth className={css.home__earth} />
			{Object.entries(planets).map(([key, planet]) => (
				<Planet
					imageUrl={planet.homeImageUrl}
					mobileTitlePosition='left'
					title={planet.name}
					to={planet.to}
					className={cn(css.home__planet, css[`home__planet_name_${key}`])}
					key={planet.title}
				/>
			))}
			<img src={sunUrl} alt='sun' className={css.home__sun} />
			<Footer className={css.home__footer} />
		</WithBackground>
	)
}
