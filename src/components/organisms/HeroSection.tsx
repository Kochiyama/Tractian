import {
	Box,
	Button,
	Center,
	Container,
	Flex,
	Heading,
	HStack,
	Image,
	Text,
} from '@chakra-ui/react'

export function HeroSection() {
	return (
		<Flex bgColor='brand.200' flexDir='column'>
			<Container d='flex' alignItems='center'>
				<Box flex='1'>
					<Heading variant='light' size='lg'>
						Revolutionizing the lives of <br />
						maintenance professionals
					</Heading>

					<HStack mt='0.5rem' spacing='4rem'>
						<Image src='/icons/capterra-classification.svg' alt='capterra' />
						<Image src='/icons/google-classification.svg' alt='capterra' />
					</HStack>

					<Text variant='light' my='1rem'>
						Avoid failures in your machines and make downtime a thing <br />
						of the past with TRACTIAN&apos;s predictive online monitoring and
						asset management system.
					</Text>

					<Button variant='complementar' w='20rem'>
						Schedule a Demo
					</Button>
				</Box>

				<Center flex='1'>
					<Image maxW='40vw' src='/images/hero.svg' alt='Tractian' />
				</Center>
			</Container>

			<Image
				position='relative'
				w='100vw'
				src='/images/ondas.svg'
				alt='Ondas'
			/>
		</Flex>
	)
}
