import { Center, Container, useBreakpointValue } from '@chakra-ui/react'
import { LanguageSelect } from '../atoms/LanguageSelect'
import { Logo } from '../atoms/Logo'
import { NavigationBar } from '../molecules/NavigationBar'
import { Drawer } from './Drawer'

export function Header() {
	const isWide = useBreakpointValue({ base: false, md: true })

	return (
		<Center bgColor='brand.200' position='fixed' w='100vw'>
			<Container
				maxW='1200px'
				p='0.5rem'
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
