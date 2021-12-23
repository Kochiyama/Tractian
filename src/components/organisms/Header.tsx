import { Center, Container, useBreakpointValue } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { LanguageSelect } from '../atoms/LanguageSelect'
import { Logo } from '../atoms/Logo'
import { NavigationBar } from '../molecules/NavigationBar'
import { Drawer } from './Drawer'

export function Header() {
	const [scrolledPercentage, setScrolledPercentage] = useState(0)
	const [headerPadding, setHeaderPadding] = useState('2rem')
	// from 2 to 0.5
	const isWide = useBreakpointValue({ base: false, md: true })

	const handleScroll = () => {
		// percentage of viewport height scrolled
		const scrolled = (window.pageYOffset * 100) / window.innerHeight
		setScrolledPercentage(scrolled)
		handleUpdatePadding()
	}

	useEffect(() => {
		if (scrolledPercentage >= 100) {
			return
		}

		const padding = 2 - 2 * (scrolledPercentage / 100)
		if (padding <= 0.5) {
			if (headerPadding !== '0.5rem') {
				setHeaderPadding('0.5rem')
			}

			return
		}

		setHeaderPadding(`${padding.toFixed(2)}rem`)
	}, [scrolledPercentage])

	const handleUpdatePadding = () => {}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true })

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<Center
			bgColor='brand.200'
			position='fixed'
			w='100vw'
			zIndex={99999}
			transition='ease 300ms'
		>
			<Container
				maxW='1200px'
				py={headerPadding}
				d='flex'
				flexDir='row'
				justifyContent='space-between'
				alignItems='center'
				color='primary.100'
			>
				<Logo />

				{isWide ? (
					<>
						<NavigationBar />

						<LanguageSelect />
					</>
				) : (
					<Drawer />
				)}
			</Container>
		</Center>
	)
}
