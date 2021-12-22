import { Center, Container } from '@chakra-ui/react'
import { LanguageSelect } from '../atoms/LanguageSelect'
import { Logo } from '../atoms/Logo'
import { NavigationBar } from '../molecules/NavigationBar'

export function Header() {
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

				<NavigationBar />

				<LanguageSelect />
			</Container>
		</Center>
	)
}
