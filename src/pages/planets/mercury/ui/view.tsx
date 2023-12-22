import { planets } from '@/entities/planet'
import { PlanetMercuryImage } from '@/shared/assets/img/planets'
import { PlanetHeader } from '@/widgets/planet-header/view'
import { WithBackground } from '@/shared/layouts'
import { useMobile } from '@/shared/hooks'
import { DesktopDot, MobileDot } from './dot'
import { useQuizStore } from '../model'
import { DetailMain } from './detail-main'
import { useQuery } from '@tanstack/react-query'
import { GET_QUIZZIES_KEY } from '@/shared/config'
import { api } from '@/shared/api'
import cn from 'classnames'

import css from './styles.module.scss'

import { BackgroundMercuryImage } from '@/shared/assets/img/backgrounds'

export const Mercury = () => {
	const isDetailOpened = useQuizStore(state => state.isDetailOpened)
	const setIsDetailOpened = useQuizStore(state => state.setIsDetailOpened)
	const setOpenedDetailId = useQuizStore(state => state.setOpenedDetailId)

	const isMobile = useMobile(1439)

	const { data } = useQuery({
		queryKey: GET_QUIZZIES_KEY,
		queryFn: api.quiz.getAll,
	})

	const handleQuizClick = (id: number): void => {
		setOpenedDetailId(id)
		setIsDetailOpened(true)
	}

	return (
		<WithBackground imageUrl={BackgroundMercuryImage} className={css.planet}>
			<PlanetHeader
				planetImg={PlanetMercuryImage}
				planetName={planets.mercury.name}
				className={css.planet__header}
			/>
			{data?.map(
				(quiz, index) =>
					index < 10 &&
					(isMobile ? (
						<MobileDot
							{...quiz}
							key={quiz.id}
							className={cn(css.planet__quiz, css[`planet__quiz_${index}`])}
							onClick={() => handleQuizClick(quiz.id)}
						/>
					) : (
						<DesktopDot
							{...quiz}
							key={quiz.id}
							className={cn(css.planet__quiz, css[`planet__quiz_${index}`])}
							onClick={() => handleQuizClick(quiz.id)}
						/>
					))
			)}
			{isDetailOpened && <DetailMain />}
		</WithBackground>
	)
}
