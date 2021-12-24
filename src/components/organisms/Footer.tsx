import { Box, Flex, Heading, Text, Image, Stack } from '@chakra-ui/react'
import { Link } from '../atoms/Link'
import { Section } from '../templates/Section'

export function Footer() {
	return (
		<Section bgColor='brand.200'>
			<Flex
				flexDir={{ base: 'column', md: 'row' }}
				w='100%'
				justifyContent='space-between'
				mb='2rem'
			>
				<Stack direction='column' spacing='0.2rem'>
					<Heading size='sm' variant='light' mt='2rem' mb='0.5rem'>
						PRODUCT
					</Heading>
					<Link color='primary.100' href=''>
						Tractian Sensor
					</Link>
					<Link color='primary.100' href=''>
						Platform
					</Link>
					<Link color='primary.100' href=''>
						Features
					</Link>
					<Link color='primary.100' href=''>
						Plans and Prices
					</Link>
				</Stack>

				<Stack direction='column' spacing='0.2rem'>
					<Heading size='sm' variant='light' mt='2rem' mb='0.5rem'>
						CONTENT
					</Heading>
					<Link color='primary.100' href=''>
						Guides and E-books
					</Link>
					<Link color='primary.100' href=''>
						Checklists
					</Link>
					<Link color='primary.100' href=''>
						Intensivão
					</Link>
					<Link color='primary.100' href=''>
						ROI Calculator
					</Link>
				</Stack>

				<Stack direction='column' spacing='0.2rem'>
					<Heading size='sm' variant='light' mt='2rem' mb='0.5rem'>
						ABOUT TRACTIAN
					</Heading>
					<Link color='primary.100' href=''>
						Meet Tractian
					</Link>
					<Link color='primary.100' href=''>
						Success Cases
					</Link>
					<Link color='primary.100' href=''>
						Press
					</Link>
					<Link color='primary.100' href=''>
						Careers
					</Link>
				</Stack>

				<Stack direction='column' spacing='0.2rem'>
					<Heading size='sm' variant='light' mt='2rem' mb='0.5rem'>
						CONTACT US
					</Heading>
					<Link color='primary.100' href=''>
						Contact
					</Link>
					<Link color='primary.100' href=''>
						Refer and Win
					</Link>
					<Link color='primary.100' href=''>
						Schedule a demo
					</Link>
					<Text variant='light'>©Tractian Tecnologia Ltda</Text>
					<Text variant='light'>CNPJ: 35.755.699/0001-84</Text>
				</Stack>
			</Flex>

			<Flex
				flexDir={{ base: 'column', md: 'row' }}
				w='100%'
				justifyContent='space-between'
			>
				<Box>
					<Heading size='sm' variant='light' mt='2rem' mb='0.5rem'>
						INVESTED BY
					</Heading>
					<Stack direction={{ base: 'column', md: 'row' }} spacing='2rem'>
						<Image
							objectFit='contain'
							h='2rem'
							src='/icons/logo-citrino-branca.png'
							alt='Citrino'
						/>

						<Image
							objectFit='contain'
							h='2rem'
							src='/icons/logo-ycombinator-branca.png'
							alt='Y Combinator'
						/>

						<Image
							objectFit='contain'
							h='2rem'
							src='/icons/logo-dfg-branca.png'
							alt='DGF'
						/>
					</Stack>
				</Box>

				<Box>
					<Heading size='sm' variant='light' mt='2rem' mb='0.5rem'>
						RECOGNITION
					</Heading>
					<Stack direction='row' spacing='2rem'>
						<Image
							h='3rem'
							src='/icons/capterra-badge.png'
							alt='Capterra award'
						/>

						<Image h='3rem' src='/icons/logo-stw.png' alt='Startups to watch' />

						<Image
							h='3rem'
							src='/icons/logo-gptw.png'
							alt='Great Place to Work'
						/>
					</Stack>
				</Box>

				<Box>
					<Heading size='sm' variant='light' mt='2rem' mb='0.5rem'>
						CONNECT WITH TRACTIAN
					</Heading>
					<Stack direction='row' spacing='2rem'>
						<Image h='2rem' src='/icons/linkedin.png' alt='Linkedin' />

						<Image h='2rem' src='/icons/facebook.png' alt='Facebook' />

						<Image h='2rem' src='/icons/instagram.png' alt='Instagram' />

						<Image h='2rem' src='/icons/youtube.png' alt='Youtube' />
					</Stack>
				</Box>
			</Flex>
		</Section>
	)
}
