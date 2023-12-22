import { useLayoutEffect, useRef, useState } from 'react'
import { WithBackground } from '@/shared/layouts'
import {
	CloseButton,
	CustomScroll,
	Loading,
	MainTab,
	Select,
	TeamRating,
	Typography,
	UserRating,
} from '@/shared/ui'
import { Header } from '@/widgets/header'
import { useNavigate } from 'react-router'
import { routesPath } from '@/shared/routing'
import { RatingStars } from './rating-stars'
import { api } from '@/shared/api'
import { useMobile } from '@/shared/hooks'
import { GET_RATING_KEY, GET_USER_KEY } from '@/shared/config'
import { useQuery } from '@tanstack/react-query'
import cn from 'classnames'

import { BackgroundOneImage } from '@assets/img/backgrounds'

import { data as globalData, type TTab, selectData } from '../config/data'

import css from './styles.module.scss'

export const Rating = () => {
	const navigate = useNavigate()
	const innerRef = useRef<HTMLDivElement>(null)
	const rightRef = useRef<HTMLDivElement>(null)

	const [activeTab, setActiveTab] = useState<TTab>('user')
	const [scrollHeight, setScrollHeight] = useState<number>(0)

	const [sortValue, setSortValue] = useState(selectData[0])

	const isMobile = useMobile(1024)

	const { data: ratingData, isLoading } = useQuery({
		queryKey: GET_RATING_KEY(sortValue.value),
		queryFn: () => api.rating.get(sortValue.value),
	})

	const { data: userData } = useQuery({
		queryKey: GET_USER_KEY,
		queryFn: api.user.get,
	})

	useLayoutEffect(() => {
		const { current: innerElement } = innerRef
		const { current: rightElement } = rightRef

		if (!innerElement || !rightElement) return

		const resizeObserverDesktop = new ResizeObserver(() => {
			setScrollHeight(innerElement.clientHeight)
		})

		const resizeObserverMobile = new ResizeObserver(() => {
			setScrollHeight(rightElement.clientHeight)
		})

		if (isMobile) {
			resizeObserverDesktop.unobserve(innerElement)
			resizeObserverMobile.observe(innerElement)
		} else {
			resizeObserverMobile.unobserve(innerElement)
			resizeObserverDesktop.observe(innerElement)
		}

		return () => {
			resizeObserverDesktop.unobserve(innerElement)
			resizeObserverMobile.unobserve(innerElement)
		}
	}, [innerRef, rightRef, isMobile])

	const activeTabData = globalData[activeTab]

	const renderContent = () => {
		if (activeTab === 'user') {
			return ratingData?.userRatingList.map((item, index) => (
				<UserRating
					order_number={index + 1}
					stars_number={item.rating}
					userName={item.username}
					key={item.username}
					className={css.wrapper__rating_user}
					userProfileImageUrl={item.avatar}
					isCurrentUser={userData?.username === item.username}
				/>
			))
		}

		if (activeTab === 'team') {
			return ratingData?.teamRatingList.map((item, index) => (
				<TeamRating
					order_number={index + 1}
					stars_number={item.rating}
					teamName={item.name}
					key={item.name}
					className={css.wrapper__rating_team}
				/>
			))
		}
	}

	const starsQuantity = activeTab === 'team' ? ratingData?.userTeamRating : ratingData?.userRating

	return (
		<WithBackground imageUrl={BackgroundOneImage} className={css.wrapper}>
			<Header className={css.wrapper__header} />
			<div className={cn('container', css.wrapper__top)}>
				<div className={css.wrapper__tabs}>
					{Object.entries(globalData).map(([key, value]) => (
						<MainTab
							isActive={key === activeTab}
							key={key}
							onClick={() => setActiveTab(key as TTab)}
							className={css.wrapper__tab}
						>
							{value.tab}
						</MainTab>
					))}
				</div>
				<CloseButton
					variant='light'
					className={css.wrapper__close}
					onClick={() => navigate(routesPath.home)}
				/>
			</div>
			<main className={cn('container', css.wrapper__main)}>
				<div className={css.wrapper__container}>
					<div className={css.wrapper__outer}>
						<div className={css.wrapper__inner} ref={innerRef}>
							<div className={css.wrapper__left}>
								<Typography className={css.wrapper__title} variant='h1-2'>
									{activeTabData.title}
								</Typography>

								<div className={css.wrapper__selectWrapper}>
									<Typography variant='h2' className={css.wrapper__selectTitle}>
										Сортировка:
									</Typography>
									<Select<string>
										options={selectData}
										value={sortValue}
										onChange={setSortValue}
										disabled={isLoading}
										className={css.wrapper__select}
									/>
								</div>
								<RatingStars
									text={activeTabData.starsText}
									className={css.wrapper__stars}
									disabled={isLoading}
									number={starsQuantity || 0}
								/>
							</div>
							<div className={css.wrapper__right} ref={rightRef}>
								{isLoading ? (
									<div className={css.wrapper__loading}>
										<Loading />
									</div>
								) : (
									<CustomScroll autoHeightMax={scrollHeight} className={css.wrapper__scroll}>
										{renderContent()}
									</CustomScroll>
								)}
							</div>
						</div>
					</div>
				</div>
			</main>
		</WithBackground>
	)
}
