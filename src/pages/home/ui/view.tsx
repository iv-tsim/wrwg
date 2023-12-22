import { WithBackground } from '@/shared/layouts'
import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'
import { Earth } from './earth'
import { Planet } from './planet'
import cn from 'classnames'

import { planets } from '@/entities/planet'

import css from './styles.module.scss'

import { BackgroundTwoImage } from '@assets/img/backgrounds'
import { PlanetSunImage } from '@assets/img/planets'

export const Home = () => {
	return (
		<WithBackground imageUrl={BackgroundTwoImage} className={css.home}>
			<Header className={css.home__header} />
			<Earth className={css.home__earth} />
			{Object.entries(planets).map(([key, planet]) => (
				<Planet
					imageUrl={planet.homeImageUrl}
					mobileTitlePosition={planet.nameDirection}
					title={planet.name}
					to={planet.to}
					className={cn(css.home__planet, css[`home__planet_name_${key}`])}
					key={planet.title}
				/>
			))}
			<img src={PlanetSunImage} alt='sun' className={css.home__sun} />
			<Footer className={css.home__footer} />
		</WithBackground>
	)
}
