import { FC, useEffect, useState } from 'react'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import { AuthRegisterLayout } from '../layout'
import { Circle } from '../circle'
import { Team } from '../team'
import { ArrowButton, DecorativeBorder, MainButton } from '@/shared/ui'
import { useRegisterState } from '../../model'

import { useGetCompanyInfo } from '@/shared/api'

import cn from 'classnames'

import 'swiper/scss'
import css from './styles.module.scss'

export const AuthRegistrationSlider: FC = () => {
	const setTeam = useRegisterState(state => state.setTeam)
	const setStep = useRegisterState(state => state.setStep)
	const [sliderInstance, setSliderInstance] = useState<SwiperClass | null>(null)

	const { data, isLoading } = useGetCompanyInfo()

	const handlePrevClick = () => {
		if (!sliderInstance) return
		sliderInstance.slidePrev()
	}

	const handleNextClick = () => {
		if (!sliderInstance) return
		sliderInstance.slideNext()
	}

	useEffect(() => {
		if (typeof sliderInstance?.realIndex === 'number' && data) {
			setTeam(data.teams[sliderInstance.realIndex])
		}
	}, [setTeam, sliderInstance?.realIndex, data])

	const isDisabled = !data || isLoading

	return (
		<AuthRegisterLayout title='Выбери корабль'>
			{{
				bottom: (
					<MainButton onClick={() => setStep('form')} disabled={isDisabled}>
						Далее
					</MainButton>
				),
				children: (
					<div className={css.wrapper}>
						<div className={css.wrapper__slider}>
							{!isDisabled && (
								<Swiper
									spaceBetween={0}
									slidesPerView={3}
									centeredSlides={true}
									loop={true}
									className={css.slider}
									speed={600}
									onSwiper={setSliderInstance}
								>
									{data.teams.map(team => (
										<SwiperSlide
											key={team.id}
											className={css.slider__slideWrapper}
										>
											{({ isNext, isPrev, isActive }) => (
												<Team
													image={team.image.registration}
													isBig={isActive}
													name={team.name}
													className={cn(css.slider__slide, {
														[css.slider__slide_status_active]: isActive,
														[css.slider__slide_status_prev]: isPrev,
														[css.slider__slide_status_next]: isNext,
													})}
												/>
											)}
										</SwiperSlide>
									))}
								</Swiper>
							)}
						</div>
						<div className={css.wrapper__content}>
							<div className={css.wrapper__circle} />

							<ArrowButton
								direction='left'
								className={cn(css.arrow, css.arrow_direction_left)}
								onClick={handlePrevClick}
								disabled={isDisabled}
							/>

							<div className={css.main}>
								<DecorativeBorder
									position='left'
									className={css.main__border}
								/>

								<div className={css.main__content}>
									<Circle className={css.main__circle} />
								</div>

								<DecorativeBorder
									position='right'
									className={css.main__border}
								/>
							</div>

							<ArrowButton
								direction='right'
								className={cn(css.arrow, css.arrow_direction_right)}
								onClick={handleNextClick}
								disabled={isDisabled}
							/>

							<div className={css.wrapper__circle} />
						</div>
					</div>
				),
			}}
		</AuthRegisterLayout>
	)
}
